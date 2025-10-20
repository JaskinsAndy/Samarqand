import SamarqandHero from '@/components/hero/SamarqandHero';
import AboutSection from '@/components/about/AboutSection';
import ImageGallery from '@/components/gallery/ImageGallery';
import ReservationSection from '@/components/reservations/ReservationSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SamarqandHero />
      <AboutSection />
      <ImageGallery />
      <TestimonialsSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
