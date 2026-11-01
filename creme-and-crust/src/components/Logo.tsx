import { Coffee } from 'lucide-react';

interface LogoProps {
  tone?: 'dark' | 'light';
  className?: string;
}

export default function Logo({ tone = 'dark', className = '' }: LogoProps) {
  const isLight = tone === 'light';
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full ${
          isLight ? 'bg-cream text-espresso' : 'bg-espresso text-cream'
        }`}
        aria-hidden="true"
      >
        <Coffee size={20} strokeWidth={1.75} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-xl font-semibold ${isLight ? 'text-cream' : 'text-espresso'}`}>
          Crème &amp; Crust
        </span>
        <span
          className={`mt-1 text-[10px] uppercase tracking-[0.3em] ${
            isLight ? 'text-beige-200' : 'text-caramel-700'
          }`}
        >
          Café &amp; Bakery
        </span>
      </span>
    </span>
  );
}
