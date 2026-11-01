import { Armchair, Award, ChefHat, Snowflake, Users, type LucideIcon } from 'lucide-react';
import type { MenuCategoryId } from '@/data/menu';

export const business = {
  name: 'Crème & Crust',
  tagline: 'Your perfect escape, one cup at a time.',
  email: 'hello@cremeandcrust.in',
  phone: '+91 161 470 5582',
  address: 'Bhamian Khurd, Ludhiana, Punjab',
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/about#contact' },
];

export const openingHours = [
  { days: 'Monday – Friday', hours: '8:00 AM – 11:00 PM' },
  { days: 'Saturday', hours: '10:00 AM – 11:00 PM' },
  { days: 'Sunday', hours: '9:00 AM – 11:00 PM' },
];

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/cremeandcrust.ludhiana' },
  { label: 'Facebook', href: 'https://www.facebook.com/cremeandcrust.ludhiana' },
  { label: 'YouTube', href: 'https://www.youtube.com/@cremeandcrust' },
];

export const homeCategories: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  menuCategory: MenuCategoryId;
}[] = [
  {
    title: 'Coffee & Beverages',
    description: 'Espresso classics, silky lattes and refreshing cold brews.',
    image: 'https://images.pexels.com/photos/38523136/pexels-photo-38523136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Red cup of coffee on a wooden saucer',
    menuCategory: 'hot-coffee',
  },
  {
    title: 'Cakes & Desserts',
    description: 'Slices of cheesecake, cocoa-rich cakes and tiramisu.',
    image: 'https://images.pexels.com/photos/10249461/pexels-photo-10249461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Two slices of decadent chocolate cake',
    menuCategory: 'cakes-desserts',
  },
  {
    title: 'Bakery & Pastries',
    description: 'Golden croissants and laminated pastries baked each morning.',
    image: 'https://images.pexels.com/photos/6537669/pexels-photo-6537669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Freshly baked buttery croissants',
    menuCategory: 'bakery-pastries',
  },
  {
    title: 'Snacks & Quick Bites',
    description: 'Toasted sandwiches, crispy fries and light bites to share.',
    image: 'https://images.pexels.com/photos/15110224/pexels-photo-15110224.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Close-up of a grilled cheese and ham sandwich',
    menuCategory: 'snacks-sandwiches',
  },
];

export const whyChooseFeatures: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Air-Conditioned Comfort',
    description: 'Cool, quiet seating that stays pleasant through the hottest afternoons.',
    icon: Snowflake,
  },
  {
    title: 'Freshly Prepared Food',
    description: 'Our kitchen bakes and cooks in small batches, so everything arrives warm.',
    icon: ChefHat,
  },
  {
    title: 'Quality Coffee & Desserts',
    description: 'Carefully sourced beans, expertly pulled shots and desserts made to order.',
    icon: Award,
  },
  {
    title: 'A Relaxing Atmosphere',
    description: 'Warm wood, soft lighting and unhurried corners made for slow mornings.',
    icon: Armchair,
  },
  {
    title: 'Welcoming for Everyone',
    description: 'A friendly space for friends, families and students to gather together.',
    icon: Users,
  },
];

export const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/31711911/pexels-photo-31711911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Cozy café interior with wooden chairs and tables',
    caption: 'Comfortable seating',
  },
  {
    src: 'https://images.pexels.com/photos/13735849/pexels-photo-13735849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Barista preparing coffee on an espresso machine',
    caption: 'Coffee preparation',
  },
  {
    src: 'https://images.pexels.com/photos/11406429/pexels-photo-11406429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Café counter with espresso machine and grinders',
    caption: 'The bar',
  },
  {
    src: 'https://images.pexels.com/photos/12927134/pexels-photo-12927134.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Chocolate cake slices topped with strawberries',
    caption: 'Desserts',
  },
];

export const testimonials = [
  {
    quote:
      'A lovely cool corner to study with a cappuccino. The brownie is worth the visit on its own.',
    name: 'Sample Guest A',
    detail: 'Illustrative testimonial',
  },
  {
    quote:
      'Perfect for catching up with friends. The seating is comfortable and the air-conditioning is just right.',
    name: 'Sample Guest B',
    detail: 'Illustrative testimonial',
  },
  {
    quote:
      'The croissants are flaky and the cold coffee is my weekend ritual. Staff are warm and attentive.',
    name: 'Sample Guest C',
    detail: 'Illustrative testimonial',
  },
];

export const aboutImage = {
  src: 'https://images.pexels.com/photos/39042055/pexels-photo-39042055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  alt: 'Cozy café scene with minimalist decor, chairs and a table',
};

export const heroImage = {
  src: 'https://images.pexels.com/photos/14994661/pexels-photo-14994661.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  alt: 'Modern café interior bathed in natural light with stylish seating',
};
