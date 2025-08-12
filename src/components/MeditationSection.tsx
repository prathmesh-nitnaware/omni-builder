import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Moon, 
  Waves, 
  Brain,
  Flower,
  Sun,
  Clock,
  Play
} from 'lucide-react';

const MeditationSection = () => {
  const sessions = [
    {
      icon: Heart,
      title: 'Stress Relief',
      duration: '10 min',
      description: 'Guided meditation to reduce stress and anxiety levels.',
      category: 'Beginner',
      bgColor: 'bg-wellness-green/10',
      iconColor: 'text-wellness-green'
    },
    {
      icon: Moon,
      title: 'Better Sleep',
      duration: '15 min',
      description: 'Relaxing sessions to improve your sleep quality.',
      category: 'Intermediate',
      bgColor: 'bg-wellness-blue/10',
      iconColor: 'text-wellness-blue'
    },
    {
      icon: Waves,
      title: 'Ocean Sounds',
      duration: '20 min',
      description: 'Calming ocean waves for deep relaxation and focus.',
      category: 'Nature',
      bgColor: 'bg-medical-teal/10',
      iconColor: 'text-medical-teal'
    },
    {
      icon: Brain,
      title: 'Focus & Clarity',
      duration: '12 min',
      description: 'Enhance concentration and mental clarity.',
      category: 'Advanced',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary'
    },
    {
      icon: Flower,
      title: 'Mindfulness',
      duration: '8 min',
      description: 'Practice present moment awareness and mindfulness.',
      category: 'Beginner',
      bgColor: 'bg-wellness-green/10',
      iconColor: 'text-wellness-green'
    },
    {
      icon: Sun,
      title: 'Morning Energy',
      duration: '6 min',
      description: 'Start your day with positive energy and motivation.',
      category: 'Daily',
      bgColor: 'bg-accent/20',
      iconColor: 'text-accent-foreground'
    }
  ];

  return (
    <section className="py-20 bg-medical-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Wellness & Meditation</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover inner peace and mental wellness with our guided meditation and relaxation sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sessions.map((session, index) => {
            const IconComponent = session.icon;
            return (
              <Card key={index} className="shadow-wellness hover:shadow-card-hover transition-all duration-300 hover-lift border-0 group">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${session.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${session.iconColor}`} />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{session.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {session.duration}
                    </div>
                  </div>
                  <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mb-2">
                    {session.category}
                  </div>
                  <CardDescription className="text-base">
                    {session.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="wellness" 
                    size="sm"
                    className="w-full group-hover:scale-105 transition-transform duration-300"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Session
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8 shadow-card border-0 bg-gradient-to-r from-wellness-green/5 to-wellness-blue/5">
            <div className="mb-6">
              <Heart className="w-12 h-12 text-wellness-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Personalized Wellness Plan</h3>
              <p className="text-muted-foreground">
                Get a customized meditation and wellness routine based on your health goals and lifestyle.
              </p>
            </div>
            <Button variant="wellness" size="lg" className="hover:scale-105">
              Create My Plan
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MeditationSection;