import { Heart } from 'lucide-react';
import Photo from '@/components/Photo';
import type { MenuItem } from '@/data/menu';
import { formatPrice } from '@/lib/format';

interface ProductCardProps {
  item: MenuItem;
  favourite?: {
    active: boolean;
    onToggle: () => void;
  };
}

export default function ProductCard({ item, favourite }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Photo
          src={item.image}
          alt={item.imageAlt}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="transition duration-700 ease-out group-hover:scale-105"
        />
        {item.bestseller && (
          <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-espresso">
            Bestseller
          </span>
        )}
        {favourite && (
          <button
            type="button"
            onClick={favourite.onToggle}
            aria-pressed={favourite.active}
            aria-label={`${favourite.active ? 'Unlike' : 'Like'} ${item.name}`}
            className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full shadow-soft transition duration-300 hover:scale-110 active:scale-95 ${
              favourite.active ? 'bg-espresso text-cream' : 'bg-white text-espresso hover:text-caramel-700'
            }`}
          >
            <Heart size={18} fill={favourite.active ? 'currentColor' : 'none'} aria-hidden="true" />
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-medium text-espresso">{item.name}</h3>
          <p className="shrink-0 font-semibold text-caramel-700">{formatPrice(item.price)}</p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-espresso-500">{item.description}</p>
      </div>
    </article>
  );
}
