import { ArrowRight, Award, Coffee, Heart, Sofa } from 'lucide-react';
import ContactDetails from '@/components/contact/ContactDetails';
import ContactForm from '@/components/contact/ContactForm';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { aboutImage } from '@/data/site';
import { Link } from 'react-router-dom';
import { buttonClasses } from '@/lib/buttonStyles';

const pillars = [
  {
    icon: Coffee,
    title: 'Freshness',
    text: 'Beans are ground to order and pastries are baked in small batches through the day.',
  },
  {
    icon: Award,
    title: 'Quality',
    text: 'Carefully chosen ingredients and well-tested recipes keep every cup and plate to the same standard.',
  },
  {
    icon: Heart,
    title: 'Hospitality',
    text: 'Our team greets every guest like a regular, whether it is their first visit or their fiftieth.',
  },
  {
    icon: Sofa,
    title: 'Comfort',
    text: 'Air-conditioned seating, soft lighting and space to work, study or simply sit back and unwind.',
  },
];

export default function AboutContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream pb-20 pt-36 sm:pt-44">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-caramel-700">About Us</p>
            <h1 className="mt-4 text-4xl font-medium text-espresso sm:text-5xl">
              A modern café made for good coffee and unhurried days.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-espresso-500 sm:text-lg">
              Crème &amp; Crust was designed for people who enjoy great coffee, delicious food and comfortable
              surroundings. We believe a café should feel like a small escape from the busy day, a place where
              friends catch up, students settle in and families linger over dessert.
            </p>
            <p className="mt-4 text-base leading-relaxed text-espresso-500">
              Our commitment is simple: fresh ingredients, carefully made drinks, warm service and a space that is
              always cool, calm and welcoming.
            </p>
          </Reveal>
          <Reveal delay={150} className="overflow-hidden rounded-[2rem] shadow-lift">
            <div className="aspect-[4/3] w-full">
              <Photo src={aboutImage.src} alt={aboutImage.alt} priority sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Values"
            title="Freshness, quality, hospitality and comfort"
            description="The four promises behind every cup, slice and seat at Crème & Crust."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 120}>
                <div className="h-full rounded-3xl bg-beige-50 p-8 transition duration-500 hover:-translate-y-1 hover:shadow-soft">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-espresso text-cream">
                    <pillar.icon size={24} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl font-medium text-espresso">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-espresso-500">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 flex flex-col items-center gap-6 rounded-3xl border border-beige-200 bg-cream p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="text-2xl font-medium text-espresso">The café experience</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-espresso-500">
                Arrive for a quick espresso, settle in for a slow brunch, or stay for a dessert and a chat. Every
                visit is planned around comfort.
              </p>
            </div>
            <Link to="/menu" className={buttonClasses('primary', 'shrink-0')}>
              Browse the menu
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section-padding scroll-mt-20 bg-beige-100">
        <div className="container-page">
          <SectionHeading
            eyebrow="Contact"
            title="We would love to hear from you"
            description="Reach us for table bookings, catering, feedback or any other question."
          />
          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <Reveal>
              <ContactDetails />
            </Reveal>
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
