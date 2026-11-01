import Reveal from '@/components/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
}: SectionHeadingProps) {
  const isCentered = align === 'center';
  const isLight = tone === 'light';
  return (
    <Reveal className={`max-w-2xl ${isCentered ? 'mx-auto text-center' : ''}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-caramel-700">{eyebrow}</p>
      <h2
        className={`mt-4 text-3xl font-medium sm:text-4xl lg:text-5xl ${
          isLight ? 'text-cream' : 'text-espresso'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base sm:text-lg ${isLight ? 'text-beige-100' : 'text-espresso-500'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
