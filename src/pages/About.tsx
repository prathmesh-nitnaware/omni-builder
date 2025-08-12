import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Clock, 
  Heart,
  Shield,
  Stethoscope,
  GraduationCap,
  Target
} from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: '50,000+',
      label: 'Patients Served'
    },
    {
      icon: Stethoscope,
      number: '200+',
      label: 'Expert Doctors'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years Experience'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Emergency Care'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and genuine concern for their well-being.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety is our top priority. We maintain the highest standards of medical safety.'
    },
    {
      icon: GraduationCap,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from patient care to medical outcomes.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology to provide the best possible healthcare solutions.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      specialty: 'Cardiology',
      experience: '15+ years',
      avatar: '👩‍⚕️'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Head of Emergency',
      specialty: 'Emergency Medicine',
      experience: '12+ years',
      avatar: '👨‍⚕️'
    },
    {
      name: 'Dr. Emily Davis',
      role: 'Pediatrics Specialist',
      specialty: 'Pediatrics',
      experience: '10+ years',
      avatar: '👩‍⚕️'
    },
    {
      name: 'Dr. David Wilson',
      role: 'Neurology Expert',
      specialty: 'Neurology',
      experience: '18+ years',
      avatar: '👨‍⚕️'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About HealthCare+</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Dedicated to providing exceptional healthcare services with compassion, 
            innovation, and unwavering commitment to your well-being.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center shadow-card border-0">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To revolutionize healthcare delivery by combining cutting-edge medical technology 
                with compassionate care, making quality healthcare accessible to everyone, everywhere.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that healthcare should be patient-centered, technology-enabled, and 
                focused on outcomes that matter most to you and your family.
              </p>
              <Button variant="medical" size="lg">
                Learn More About Our Mission
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="shadow-card border-0">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team of experienced healthcare professionals is dedicated to providing 
              you with the highest quality medical care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-2">{member.specialty}</p>
                  <p className="text-muted-foreground text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                Founded in 2009, HealthCare+ began with a simple vision: to make quality healthcare 
                accessible to everyone. What started as a small clinic with a handful of dedicated 
                doctors has grown into a comprehensive healthcare platform serving thousands of patients.
              </p>
              <p className="mb-6">
                Over the years, we've embraced technology and innovation while never losing sight of 
                what matters most - the human connection between doctor and patient. Our commitment 
                to compassionate care, combined with cutting-edge medical technology, has made us 
                a trusted healthcare partner for families across the region.
              </p>
              <p className="mb-8">
                Today, we continue to expand our services, improve our technology, and most importantly, 
                listen to our patients' needs. Because at HealthCare+, your health truly is our priority.
              </p>
            </div>
            <Button variant="medical" size="lg">
              Join Our Healthcare Family
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;