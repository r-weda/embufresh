import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Image } from "@/components/ui/image";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Plus, Minus, Star, Search } from "lucide-react";

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  unit: string;
  stock_quantity: number;
  image_url: string;
  is_active: boolean;
  is_featured: boolean;
}

const CategoryPage = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    if (slug) {
      fetchCategoryAndProducts();
    }
  }, [slug]);

  const fetchCategoryAndProducts = async () => {
    try {
      // Fetch category information
      const { data: categoryData, error: categoryError } = await supabase
        .from("categories")
        .select("name")
        .eq("slug", slug)
        .single();

      if (categoryError) throw categoryError;
      setCategoryName(categoryData?.name || "");

      // Fetch products in this category
      const { data: productsData, error: productsError } = await supabase
        .from("products")
        .select(`
          *,
          categories(name, slug)
        `)
        .eq("categories.slug", slug)
        .eq("is_active", true)
        .order("name");

      if (productsError) throw productsError;
      setProducts(productsData || []);
    } catch (error) {
      console.error("Error fetching category and products:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = (productId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 1) + change)
    }));
  };

  const handleAddToCart = (product: Product) => {
    if (product.stock_quantity <= 0) return;
    
    const quantity = quantities[product.id] || 1;
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      image_url: product.image_url,
      stock_quantity: product.stock_quantity,
      quantity
    });

    setQuantities(prev => ({ ...prev, [product.id]: 1 }));
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.unit} of ${product.name} added to your cart.`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <Card key={index} className="overflow-hidden animate-pulse">
                  <div className="bg-muted h-48"></div>
                  <CardContent className="p-4">
                    <div className="bg-muted h-4 rounded mb-2"></div>
                    <div className="bg-muted h-3 rounded w-3/4 mb-2"></div>
                    <div className="bg-muted h-6 rounded w-1/2"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Category Header */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {categoryName}
            </h1>
            <p className="text-lg text-muted-foreground">
              Fresh {categoryName.toLowerCase()} delivered straight from local farms in Embu County
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products available in this category at the moment.
              </p>
              <p className="text-muted-foreground">
                Check back soon for fresh additions!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative">
                    <Image
                      src={product.image_url ? `/${product.image_url}` : "/placeholder.svg"}
                      alt={`${product.name} - Fresh ${product.name.toLowerCase()} from Embu County`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      skeletonClassName="w-full h-48 rounded-t-lg"
                      loading="lazy"
                    />
                    {product.is_featured && (
                      <Badge className="absolute top-2 left-2 bg-[hsl(var(--cta))] text-[hsl(var(--cta-foreground))]">
                        Featured
                      </Badge>
                    )}
                    {product.stock_quantity < 10 && product.stock_quantity > 0 && (
                      <Badge variant="destructive" className="absolute top-2 right-2">
                        Low Stock
                      </Badge>
                    )}
                    {product.stock_quantity === 0 && (
                      <Badge variant="secondary" className="absolute top-2 right-2">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    {product.description && (
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {product.description}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-lg font-bold text-primary">
                          KES {product.price}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">
                          per {product.unit}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Stock: {product.stock_quantity}
                      </span>
                    </div>

                    {product.stock_quantity > 0 ? (
                      <div className="space-y-3">
                        {/* Quantity Selector */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Quantity:</span>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(product.id, -1)}
                              disabled={(quantities[product.id] || 1) <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="min-w-[2rem] text-center">
                              {quantities[product.id] || 1}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(product.id, 1)}
                              disabled={(quantities[product.id] || 1) >= product.stock_quantity}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        {/* Add to Cart Button */}
                        <Button 
                          variant="cta" 
                          className="w-full"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    ) : (
                      <Button variant="secondary" className="w-full" disabled>
                        Out of Stock
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;