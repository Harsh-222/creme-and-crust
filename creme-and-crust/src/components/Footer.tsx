import { Link } from 'react-router-dom';
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import Logo from '@/components/Logo';
import { business, navLinks, openingHours, socialLinks } from '@/data/site';

const socialIcons = {
  Instagram,
  Facebook,
  YouTube: Youtube,
};

export default function Footer() {
  return (
    <footer className="bg-espresso text-beige-100">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="space-y-5">
          <Logo tone="light" />
          <p className="max-w-xs text-sm leading-relaxed text-beige-300">
            A premium air-conditioned café for good coffee, freshly baked bakery and a comfortable place to linger.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Crème & Crust on ${link.label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-beige-300/30 text-beige-100 transition duration-300 hover:-translate-y-0.5 hover:border-caramel-300 hover:text-caramel-300"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg text-cream">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="transition hover:text-caramel-300">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/login" className="transition hover:text-caramel-300">
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-serif text-lg text-cream">
            <Clock size={18} aria-hidden="true" /> Opening Hours
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {openingHours.map((slot) => (
              <li key={slot.days} className="flex justify-between gap-4">
                <span>{slot.days}</span>
                <span className="text-beige-200">{slot.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-beige-300">Timings may change on public holidays.</p>
        </div>

        <div>
          <h3 className="font-serif text-lg text-cream">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-caramel-300" aria-hidden="true" />
              <span>{business.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-caramel-300" aria-hidden="true" />
              <span>{business.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-caramel-300" aria-hidden="true" />
              <span>{business.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-beige-300/15">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-beige-300 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Crème &amp; Crust. All rights reserved.</p>
          <p>Photographs are free stock images from Pexels.</p>
        </div>
      </div>
    </footer>
  );
}
