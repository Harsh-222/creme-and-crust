import { Star } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { testimonials } from '@/data/site';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-beige-50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title="What guests might say"
          description="These are clearly labelled sample testimonials for demonstration. They are not verified customer reviews."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 120}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="flex gap-1 text-caramel-700" aria-label="Five star sample rating">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} size={16} fill="currentColor" aria-hidden="true" />
                    ))}
                  </span>
                  <span className="rounded-full bg-beige-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-espresso-500">
                    Sample
                  </span>
                </div>
                <blockquote className="mt-6 flex-1 font-serif text-lg leading-relaxed text-espresso">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 border-t border-beige-200 pt-5">
                  <p className="font-semibold text-espresso">{testimonial.name}</p>
                  <p className="text-sm text-espresso-500">{testimonial.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
