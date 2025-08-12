import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      content: 'The online consultation was incredibly convenient. Dr. Smith was very thorough and helped me understand my condition clearly.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      content: 'Amazing service! The medicine delivery arrived on time and the quality was excellent. Highly recommend their services.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Emily Davis',
      role: 'Patient',
      content: 'The emergency service was outstanding. They responded quickly and provided excellent care during a critical situation.',
      rating: 5,
      avatar: '👩‍🎓'
    },
    {
      name: 'David Wilson',
      role: 'Patient',
      content: 'Very professional staff and modern facilities. The booking process was seamless and the doctors are highly qualified.',
      rating: 5,
      avatar: '👨‍🔬'
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground">
            Real stories from real patients who trust us with their health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/20 mr-2" />
                  <div className="flex text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;