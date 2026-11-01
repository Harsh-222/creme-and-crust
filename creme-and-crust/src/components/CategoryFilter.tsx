export interface FilterOption {
  value: string;
  label: string;
}

interface CategoryFilterProps {
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({ options, value, onChange }: CategoryFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter menu by category"
      className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition duration-300 ${
              active
                ? 'border-espresso bg-espresso text-cream shadow-soft'
                : 'border-beige-300 bg-white text-espresso hover:border-caramel-700 hover:text-caramel-700'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
