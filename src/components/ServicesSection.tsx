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
  Shield
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Calendar,
      title: 'Online Appointment',
      description: 'Book appointments with our qualified doctors easily and quickly.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Pill,
      title: 'Medicine Delivery',
      description: 'Free home delivery of medicines across 500+ cities in India.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Video,
      title: 'Video Consultation',
      description: 'Teleconsultation in Hindi, English & 15+ regional languages.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: FileText,
      title: 'Medical Records',
      description: 'Access and manage your medical history and test reports online.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: TestTube,
      title: 'Laboratory Services',
      description: 'Comprehensive lab tests with quick and accurate results.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Heart,
      title: 'Prescription Management',
      description: 'Manage your prescriptions and get refill reminders.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Stethoscope,
      title: 'General Checkup',
      description: 'Regular health checkups to maintain your overall wellness.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Brain,
      title: 'Mental Health',
      description: 'Professional mental health support and counseling services.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Shield,
      title: 'Emergency Services',
      description: 'Round-the-clock emergency medical services for urgent care.',
      color: 'text-emergency-red',
      bgColor: 'bg-emergency-red/10'
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Healthcare Services Across India</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From tier-1 cities to remote villages - quality medical care accessible to every Indian family.
          </p>
        </div>

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
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant={service.title === 'Emergency Services' ? 'emergency' : 'medical'} 
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
  );
};

export default ServicesSection;