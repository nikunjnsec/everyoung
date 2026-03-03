interface SizeSelectorProps {
  sizes: string[];
  selected: string;
  onSelect: (size: string) => void;
}

export default function SizeSelector({ sizes, selected, onSelect }: SizeSelectorProps) {
  return (
    <div className="px-4 py-3">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-widest text-brand-muted font-medium">
          Size
        </span>
        <span className="text-xs text-brand-muted underline underline-offset-2 cursor-pointer">
          Size Guide
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            aria-pressed={selected === size}
            className={`w-12 h-12 text-sm font-medium border transition-colors duration-150 ${
              selected === size
                ? "bg-brand-black text-brand-white border-brand-black"
                : "bg-brand-white text-brand-black border-brand-border hover:border-brand-black"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
