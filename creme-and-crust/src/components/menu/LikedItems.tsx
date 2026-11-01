import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import type { MenuItem } from '@/data/menu';
import { buttonClasses } from '@/lib/buttonStyles';

interface LikedItemsProps {
  items: MenuItem[];
  onUnlike: (id: string) => void;
  onClear: () => void;
}

export default function LikedItems({ items, onUnlike, onClear }: LikedItemsProps) {
  const [confirmingClear, setConfirmingClear] = useState(false);
  const count = items.length;

  return (
    <section
      id="liked"
      aria-labelledby="liked-title"
      className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-beige-200 bg-gradient-to-b from-white to-beige-50 p-6 shadow-soft sm:p-10"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4 sm:gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-espresso text-caramel-300 shadow-lift sm:h-16 sm:w-16">
            <Heart size={26} fill="currentColor" aria-hidden="true" />
          </span>
          <div>
            <h2 id="liked-title" className="text-3xl font-medium text-espresso sm:text-4xl">
              Your Favourites
            </h2>
            <p className="mt-1 text-sm text-espresso-500 sm:text-base">
              Your favourite café treats, all in one place.
            </p>
          </div>
        </div>

        {count > 0 && (
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="rounded-full bg-beige-100 px-4 py-2 text-sm font-semibold text-espresso"
              aria-live="polite"
            >
              {count} {count === 1 ? 'item' : 'items'}
            </span>
            {confirmingClear ? (
              <span className="flex items-center gap-2 text-sm">
                <span className="text-espresso-500">Remove all?</span>
                <button
                  type="button"
                  onClick={() => {
                    onClear();
                    setConfirmingClear(false);
                  }}
                  className="rounded-full bg-espresso px-4 py-2 font-semibold text-cream transition hover:bg-espresso-700"
                >
                  Yes, clear
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmingClear(false)}
                  className="rounded-full px-4 py-2 font-semibold text-espresso transition hover:bg-beige-100"
                >
                  Cancel
                </button>
              </span>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmingClear(true)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-espresso-500 underline-offset-4 transition hover:bg-beige-100 hover:text-espresso hover:underline"
              >
                Clear all
              </button>
            )}
          </div>
        )}
      </div>

      {count === 0 ? (
        <div className="mx-auto flex max-w-md flex-col items-center px-2 py-10 text-center sm:py-14">
          <span className="flex h-24 w-24 items-center justify-center rounded-full bg-beige-100 ring-8 ring-beige-50">
            <Heart size={40} strokeWidth={1.5} className="text-caramel-700" aria-hidden="true" />
          </span>
          <h3 className="mt-8 text-2xl font-medium text-espresso sm:text-3xl">No Favourites Yet</h3>
          <p className="mt-3 text-sm leading-relaxed text-espresso-500 sm:text-base">
            Discover something delicious and save your favourites for later.
          </p>
          <Link to="/menu#menu-grid" className={buttonClasses('primary', 'mt-8 px-8 py-4')}>
            Explore Menu
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      ) : (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <li key={item.id} className="h-full">
              <ProductCard item={item} favourite={{ active: true, onToggle: () => onUnlike(item.id) }} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
