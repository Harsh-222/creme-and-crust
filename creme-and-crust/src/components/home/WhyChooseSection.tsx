import { whyChooseFeatures } from '@/data/site';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export default function WhyChooseSection() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Comfort, quality and warmth in every visit"
          description="We focus on the details that make a café worth returning to."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={(index % 3) * 100}>
                <div className="group h-full rounded-3xl border border-beige-200 bg-white p-8 transition duration-500 hover:-translate-y-1 hover:border-caramel-300 hover:shadow-soft">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-beige-100 text-espresso transition duration-500 group-hover:bg-espresso group-hover:text-cream">
                    <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-medium text-espresso">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-espresso-500">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
