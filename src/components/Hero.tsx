import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-grocery.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-secondary/20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Fresh Groceries Delivered to Your{" "}
              <span className="text-primary">Doorstep</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Shop the freshest fruits, vegetables, and groceries in Embu County. 
              Supporting local farmers and bringing quality directly to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="lg" className="text-lg px-8">
                Start Shopping
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Categories
              </Button>
            </div>
            
            {/* Features */}
            <div className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-[hsl(var(--success))] rounded-full"></div>
                Free delivery over KES 1,000
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-[hsl(var(--success))] rounded-full"></div>
                Same-day delivery
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-[hsl(var(--success))] rounded-full"></div>
                Fresh guarantee
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-first lg:order-last">
            <img
              src={heroImage}
              alt="Fresh groceries and produce from local Embu County farmers"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;