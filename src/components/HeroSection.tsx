import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, MessageCircle, User, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/medical-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern medical facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Quick Healthcare, <br />
              <span className="text-blue-200">Anytime, Anywhere</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Dr. Quick connects you with qualified MBBS doctors across India instantly. 
              Expert medical advice, wellness programs & emergency care - all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book-appointment">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consult Help
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - Quick Access Card */}
          <div className="lg:ml-8">
            <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-card-hover border-0">
              <h3 className="text-2xl font-semibold mb-6 text-center">Quick Access</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer">
                  <User className="w-8 h-8 text-primary mr-4" />
                  <div>
                    <p className="font-medium">Patient Portal</p>
                    <p className="text-sm text-muted-foreground">Access your medical records</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer">
                  <Calendar className="w-8 h-8 text-primary mr-4" />
                  <div>
                    <p className="font-medium">Book Appointment</p>
                    <p className="text-sm text-muted-foreground">Schedule with our doctors</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-emergency-red/5 rounded-lg hover:bg-emergency-red/10 transition-colors cursor-pointer">
                  <Shield className="w-8 h-8 text-emergency-red mr-4" />
                  <div>
                    <p className="font-medium text-emergency-red">Emergency</p>
                    <p className="text-sm text-muted-foreground">24/7 urgent care available</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;