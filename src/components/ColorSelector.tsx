interface Color {
  name: string;
  hex: string;
}

interface ColorSelectorProps {
  colors: Color[];
  selected: string;
  onSelect: (name: string) => void;
}

export default function ColorSelector({ colors, selected, onSelect }: ColorSelectorProps) {
  return (
    <div className="flex items-center gap-4 px-4 py-3">
      <span className="text-xs uppercase tracking-widest text-brand-muted font-medium">
        Color
      </span>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => onSelect(color.name)}
            aria-label={color.name}
            aria-pressed={selected === color.name}
            className={`w-6 h-6 rounded-full transition-all duration-150 ${
              selected === color.name
                ? "ring-2 ring-offset-2 ring-brand-black"
                : "ring-1 ring-transparent hover:ring-brand-muted hover:ring-offset-2"
            }`}
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
      <span className="text-xs text-brand-muted ml-1">{selected}</span>
    </div>
  );
}
