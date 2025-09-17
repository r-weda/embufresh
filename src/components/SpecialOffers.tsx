import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Percent, Clock, Truck } from "lucide-react";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Free Delivery Weekend",
      description: "Free delivery on all orders above KES 500 this weekend only!",
      discount: "Save KES 200",
      validUntil: "Sunday 11:59 PM",
      icon: <Truck className="h-5 w-5" />,
      color: "bg-[hsl(var(--success))]"
    },
    {
      id: 2,
      title: "Fresh Fruit Combo",
      description: "Buy 2kg of any fruit and get 20% off your entire order",
      discount: "20% OFF",
      validUntil: "Limited time",
      icon: <Percent className="h-5 w-5" />,
      color: "bg-[hsl(var(--cta))]"
    },
    {
      id: 3,
      title: "First Order Special",
      description: "New customers get 15% off their first order + free delivery",
      discount: "15% OFF + Free Delivery",
      validUntil: "For new customers",
      icon: <Clock className="h-5 w-5" />,
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Special Offers
          </h2>
          <p className="text-muted-foreground">
            Don't miss out on these amazing deals and savings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Card key={offer.id} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className={`absolute top-0 left-0 right-0 h-1 ${offer.color}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-full ${offer.color} text-white`}>
                    {offer.icon}
                  </div>
                  <Badge variant="secondary" className="font-semibold">
                    {offer.discount}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{offer.title}</CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4">
                  {offer.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Valid until: {offer.validUntil}
                  </span>
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    Claim Offer
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="cta" size="lg">
            View All Offers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;