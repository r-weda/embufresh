import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image_url: string;
  unit: string;
  stock_quantity: number;
  is_featured: boolean;
  category: {
    name: string;
    slug: string;
  };
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          category:categories(name, slug)
        `)
        .eq("is_featured", true)
        .eq("is_active", true)
        .limit(8);

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching featured products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    if (product.stock_quantity <= 0) return;
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      image_url: product.image_url,
      stock_quantity: product.stock_quantity,
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  if (loading) {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Our top picks for fresh, quality groceries
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index} className="overflow-hidden animate-pulse">
                <CardContent className="p-4">
                  <div className="bg-muted h-48 rounded-lg mb-3"></div>
                  <div className="bg-muted h-4 rounded mb-2"></div>
                  <div className="bg-muted h-3 rounded w-3/4 mb-2"></div>
                  <div className="bg-muted h-6 rounded w-1/2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Featured Products
          </h2>
          <p className="text-muted-foreground">
            Our top picks for fresh, quality groceries delivered to your door
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image_url}
                    alt={`${product.name} - Fresh ${product.name.toLowerCase()} available for delivery in Embu County`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                  {product.stock_quantity <= 5 && product.stock_quantity > 0 && (
                    <Badge variant="destructive" className="absolute top-2 right-2">
                      Low Stock
                    </Badge>
                  )}
                </div>
                
                <div className="p-4">
                  <Link 
                    to={`/category/${product.category.slug}`}
                    className="text-xs text-primary hover:underline"
                  >
                    {product.category.name}
                  </Link>
                  <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-lg font-bold text-foreground">
                        KES {product.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-muted-foreground ml-1">
                        {product.unit}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {product.stock_quantity > 0 ? (
                        `${product.stock_quantity} in stock`
                      ) : (
                        <span className="text-destructive">Out of Stock</span>
                      )}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock_quantity <= 0}
                    className="w-full"
                    variant={product.stock_quantity <= 0 ? "secondary" : "default"}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.stock_quantity <= 0 ? "Out of Stock" : "Add to Cart"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <Link to="/categories">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;