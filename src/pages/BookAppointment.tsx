import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon, Clock, User, Stethoscope } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const BookAppointment = () => {
  const [date, setDate] = useState<Date>();

  const doctors = [
    { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiology', available: 'Mon, Wed, Fri' },
    { id: 2, name: 'Dr. Michael Chen', specialty: 'Emergency Medicine', available: 'Tue, Thu, Sat' },
    { id: 3, name: 'Dr. Emily Davis', specialty: 'Pediatrics', available: 'Mon, Wed, Fri' },
    { id: 4, name: 'Dr. David Wilson', specialty: 'Neurology', available: 'Tue, Thu, Sat' },
    { id: 5, name: 'Dr. Lisa Anderson', specialty: 'General Medicine', available: 'Mon-Fri' },
    { id: 6, name: 'Dr. Robert Brown', specialty: 'Orthopedics', available: 'Mon, Wed, Fri' },
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM'
  ];

  const appointmentTypes = [
    { value: 'walk-in-consultation', label: 'Walk-in General Consultation', duration: '30 min', price: '₹12,000', type: 'walk-in' },
    { value: 'video-consultation', label: 'Video General Consultation', duration: '25 min', price: '₹8,000', type: 'video' },
    { value: 'walk-in-checkup', label: 'Walk-in Health Checkup', duration: '45 min', price: '₹16,000', type: 'walk-in' },
    { value: 'video-checkup', label: 'Video Health Checkup', duration: '35 min', price: '₹12,000', type: 'video' },
    { value: 'walk-in-followup', label: 'Walk-in Follow-up Visit', duration: '20 min', price: '₹8,000', type: 'walk-in' },
    { value: 'video-followup', label: 'Video Follow-up Visit', duration: '15 min', price: '₹6,000', type: 'video' },
    { value: 'urgent-walk-in', label: 'Urgent Walk-in Care', duration: '30 min', price: '₹20,000', type: 'urgent-walk-in' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Book an Appointment</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Schedule your consultation with our expert doctors. Choose from in-person visits, 
            video consultations, or urgent care appointments.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Schedule Your Appointment</CardTitle>
                  <CardDescription>
                    Please fill out the information below to book your appointment with us.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <User className="w-5 h-5 mr-2 text-primary" />
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">First Name</label>
                          <Input placeholder="Enter your first name" required />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Last Name</label>
                          <Input placeholder="Enter your last name" required />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Email</label>
                          <Input type="email" placeholder="Enter your email" required />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Phone</label>
                          <Input type="tel" placeholder="Enter your phone number" required />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Date of Birth</label>
                          <Input type="date" required />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Gender</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                        Appointment Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Appointment Type</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select appointment type" />
                            </SelectTrigger>
                            <SelectContent>
                              {appointmentTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label} ({type.duration}) - {type.price}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Doctor</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a doctor" />
                            </SelectTrigger>
                            <SelectContent>
                              {doctors.map((doctor) => (
                                <SelectItem key={doctor.id} value={doctor.id.toString()}>
                                  {doctor.name} - {doctor.specialty}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Preferred Date</label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Preferred Time</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Reason for Visit</label>
                      <Textarea 
                        placeholder="Please describe the reason for your appointment..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Insurance Provider (Optional)</label>
                      <Input placeholder="Enter your insurance provider" />
                    </div>

                    <Button variant="medical" size="lg" className="w-full">
                      Book Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Booking Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-primary mr-2" />
                      <span>Appointments available 7 days a week</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CalendarIcon className="w-4 h-4 text-primary mr-2" />
                      <span>Book up to 3 months in advance</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <User className="w-4 h-4 text-primary mr-2" />
                      <span>Expert doctors across all specialties</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Available Doctors */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Available Doctors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {doctors.slice(0, 4).map((doctor) => (
                      <div key={doctor.id} className="p-3 bg-muted rounded-lg">
                        <p className="font-medium text-sm">{doctor.name}</p>
                        <p className="text-primary text-sm">{doctor.specialty}</p>
                        <p className="text-muted-foreground text-xs">{doctor.available}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="shadow-card border-0 bg-emergency-red/5 border-emergency-red/20">
                <CardHeader>
                  <CardTitle className="text-xl text-emergency-red">Need Urgent Care?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For immediate medical attention, call our emergency hotline.
                  </p>
                  <Button variant="emergency" className="w-full">
                    Call Emergency: 555
                  </Button>
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

export default BookAppointment;