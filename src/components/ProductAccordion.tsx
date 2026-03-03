"use client";

import { useState } from "react";

const SECTIONS = [
  {
    id: "description",
    title: "Description",
    content:
      "A minimalist linen dress designed for warm-weather ease. Cut in a relaxed silhouette with adjustable straps, this piece moves effortlessly from the beach to an evening out.",
  },
  {
    id: "fit",
    title: "Fit",
    content:
      "Model is 5'10\" and wearing a size 2. Relaxed through the body with a midi length. If you're between sizes, we recommend sizing down.",
  },
  {
    id: "materials",
    title: "Materials & Care",
    content:
      "100% European Linen. Fabric is naturally breathable and softens with every wash. Machine wash cold on a gentle cycle, hang dry. Do not tumble dry.",
  },
  {
    id: "details",
    title: "Details",
    content:
      "Side seam pockets. Concealed back zip closure. Adjustable, removable shoulder straps. Fully lined.",
  },
  {
    id: "clarifications",
    title: "Clarifications",
    content:
      "True to size. Color may appear slightly different depending on your screen settings. Linen is a natural fabric and minor variations in texture are normal.",
  },
];

export default function ProductAccordion() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="border-t border-brand-border mt-2">
      {SECTIONS.map((section) => {
        const isOpen = open === section.id;
        return (
          <div key={section.id} className="border-b border-brand-border">
            <button
              onClick={() => toggle(section.id)}
              className="flex items-center justify-between w-full px-4 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-xs uppercase tracking-widest font-medium">
                {section.title}
              </span>
              <span
                className={`text-brand-muted text-sm transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ease-out ${
                isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-4 pb-5 text-sm text-brand-muted leading-relaxed">
                {section.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
