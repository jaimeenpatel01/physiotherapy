"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: readonly FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3" id="faq-accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`rounded-2xl border transition-all duration-300 ${
            openIndex === index
              ? "border-primary/20 bg-white shadow-lg shadow-primary/5"
              : "border-border bg-white hover:border-primary/10"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 md:p-6 text-left"
            aria-expanded={openIndex === index}
            id={`faq-btn-${index}`}
          >
            <span className="font-semibold text-foreground text-sm md:text-base pr-4">
              {item.question}
            </span>
            <span
              className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                openIndex === index
                  ? "bg-primary text-white rotate-180"
                  : "bg-surface text-muted"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <p className="text-muted text-sm leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
