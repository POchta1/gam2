import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AdvantagesSection from "@/components/advantages-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import TeamSection from "@/components/team-section";
import GallerySection from "@/components/gallery-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AdvantagesSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
