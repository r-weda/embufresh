import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services or need help with your order? 
            We're here to help you with all your grocery needs in Embu County.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Call Us
                </h3>
                <p className="text-muted-foreground">
                  +254 xxx xxx xxx
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Customer Service Line
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Email Us
                </h3>
                <p className="text-muted-foreground">
                  hello@embufresh.co.ke
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  24/7 Email Support
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Business Hours
                </h3>
                <p className="text-muted-foreground">
                  Mon-Sat: 6AM - 8PM
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Sunday: 8AM - 6PM
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Service Area
                </h3>
                <p className="text-muted-foreground">
                  Embu County
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  All Towns & Villages
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <MessageCircle className="h-6 w-6" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" required />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      required 
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    What areas do you deliver to?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We deliver to all towns and villages within Embu County. 
                    Same-day delivery is available for most areas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We accept M-Pesa, Visa/Mastercard, and cash on delivery 
                    for your convenience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Is there a minimum order amount?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    No minimum order required! However, orders above KES 1,000 
                    qualify for free delivery.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    How fresh are your products?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We source directly from local farmers and guarantee freshness. 
                    All produce is harvested within 24-48 hours of delivery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;