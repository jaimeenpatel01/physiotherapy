import { NextResponse } from "next/server";
import { verifySession } from "@/lib/admin-auth";

const GITHUB_API = "https://api.github.com";
const FILE_PATH = "site/src/data/video-testimonials.json";

function getConfig() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "dev";

  if (!token || !repo) {
    return null;
  }
  return { token, repo, branch };
}

function headers(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

/**
 * GET — Fetch current testimonials from GitHub (dev branch).
 */
export async function GET() {
  const isAuth = await verifySession();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const config = getConfig();
  if (!config) {
    return NextResponse.json(
      { error: "GitHub integration not configured. Set GITHUB_TOKEN and GITHUB_REPO env vars." },
      { status: 500 }
    );
  }

  try {
    const url = `${GITHUB_API}/repos/${config.repo}/contents/${FILE_PATH}?ref=${config.branch}`;
    const res = await fetch(url, {
      headers: headers(config.token),
      cache: "no-store",
    });

    if (!res.ok) {
      const errorBody = await res.text();
      return NextResponse.json(
        { error: `GitHub API error: ${res.status}`, details: errorBody },
        { status: res.status }
      );
    }

    const data = await res.json();
    const content = Buffer.from(data.content, "base64").toString("utf-8");
    const testimonials = JSON.parse(content);

    return NextResponse.json({
      testimonials,
      sha: data.sha,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch testimonials", details: String(err) },
      { status: 500 }
    );
  }
}

/**
 * PUT — Save updated testimonials to GitHub (dev branch).
 * Expects: { testimonials: [...], sha: "current_sha" }
 */
export async function PUT(request: Request) {
  const isAuth = await verifySession();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const config = getConfig();
  if (!config) {
    return NextResponse.json(
      { error: "GitHub integration not configured. Set GITHUB_TOKEN and GITHUB_REPO env vars." },
      { status: 500 }
    );
  }

  try {
    const { testimonials, sha } = await request.json();

    if (!Array.isArray(testimonials)) {
      return NextResponse.json(
        { error: "testimonials must be an array" },
        { status: 400 }
      );
    }

    if (!sha) {
      return NextResponse.json(
        { error: "sha is required (fetch current data first)" },
        { status: 400 }
      );
    }

    const content = Buffer.from(
      JSON.stringify(testimonials, null, 2) + "\n"
    ).toString("base64");

    const url = `${GITHUB_API}/repos/${config.repo}/contents/${FILE_PATH}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: headers(config.token),
      body: JSON.stringify({
        message: `Update video testimonials via admin portal`,
        content,
        sha,
        branch: config.branch,
      }),
    });

    if (!res.ok) {
      const errorBody = await res.text();
      return NextResponse.json(
        { error: `GitHub API error: ${res.status}`, details: errorBody },
        { status: res.status }
      );
    }

    const result = await res.json();

    return NextResponse.json({
      success: true,
      sha: result.content.sha,
      commitUrl: result.commit.html_url,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to save testimonials", details: String(err) },
      { status: 500 }
    );
  }
}
