import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Image } from "@/components/ui/image";
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react";

interface CartProps {
  trigger?: React.ReactNode;
}

const Cart: React.FC<CartProps> = ({ trigger }) => {
  const { state, updateQuantity, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const deliveryFee = state.totalAmount >= 2000 ? 0 : 200;
  const finalTotal = state.totalAmount + deliveryFee;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const DefaultTrigger = React.forwardRef<HTMLButtonElement>((props, ref) => (
    <Button ref={ref} variant="ghost" size="icon" className="relative" {...props}>
      <ShoppingCart className="h-5 w-5" />
      {state.totalItems > 0 && (
        <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs h-5 w-5 flex items-center justify-center rounded-full">
          {state.totalItems}
        </Badge>
      )}
    </Button>
  ));

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {trigger || <DefaultTrigger />}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Shopping Cart ({state.totalItems} items)
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {state.items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Your cart is empty
              </h3>
              <p className="text-muted-foreground mb-6">
                Start shopping to add items to your cart
              </p>
              <Button asChild onClick={() => setIsOpen(false)}>
                <Link to="/categories">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="flex gap-3">
                          <Image
                            src={item.image_url || "/placeholder.svg"}
                            alt={`${item.name} - Fresh grocery item in cart`}
                            className="w-16 h-16 object-cover rounded-md"
                            skeletonClassName="w-16 h-16 rounded-md"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-foreground line-clamp-1">
                              {item.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              KES {item.price.toFixed(2)} {item.unit}
                            </p>
                            
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                  className="h-8 w-8 p-0"
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="text-sm font-medium min-w-[2rem] text-center">
                                  {item.quantity}
                                </span>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                  disabled={item.quantity >= item.stock_quantity}
                                  className="h-8 w-8 p-0"
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-foreground">
                                  KES {(item.price * item.quantity).toFixed(2)}
                                </span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => removeFromCart(item.id)}
                                  className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>KES {state.totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery Fee</span>
                    <span>
                      {deliveryFee === 0 ? (
                        <span className="text-success">FREE</span>
                      ) : (
                        `KES ${deliveryFee.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {state.totalAmount < 2000 && (
                    <p className="text-xs text-muted-foreground">
                      Add KES {(2000 - state.totalAmount).toFixed(2)} more for free delivery
                    </p>
                  )}
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>KES {finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <Button className="w-full" size="lg" asChild>
                    <Link to="/checkout" onClick={() => setIsOpen(false)}>
                      Proceed to Checkout
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/categories" onClick={() => setIsOpen(false)}>
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;