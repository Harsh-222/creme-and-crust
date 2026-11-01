import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SearchX } from 'lucide-react';
import CategoryFilter from '@/components/CategoryFilter';
import LikedItems from '@/components/menu/LikedItems';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';
import { menuCategories, menuItems, type MenuCategoryId, type MenuItem } from '@/data/menu';
import { useLikedItems } from '@/hooks/useLikedItems';
import { buttonClasses } from '@/lib/buttonStyles';
import { matchesSearch } from '@/lib/search';

const ALL = 'all';

const categoryOptions = [
  { value: ALL, label: 'All Items' },
  ...menuCategories.map((category) => ({ value: category.id, label: category.label })),
];

const itemsById = new Map(menuItems.map((item) => [item.id, item]));

function isMenuCategory(value: string | null): value is MenuCategoryId {
  return menuCategories.some((category) => category.id === value);
}

export default function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const category = isMenuCategory(categoryParam) ? categoryParam : ALL;

  const [query, setQuery] = useState('');
  const { likedIds, isLiked, toggleLiked, clearLiked } = useLikedItems();

  // Favourites keep the order in which they were saved and ignore the search box and category filter.
  const likedItems = useMemo(
    () => likedIds.map((id) => itemsById.get(id)).filter((item): item is MenuItem => Boolean(item)),
    [likedIds]
  );

  const visibleItems = useMemo(
    () =>
      menuItems.filter(
        (item) => (category === ALL || item.category === category) && matchesSearch(item, query)
      ),
    [category, query]
  );

  const resetFilters = () => {
    setQuery('');
    setSearchParams({});
  };

  const handleCategoryChange = (value: string) => {
    setSearchParams(value === ALL ? {} : { category: value });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-beige-100 pb-16 pt-36 sm:pt-44">
        <div className="container-page text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-caramel-700">Our Menu</p>
            <h1 className="mt-4 text-4xl font-medium text-espresso sm:text-5xl lg:text-6xl">
              Something Delicious Awaits
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-espresso-500 sm:text-lg">
              Browse our coffee, cakes, bakes and bites. Tap the heart on the ones you love and find them again in
              Your Favourites.
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-10 max-w-xl">
            <label htmlFor="menu-search" className="sr-only">
              Search the menu
            </label>
            <div className="relative">
              <Search
                size={20}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-espresso-300"
                aria-hidden="true"
              />
              <input
                id="menu-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search for coffee, cakes, sandwiches..."
                className="w-full rounded-full border border-beige-300 bg-white py-4 pl-14 pr-6 text-espresso shadow-soft transition duration-300 placeholder:text-espresso-300 focus:border-caramel-700 focus:outline-none focus:ring-4 focus:ring-caramel-100"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <LikedItems items={likedItems} onUnlike={toggleLiked} onClear={clearLiked} />

        <div id="menu-grid" className="mt-14 scroll-mt-28">
          <div className="flex flex-col gap-6">
            <CategoryFilter options={categoryOptions} value={category} onChange={handleCategoryChange} />
            <p className="text-center text-sm text-espresso-500 sm:text-left" aria-live="polite">
              Showing <span className="font-semibold text-espresso">{visibleItems.length}</span> of{' '}
              {menuItems.length} items
            </p>
          </div>

          {visibleItems.length > 0 ? (
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visibleItems.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  favourite={{
                    active: isLiked(item.id),
                    onToggle: () => toggleLiked(item.id),
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-16 flex max-w-md flex-col items-center rounded-3xl border border-dashed border-beige-300 bg-white px-8 py-14 text-center shadow-soft">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-beige-100 text-espresso">
                <SearchX size={28} aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-2xl font-medium text-espresso">No treats match that search</h2>
              <p className="mt-3 text-sm leading-relaxed text-espresso-500">
                Try a different word, or clear your filters to see everything on the menu.
              </p>
              <button type="button" onClick={resetFilters} className={buttonClasses('primary', 'mt-8')}>
                Clear search and filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
