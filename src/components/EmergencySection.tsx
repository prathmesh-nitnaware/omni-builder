import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Clock, AlertTriangle } from 'lucide-react';

const EmergencySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Emergency Services */}
          <div className="gradient-emergency p-8 lg:p-12 rounded-2xl text-white shadow-emergency">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 mr-3" />
              <h2 className="text-3xl font-bold">Emergency Services</h2>
            </div>
            <p className="text-lg mb-8 text-red-100">
              24/7 emergency services across India. Qualified doctors & ambulance services 
              available in 500+ cities with multilingual support.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span className="font-semibold">Emergency: 108 (Free)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Ambulance Available in 500+ Cities</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3" />
                <span>Available: 24/7/365</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full bg-white text-emergency-red hover:bg-white/90"
                onClick={() => window.open('tel:108')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Ambulance (108)
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => window.open('tel:102')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency (102)
              </Button>
            </div>
          </div>

          {/* Right side - Get Emergency Help */}
          <div>
            <Card className="shadow-card border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Get Emergency Help</h3>
                
                <div className="space-y-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">For life-threatening emergencies:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Call our emergency hotline immediately</li>
                      <li>• Describe the emergency clearly</li>
                      <li>• Follow the operator's instructions</li>
                      <li>• Stay calm and provide accurate information</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Emergency departments:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Cardiology</li>
                      <li>• Neurology</li>
                      <li>• Trauma care</li>
                      <li>• Pediatric emergency</li>
                      <li>• Critical care</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" className="w-full">
                      View Emergency Guidelines
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;