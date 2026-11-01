import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { menuItems } from '@/data/menu';
import { useLikedItems } from '@/hooks/useLikedItems';
import { buttonClasses } from '@/lib/buttonStyles';

const bestsellers = menuItems.filter((item) => item.bestseller);

export default function BestsellersSection() {
  const { isLiked, toggleLiked } = useLikedItems();

  return (
    <section id="bestsellers" className="section-padding scroll-mt-16 bg-beige-50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Bestsellers"
          title="The favourites our guests keep coming back for"
          description="A few of the most-ordered plates and cups at Crème & Crust. Prices shown in Indian rupees."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {bestsellers.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 100}>
              <ProductCard
                item={item}
                favourite={{ active: isLiked(item.id), onToggle: () => toggleLiked(item.id) }}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <Link to="/menu" className={buttonClasses('secondary', 'px-8 py-4')}>
            View the full menu
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
