import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Video, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppointmentSection = () => {
  const appointmentTypes = [
    {
      icon: User,
      title: 'In-Person Visit',
      description: 'Schedule a face-to-face consultation with our experienced doctors.',
      duration: '30-60 minutes',
      price: 'From $150'
    },
    {
      icon: Video,
      title: 'Video Consultation', 
      description: 'Connect with doctors remotely from the comfort of your home.',
      duration: '15-45 minutes',
      price: 'From $100'
    },
    {
      icon: Clock,
      title: 'Urgent Care',
      description: 'Same-day appointments for urgent but non-emergency medical needs.',
      duration: '20-40 minutes',
      price: 'From $200'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Book Your Appointment</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from multiple consultation options that suit your needs and schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {appointmentTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 border-0">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-muted-foreground">Duration: {type.duration}</p>
                    <p className="text-lg font-semibold text-primary">{type.price}</p>
                  </div>
                  <Link to="/book-appointment">
                    <Button variant="medical" className="w-full">
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="inline-block p-6 shadow-card border-0">
            <div className="flex items-center space-x-4">
              <Calendar className="w-8 h-8 text-primary" />
              <div className="text-left">
                <p className="font-semibold">Need help choosing?</p>
                <p className="text-sm text-muted-foreground">Our team can help you select the right appointment type</p>
              </div>
              <Button variant="outline">
                Contact Us
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;