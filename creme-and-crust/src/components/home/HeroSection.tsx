import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Photo from '@/components/Photo';
import { buttonClasses } from '@/lib/buttonStyles';
import { heroImage } from '@/data/site';

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <Photo
        src={heroImage.src}
        alt={heroImage.alt}
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-espresso-900/60" aria-hidden="true" />

      <div className="container-page pb-24 pt-32 sm:pt-40">
        <div className="max-w-2xl">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.35em] text-beige-200">
            Premium café &amp; bakery
          </p>
          <h1
            className="animate-fade-up mt-6 text-4xl font-medium leading-[1.1] text-cream sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: '120ms' }}
          >
            Your Perfect Escape, One Cup at a Time.
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-beige-100 sm:text-lg"
            style={{ animationDelay: '240ms' }}
          >
            Freshly brewed coffee, delightful desserts, and a cozy air-conditioned space to relax, connect, and indulge.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '360ms' }}
          >
            <Link to="/menu" className={buttonClasses('light', 'px-8 py-4')}>
              Explore Our Menu
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/60 px-8 py-4 text-sm font-semibold tracking-wide text-cream transition duration-300 hover:-translate-y-0.5 hover:border-cream hover:bg-cream/10"
            >
              Discover Our Café
            </Link>
          </div>
        </div>
      </div>

      <a
        href="#categories"
        aria-label="Scroll to featured categories"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-beige-100 transition hover:text-cream"
      >
        <ChevronDown size={28} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
