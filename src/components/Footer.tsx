import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">HealthCare+</h3>
            <p className="text-muted-foreground">
              Providing exceptional healthcare services with compassion, 
              innovation, and dedication to your well-being.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/book-appointment" className="block text-muted-foreground hover:text-primary transition-colors">
                Book Appointment
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">General Medicine</p>
              <p className="text-muted-foreground">Emergency Care</p>
              <p className="text-muted-foreground">Telemedicine</p>
              <p className="text-muted-foreground">Laboratory Services</p>
              <p className="text-muted-foreground">Medicine Delivery</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">info@healthcare-plus.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  123 Medical Center Dr<br />
                  Healthcare City, HC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for health tips and updates.
              </p>
            </div>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button variant="medical">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 HealthCare+. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-muted-foreground text-sm">Made with</span>
            <Heart className="w-4 h-4 text-emergency-red fill-current" />
            <span className="text-muted-foreground text-sm">for your health</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;