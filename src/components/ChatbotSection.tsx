import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MessageCircle, 
  Send, 
  Bot,
  Stethoscope,
  Clock,
  Shield,
  Zap
} from 'lucide-react';

const ChatbotSection = () => {
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m Dr. Quick\'s medical assistant. How can I help you today? You can ask me about symptoms, medications, or general health questions.',
      time: '10:30 AM'
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      type: 'user',
      content: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: 'Thank you for your question. Based on your symptoms, I recommend consulting with one of our qualified doctors for a proper diagnosis. Would you like me to schedule an appointment for you?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  const quickQuestions = [
    'What are the symptoms of common cold?',
    'How to manage diabetes?',
    'When should I see a doctor?',
    'Emergency contact numbers'
  ];

  const features = [
    {
      icon: Stethoscope,
      title: '24/7 Medical Support',
      description: 'Get instant answers to your health questions anytime.'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Receive immediate responses within seconds.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your health information is completely confidential.'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Advanced AI trained on medical knowledge and guidelines.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">AI Medical Assistant</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant medical guidance and health advice from our intelligent chatbot, available 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Features */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift border-0">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Card className="p-6 shadow-card border-0 bg-gradient-to-r from-primary/5 to-wellness-blue/5">
              <h3 className="text-xl font-bold mb-4">Quick Questions</h3>
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(question)}
                    className="w-full text-left p-3 rounded-lg bg-white hover:bg-primary/5 transition-colors text-sm border border-border hover:border-primary/20"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Chatbot Interface */}
          <div className="lg:sticky lg:top-8">
            <Card className="shadow-card-hover border-0 overflow-hidden">
              <CardHeader className="gradient-chatbot text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Dr. Quick Assistant</CardTitle>
                    <p className="text-blue-100 text-sm">Online now</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Chat Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          msg.type === 'user'
                            ? 'bg-primary text-white'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        <p className="text-sm">{msg.content}</p>
                        <p className={`text-xs mt-1 ${
                          msg.type === 'user' ? 'text-blue-100' : 'text-muted-foreground'
                        }`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask me about your health concerns..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      variant="chatbot"
                      size="icon"
                      className="hover:scale-110"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    This AI assistant provides general information only. For medical emergencies, call 108.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;