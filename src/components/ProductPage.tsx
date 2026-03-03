"use client";

import { useState } from "react";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import ProductAccordion from "./ProductAccordion";

const PRODUCT = {
  name: "The Linen Summer Dress",
  price: "$148",
  image:
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80&auto=format&fit=crop",
  colors: [
    { name: "Black", hex: "#0A0A0A" },
    { name: "Red", hex: "#C0392B" },
  ],
  sizes: ["00", "0", "2", "4", "6", "8", "10", "12", "14", "16"],
  defaultSize: "10",
};

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState(PRODUCT.defaultSize);
  const [added, setAdded] = useState(false);

  const handleAddToBag = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pb-16">
      {/* Product Image — full bleed */}
      <div className="w-full aspect-[3/4] overflow-hidden bg-brand-gray">
        <img
          src={PRODUCT.image}
          alt={PRODUCT.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product name + price */}
      <div className="flex items-start justify-between px-4 pt-5 pb-1">
        <h1 className="font-cormorant text-2xl font-light tracking-wide leading-snug max-w-[65%]">
          {PRODUCT.name}
        </h1>
        <span className="text-base font-medium tracking-wide pt-1">
          {PRODUCT.price}
        </span>
      </div>

      {/* Divider */}
      <div className="mx-4 border-t border-brand-border mt-4" />

      {/* Color selector */}
      <ColorSelector
        colors={PRODUCT.colors}
        selected={selectedColor}
        onSelect={setSelectedColor}
      />

      {/* Divider */}
      <div className="mx-4 border-t border-brand-border" />

      {/* Size selector */}
      <SizeSelector
        sizes={PRODUCT.sizes}
        selected={selectedSize}
        onSelect={setSelectedSize}
      />

      {/* Add to Bag */}
      <div className="px-4 pt-3 pb-6">
        <button
          onClick={handleAddToBag}
          className={`w-full py-4 text-sm uppercase tracking-extra-wide font-medium transition-colors duration-200 ${
            added
              ? "bg-brand-muted text-brand-white"
              : "bg-brand-black text-brand-white hover:bg-neutral-800"
          }`}
        >
          {added ? "Added to Bag" : "Add to Bag"}
        </button>
      </div>

      {/* Accordion */}
      <ProductAccordion />
    </div>
  );
}
