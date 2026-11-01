export type ButtonVariant = 'primary' | 'secondary' | 'light';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-espresso text-cream shadow-soft hover:bg-espresso-700 hover:shadow-lift',
  secondary: 'border border-espresso/25 bg-transparent text-espresso hover:border-espresso hover:bg-espresso hover:text-cream',
  light: 'bg-cream text-espresso shadow-soft hover:bg-white hover:shadow-lift',
};

export function buttonClasses(variant: ButtonVariant = 'primary', extra = '') {
  return `${base} ${variants[variant]} ${extra}`.trim();
}
