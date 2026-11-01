import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { galleryImages } from '@/data/site';

export default function AtmosphereSection() {
  return (
    <section className="section-padding bg-espresso text-cream">
      <div className="container-page">
        <SectionHeading
          eyebrow="The Atmosphere"
          title="Warm light, quiet corners, honest craft"
          description="A glimpse of the café: relaxed seating, coffee being made and desserts fresh from the display."
          tone="light"
        />

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] sm:gap-6 lg:grid-cols-4 lg:auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.caption}
              delay={index * 90}
              className={`group relative overflow-hidden rounded-3xl ${
                index === 0 ? 'col-span-2 row-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="h-full w-full">
                <Photo
                  src={image.src}
                  alt={image.alt}
                  sizes="(min-width: 1024px) 40vw, 50vw"
                  className="transition duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-espresso-900/55 px-5 py-4">
                <p className="font-serif text-lg text-cream">{image.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
