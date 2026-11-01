import AtmosphereSection from '@/components/home/AtmosphereSection';
import BestsellersSection from '@/components/home/BestsellersSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import HeroSection from '@/components/home/HeroSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <BestsellersSection />
      <WhyChooseSection />
      <AtmosphereSection />
      <TestimonialsSection />
    </>
  );
}
