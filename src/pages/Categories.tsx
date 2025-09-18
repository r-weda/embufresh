import CategoryGrid from "@/components/CategoryGrid";

const Categories = () => {
  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our wide selection of fresh produce and quality groceries organized by category. 
              Find everything you need for your home in Embu County.
            </p>
          </div>
        </div>
      </section>
      
      <CategoryGrid />
    </div>
  );
};

export default Categories;