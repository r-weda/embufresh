import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import SpecialOffers from "@/components/SpecialOffers";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <SpecialOffers />
    </div>
  );
};

export default Index;
