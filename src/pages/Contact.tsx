import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  AlertTriangle,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      details: [
        'General: +1 (555) 123-4567',
        'Emergency: +1 (555) 911-HELP',
        'Appointments: +1 (555) 123-BOOK'
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message anytime',
      details: [
        'info@healthcare-plus.com',
        'appointments@healthcare-plus.com',
        'support@healthcare-plus.com'
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our main medical center',
      details: [
        '123 Medical Center Drive',
        'Healthcare City, HC 12345',
        'United States'
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  const departments = [
    {
      name: 'Emergency Department',
      phone: '+1 (555) 911-HELP',
      hours: '24/7 Available',
      icon: AlertTriangle,
      color: 'text-emergency-red'
    },
    {
      name: 'Appointments',
      phone: '+1 (555) 123-BOOK',
      hours: 'Mon-Fri: 8AM-6PM',
      icon: Calendar,
      color: 'text-primary'
    },
    {
      name: 'General Inquiries',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Fri: 9AM-5PM',
      icon: MessageCircle,
      color: 'text-primary'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're here to help with all your healthcare needs. Reach out to us anytime 
            for appointments, questions, or emergency care.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 border-0">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${method.color}`} />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2">
                      {method.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="What is this regarding?" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Please describe how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button variant="medical" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Department Info */}
            <div className="space-y-8">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Hours of Operation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-muted-foreground">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Saturday</span>
                      <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Sunday</span>
                      <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-emergency-red">Emergency Services</span>
                      <span className="text-emergency-red font-medium">24/7 Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Department Numbers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departments.map((dept, index) => {
                      const IconComponent = dept.icon;
                      return (
                        <div key={index} className="flex items-center p-4 bg-muted rounded-lg">
                          <IconComponent className={`w-6 h-6 ${dept.color} mr-4`} />
                          <div className="flex-1">
                            <p className="font-medium">{dept.name}</p>
                            <p className="text-sm text-muted-foreground">{dept.phone}</p>
                            <p className="text-sm text-muted-foreground">{dept.hours}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p>Interactive Map</p>
                        <p className="text-sm">123 Medical Center Drive</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;