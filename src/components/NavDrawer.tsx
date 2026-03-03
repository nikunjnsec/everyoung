"use client";

import { useState } from "react";

interface NavChild {
  label: string;
  href?: string;
  children?: NavChild[];
}

interface NavItem {
  label: string;
  children: NavChild[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "WOMEN",
    children: [
      { label: "New", href: "/women/new" },
      {
        label: "Clothing",
        children: [
          { label: "Tops", href: "/women/clothing/tops" },
          { label: "Tees", href: "/women/clothing/tees" },
          { label: "Dresses", href: "/women/clothing/dresses" },
          { label: "Pants", href: "/women/clothing/pants" },
          { label: "Sweaters", href: "/women/clothing/sweaters" },
        ],
      },
      { label: "Linen", href: "/women/linen" },
      { label: "Dresses", href: "/women/dresses" },
      { label: "Denim", href: "/women/denim" },
      { label: "Tees", href: "/women/tees" },
    ],
  },
  {
    label: "MEN",
    children: [
      { label: "New", href: "/men/new" },
      {
        label: "Clothing",
        children: [
          { label: "Tops", href: "/men/clothing/tops" },
          { label: "Tees", href: "/men/clothing/tees" },
          { label: "Pants", href: "/men/clothing/pants" },
          { label: "Sweaters", href: "/men/clothing/sweaters" },
        ],
      },
      { label: "Linen", href: "/men/linen" },
      { label: "Denim", href: "/men/denim" },
      { label: "Tees", href: "/men/tees" },
    ],
  },
];

interface NavDrawerProps {
  open: boolean;
  onClose: () => void;
}

function SubItem({ item }: { item: NavChild }) {
  const [expanded, setExpanded] = useState(false);

  if (item.children) {
    return (
      <div>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center justify-between w-full py-3 text-sm tracking-widest uppercase text-brand-black"
        >
          <span>{item.label}</span>
          <span className="text-brand-muted text-xs">{expanded ? "−" : "+"}</span>
        </button>
        {expanded && (
          <div className="pl-4 border-l border-brand-border mb-1">
            {item.children.map((child) => (
              <a
                key={child.label}
                href={child.href ?? "#"}
                className="block py-2.5 text-sm text-brand-muted tracking-wide hover:text-brand-black transition-colors"
              >
                {child.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={item.href ?? "#"}
      className="block py-3 text-sm tracking-widest uppercase text-brand-black hover:text-brand-muted transition-colors"
    >
      {item.label}
    </a>
  );
}

export default function NavDrawer({ open, onClose }: NavDrawerProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (label: string) => {
    setExpandedSection((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          open ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-brand-white flex flex-col transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between h-14 px-5 border-b border-brand-border">
          <span className="font-cormorant text-lg tracking-extra-wide uppercase">
            Menu
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-1 text-brand-muted hover:text-brand-black transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav sections */}
        <nav className="flex-1 overflow-y-auto px-5 py-2">
          {NAV_ITEMS.map((section) => (
            <div key={section.label} className="border-b border-brand-border">
              <button
                onClick={() => toggleSection(section.label)}
                className="flex items-center justify-between w-full py-4 font-medium tracking-extra-wide uppercase text-sm"
              >
                <span>{section.label}</span>
                <span className="text-brand-muted text-xs">
                  {expandedSection === section.label ? "−" : "+"}
                </span>
              </button>
              {expandedSection === section.label && (
                <div className="pb-3">
                  {section.children.map((child) => (
                    <SubItem key={child.label} item={child} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
