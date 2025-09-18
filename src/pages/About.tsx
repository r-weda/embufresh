import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Truck, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Fresh & Quality",
      description: "We source the freshest produce directly from local farmers in Embu County, ensuring the highest quality for our customers."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Support",
      description: "Supporting local farmers and businesses in Embu County while providing convenient shopping for our community."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Same-day delivery service across Embu County with free delivery on orders above KES 1,000."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Local Focus",
      description: "Proudly serving Embu County with a deep understanding of local preferences and needs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">EmbuFresh</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted online grocery store in Embu County, connecting local farmers 
            with families through fresh, quality produce and convenient delivery services.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                EmbuFresh was born from a simple idea: to make fresh, quality groceries accessible 
                to every household in Embu County while supporting our local farming community. 
                We recognized the need for a reliable, convenient way for families to access 
                fresh produce without the hassle of traditional shopping.
              </p>
              <p className="mb-6">
                Founded by locals who understand the unique needs of our community, EmbuFresh 
                bridges the gap between hardworking farmers and busy families. We work directly 
                with farmers across Embu County to ensure you get the freshest fruits, vegetables, 
                and other essential groceries delivered right to your doorstep.
              </p>
              <p>
                Today, we're proud to serve hundreds of families across Embu County, 
                supporting local agriculture while making grocery shopping more convenient 
                than ever before. Every order you place helps support local farmers and 
                strengthens our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at EmbuFresh, from sourcing 
              to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Experience EmbuFresh?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers in Embu County who trust EmbuFresh 
            for their grocery needs. Fresh produce, delivered fresh.
          </p>
          <Button variant="cta" size="lg" className="text-lg px-8" asChild>
            <Link to="/categories">Start Shopping Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;