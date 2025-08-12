import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Pill, 
  Video, 
  FileText, 
  Stethoscope, 
  TestTube, 
  Heart, 
  Brain,
  Shield,
  Clock,
  Users,
  Zap
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: 'Online Appointment Booking',
      description: 'Book appointments with our qualified doctors easily and quickly through our advanced scheduling system.',
      features: ['24/7 online booking', 'Real-time availability', 'Appointment reminders', 'Easy rescheduling'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Pill,
      title: 'Medicine Delivery',
      description: 'Get your prescribed medicines delivered to your doorstep with our reliable pharmacy service.',
      features: ['Same-day delivery', 'Prescription management', 'Refill reminders', 'Quality assurance'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Video,
      title: 'Telemedicine Consultation',
      description: 'Consult with doctors from the comfort of your home via secure video calls.',
      features: ['HD video quality', 'Secure platform', 'Record consultations', 'Multi-device support'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: FileText,
      title: 'Digital Medical Records',
      description: 'Access and manage your complete medical history and test reports online securely.',
      features: ['Cloud storage', 'Easy sharing', 'Complete history', 'Privacy protection'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: TestTube,
      title: 'Laboratory Services',
      description: 'Comprehensive lab tests with quick and accurate results from certified laboratories.',
      features: ['Home collection', 'Fast results', 'Wide test range', 'Digital reports'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Heart,
      title: 'Prescription Management',
      description: 'Manage your prescriptions and get automated refill reminders.',
      features: ['Auto refills', 'Drug interactions', 'Dosage tracking', 'Insurance support'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Stethoscope,
      title: 'General Health Checkup',
      description: 'Regular comprehensive health checkups to maintain your overall wellness.',
      features: ['Full body checkup', 'Preventive care', 'Health reports', 'Lifestyle advice'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Brain,
      title: 'Mental Health Support',
      description: 'Professional mental health support and counseling services from licensed therapists.',
      features: ['Licensed therapists', 'Privacy assured', 'Flexible scheduling', 'Crisis support'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Shield,
      title: 'Emergency Medical Services',
      description: 'Round-the-clock emergency medical services for urgent healthcare needs.',
      features: ['24/7 availability', 'Rapid response', 'Ambulance service', 'Critical care'],
      color: 'text-emergency-red',
      bgColor: 'bg-emergency-red/10'
    },
    {
      icon: Users,
      title: 'Family Healthcare Plans',
      description: 'Comprehensive healthcare plans designed for families with special discounts.',
      features: ['Family discounts', 'Multiple members', 'Shared records', 'Priority booking'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Clock,
      title: 'Urgent Care Services',
      description: 'Same-day appointments for urgent but non-emergency medical conditions.',
      features: ['Same-day booking', 'Walk-in options', 'Extended hours', 'Quick diagnosis'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Zap,
      title: 'Health Monitoring',
      description: 'Advanced health monitoring with wearable device integration and analytics.',
      features: ['Device integration', 'Real-time monitoring', 'Health insights', 'Alert system'],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Healthcare Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive medical services designed to meet all your healthcare needs 
            with the latest technology and expert medical professionals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-0">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button 
                      variant={service.title === 'Emergency Medical Services' ? 'emergency' : 'medical'} 
                      size="sm"
                      className="w-full"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards better health. Book an appointment or contact us for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="medical" size="lg">
              Book Appointment
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;