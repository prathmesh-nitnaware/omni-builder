import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import EmergencySection from '@/components/EmergencySection';
import AppointmentSection from '@/components/AppointmentSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <EmergencySection />
      <AppointmentSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
