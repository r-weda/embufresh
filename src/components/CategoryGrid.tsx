import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import fruitsImage from "@/assets/category-fruits.jpg";
import vegetablesImage from "@/assets/category-vegetables.jpg";
import dairyImage from "@/assets/category-dairy.jpg";
import cerealsImage from "@/assets/category-cereals.jpg";
import beveragesImage from "@/assets/category-beverages.jpg";
import householdImage from "@/assets/category-household.jpg";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
}

const categoryImages: { [key: string]: string } = {
  fruits: fruitsImage,
  vegetables: vegetablesImage,
  dairy: dairyImage,
  cereals: cerealsImage,
  beverages: beveragesImage,
  "household-items": householdImage,
};

const CategoryGrid = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (slug: string) => {
    navigate(`/category/${slug}`);
  };

  if (loading) {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Shop by Category
            </h2>
            <p className="text-muted-foreground">
              Browse our fresh selection of local produce and essentials
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="aspect-square bg-muted rounded-lg mb-3 animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="bg-muted h-4 rounded animate-pulse"></div>
                    <div className="bg-muted h-3 rounded animate-pulse w-3/4"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Shop by Category
          </h2>
          <p className="text-muted-foreground">
            Browse our fresh selection of local produce and essentials
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              onClick={() => handleCategoryClick(category.slug)}
            >
              <CardContent className="p-4">
                <div className="aspect-square mb-3 rounded-lg overflow-hidden bg-secondary/50">
                  <Image
                    src={category.image_url || categoryImages[category.slug] || "/placeholder.svg"}
                    alt={`${category.name} - Fresh ${category.name.toLowerCase()} available for delivery in Embu County`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    skeletonClassName="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-foreground text-center mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground text-center line-clamp-2">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;