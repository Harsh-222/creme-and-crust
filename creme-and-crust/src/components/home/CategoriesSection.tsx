import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { homeCategories } from '@/data/site';

export default function CategoriesSection() {
  return (
    <section id="categories" className="section-padding scroll-mt-16">
      <div className="container-page">
        <SectionHeading
          eyebrow="Explore"
          title="Something for every craving"
          description="From slow-brewed coffee to warm bakes and light bites, every category is made to be shared."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 100}>
              <Link
                to={`/menu?category=${category.menuCategory}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <Photo
                    src={category.image}
                    alt={category.imageAlt}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
                    className="transition duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-medium text-espresso">{category.title}</h3>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-caramel-700 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-espresso-500">{category.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
