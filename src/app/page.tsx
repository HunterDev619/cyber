import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/cyber/Hero';
import ServicesGrid from '@/components/cyber/ServicesGrid';
import CaseStudies from '@/components/cyber/CaseStudies';
import LogoCloud from '@/components/cyber/LogoCloud';
import CTA from '@/components/cyber/CTA';

export default function CyberPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="light" />
      <main>
        <Hero />
        <LogoCloud />
        <ServicesGrid />
        <CaseStudies />
        <CTA />
      </main>
      <Footer variant="light" />
    </div>
  );
}
