import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { business, openingHours, socialLinks } from '@/data/site';

const details = [
  { icon: MapPin, label: 'Address', value: business.address },
  { icon: Phone, label: 'Phone', value: business.phone },
  { icon: Mail, label: 'Email', value: business.email },
];

export default function ContactDetails() {
  return (
    <div className="space-y-8">
      <ul className="space-y-6">
        {details.map((item) => (
          <li key={item.label} className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-beige-100 text-espresso">
              <item.icon size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-caramel-700">{item.label}</p>
              <p className="mt-1 text-espresso">{item.value}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="rounded-3xl bg-white p-7 shadow-soft">
        <h3 className="flex items-center gap-2 text-lg font-medium text-espresso">
          <Clock size={18} aria-hidden="true" /> Opening Hours
        </h3>
        <ul className="mt-5 divide-y divide-beige-200">
          {openingHours.map((slot) => (
            <li key={slot.days} className="flex justify-between gap-4 py-3 text-sm">
              <span className="text-espresso">{slot.days}</span>
              <span className="font-medium text-espresso-500">{slot.hours}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-espresso-500">Sample timings, to be confirmed by the café.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-caramel-700">Follow Us</h3>
        <ul className="mt-4 flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-beige-300 bg-white px-4 py-2 text-sm font-medium text-espresso transition duration-300 hover:border-espresso hover:bg-espresso hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
