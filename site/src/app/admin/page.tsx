"use client";

import { useState, useCallback } from "react";

interface Testimonial {
  id: string;
  youtubeId: string;
  name: string;
  location: string;
  title: string;
  description?: string;
  type: "short" | "video";
}

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "saving" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [sha, setSha] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [editingId, setEditingId] = useState<string | null>(null);

  // ── Fetch testimonials ─────────────────────────────────
  const fetchTestimonials = useCallback(async () => {
    setStatus({ kind: "loading" });
    try {
      const res = await fetch("/api/admin/testimonials");
      if (res.status === 401) {
        setIsLoggedIn(false);
        return;
      }
      const data = await res.json();
      if (res.ok) {
        setTestimonials(data.testimonials);
        setSha(data.sha);
        setStatus({ kind: "idle" });
      } else {
        setStatus({ kind: "error", message: data.error || "Failed to load" });
      }
    } catch {
      setStatus({ kind: "error", message: "Network error" });
    }
  }, []);

  // ── Login ──────────────────────────────────────────────
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (res.ok) {
        setIsLoggedIn(true);
        setPassword("");
        fetchTestimonials();
      } else {
        setLoginError(data.error || "Login failed");
      }
    } catch {
      setLoginError("Network error");
    } finally {
      setLoginLoading(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setIsLoggedIn(false);
    setTestimonials([]);
    setSha("");
  }

  // ── Save testimonials ──────────────────────────────────
  async function handleSave() {
    setStatus({ kind: "saving" });
    try {
      const res = await fetch("/api/admin/testimonials", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ testimonials, sha }),
      });
      const data = await res.json();

      if (res.ok) {
        setSha(data.sha);
        setStatus({
          kind: "success",
          message: `Saved! Committed to dev branch. Site will update after you merge to main.`,
        });
        setEditingId(null);
      } else {
        setStatus({ kind: "error", message: data.error || "Save failed" });
      }
    } catch {
      setStatus({ kind: "error", message: "Network error" });
    }
  }

  // ── CRUD helpers ───────────────────────────────────────
  function addTestimonial() {
    const newId = `testimonial-${Date.now()}`;
    const newItem: Testimonial = {
      id: newId,
      youtubeId: "",
      name: "",
      location: "",
      title: "",
      description: "",
      type: "short",
    };
    setTestimonials((prev) => [...prev, newItem]);
    setEditingId(newId);
  }

  function updateTestimonial(id: string, field: keyof Testimonial, value: string) {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, [field]: value } : t))
    );
  }

  function deleteTestimonial(id: string) {
    if (!confirm("Delete this testimonial?")) return;
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
    if (editingId === id) setEditingId(null);
  }

  function moveTestimonial(index: number, direction: "up" | "down") {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= testimonials.length) return;
    const updated = [...testimonials];
    [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
    setTestimonials(updated);
  }

  // ── Login screen ───────────────────────────────────────
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-[#0B6CB0]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-[#0B6CB0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Admin Portal</h1>
              <p className="text-sm text-gray-500 mt-1">Manage Patient Stories</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="admin-password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B6CB0]/40 focus:border-[#0B6CB0]"
                  placeholder="Enter admin password"
                  required
                  autoFocus
                />
              </div>

              {loginError && (
                <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{loginError}</p>
              )}

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-2.5 rounded-xl bg-[#0B6CB0] text-white font-semibold text-sm hover:bg-[#094d80] disabled:opacity-50 transition-colors"
              >
                {loginLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ── Dashboard ──────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-gray-900">Patient Stories</h1>
            <p className="text-xs text-gray-500">Admin Portal — commits to dev branch</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchTestimonials}
              disabled={status.kind === "loading"}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 transition-colors"
              aria-label="Refresh testimonials"
            >
              ↻ Refresh
            </button>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        {/* Status bar */}
        {status.kind === "loading" && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-blue-50 text-blue-700 text-sm">
            Loading testimonials...
          </div>
        )}
        {status.kind === "saving" && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-yellow-50 text-yellow-700 text-sm">
            Saving to GitHub (dev branch)...
          </div>
        )}
        {status.kind === "success" && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-green-50 text-green-700 text-sm flex items-center justify-between">
            <span>{status.message}</span>
            <button
              onClick={() => setStatus({ kind: "idle" })}
              className="text-green-500 hover:text-green-700 text-lg leading-none"
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        )}
        {status.kind === "error" && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 text-red-700 text-sm flex items-center justify-between">
            <span>{status.message}</span>
            <button
              onClick={() => setStatus({ kind: "idle" })}
              className="text-red-500 hover:text-red-700 text-lg leading-none"
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        )}

        {/* Testimonial list */}
        <div className="space-y-4">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100 bg-gray-50/50">
                {/* Reorder buttons */}
                <div className="flex flex-col gap-0.5">
                  <button
                    onClick={() => moveTestimonial(index, "up")}
                    disabled={index === 0}
                    className="text-gray-400 hover:text-gray-600 disabled:opacity-30 text-xs leading-none"
                    aria-label="Move up"
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => moveTestimonial(index, "down")}
                    disabled={index === testimonials.length - 1}
                    className="text-gray-400 hover:text-gray-600 disabled:opacity-30 text-xs leading-none"
                    aria-label="Move down"
                  >
                    ▼
                  </button>
                </div>

                {/* Thumbnail */}
                {t.youtubeId && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`https://img.youtube.com/vi/${t.youtubeId}/default.jpg`}
                    alt=""
                    className="w-16 h-12 rounded object-cover"
                  />
                )}

                {/* Summary info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm truncate">
                    {t.name || "Untitled"}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {t.youtubeId || "No video ID"} · {t.type === "short" ? "Short (9:16)" : "Video (16:9)"}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditingId(editingId === t.id ? null : t.id)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#0B6CB0] bg-[#0B6CB0]/10 hover:bg-[#0B6CB0]/20 transition-colors"
                  >
                    {editingId === t.id ? "Close" : "Edit"}
                  </button>
                  <button
                    onClick={() => deleteTestimonial(t.id)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Edit form (expanded) */}
              {editingId === t.id && (
                <div className="px-5 py-4 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        YouTube Video ID *
                      </label>
                      <input
                        type="text"
                        value={t.youtubeId}
                        onChange={(e) => updateTestimonial(t.id, "youtubeId", e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0B6CB0]/40 focus:border-[#0B6CB0]"
                        placeholder="e.g. 5ap-23mV46o"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Video Type *
                      </label>
                      <select
                        value={t.type}
                        onChange={(e) => updateTestimonial(t.id, "type", e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0B6CB0]/40 focus:border-[#0B6CB0] bg-white"
                      >
                        <option value="short">YouTube Short (Vertical 9:16)</option>
                        <option value="video">Normal Video (Horizontal 16:9)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Patient Name *
                      </label>
                      <input
                        type="text"
                        value={t.name}
                        onChange={(e) => updateTestimonial(t.id, "name", e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0B6CB0]/40 focus:border-[#0B6CB0]"
                        placeholder="e.g. Daksh Patel"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Location *
                      </label>
                      <input
                        type="text"
                        value={t.location}
                        onChange={(e) => updateTestimonial(t.id, "location", e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0B6CB0]/40 focus:border-[#0B6CB0]"
                        placeholder="e.g. Pethapur, Gandhinagar"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Title / Category *
                      </label>
                      <input
                        type="text"
                        value={t.title}
                        onChange={(e) => updateTestimonial(t.id, "title", e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0B6CB0]/40 focus:border-[#0B6CB0]"
                        placeholder="e.g. Knee Recovery"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Short Description
                      </label>
                      <input
                        type="text"
                        value={t.description || ""}
                        onChange={(e) => updateTestimonial(t.id, "description", e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0B6CB0]/40 focus:border-[#0B6CB0]"
                        placeholder="Optional brief description"
                      />
                    </div>
                  </div>

                  {/* Preview */}
                  {t.youtubeId && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs font-medium text-gray-500 mb-2">Preview</p>
                      <div className={`rounded-lg overflow-hidden bg-black inline-block ${t.type === "short" ? "w-[120px]" : "w-[240px]"}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg`}
                          alt="Video preview"
                          className={`w-full ${t.type === "short" ? "aspect-[9/16] object-contain" : "aspect-video object-cover"}`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty state */}
        {testimonials.length === 0 && status.kind !== "loading" && (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
            <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm">No testimonials yet.</p>
            <p className="text-gray-400 text-xs mt-1">Add your first patient story below.</p>
          </div>
        )}

        {/* Bottom actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={addTestimonial}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border-2 border-dashed border-gray-300 text-sm font-medium text-gray-600 hover:border-[#0B6CB0] hover:text-[#0B6CB0] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add Testimonial
          </button>

          <div className="flex-1" />

          <button
            onClick={handleSave}
            disabled={status.kind === "saving" || status.kind === "loading"}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#0B6CB0] text-white font-semibold text-sm hover:bg-[#094d80] disabled:opacity-50 shadow-lg shadow-[#0B6CB0]/20 transition-all"
          >
            {status.kind === "saving" ? (
              "Saving..."
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Save &amp; Commit to Dev
              </>
            )}
          </button>
        </div>

        {/* Help footer */}
        <div className="mt-8 p-4 rounded-xl bg-gray-100 border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">How it works</h3>
          <ol className="text-xs text-gray-500 space-y-1 list-decimal list-inside">
            <li>Upload your video to YouTube as a Public video or Short.</li>
            <li>Copy the YouTube video ID from the URL.</li>
            <li>Click &quot;Add Testimonial&quot; above and fill in the details.</li>
            <li>Click &quot;Save &amp; Commit to Dev&quot; — this commits to the <code className="bg-gray-200 px-1 rounded">dev</code> branch.</li>
            <li>Review changes on your dev deployment, then merge to <code className="bg-gray-200 px-1 rounded">main</code> when ready.</li>
          </ol>
        </div>
      </main>
    </div>
  );
}
