import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Image } from "@/components/ui/image";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, MapPin, CreditCard, Phone, User, Mail } from "lucide-react";

const Checkout = () => {
  const { state, clearCart } = useCart();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    town: "",
    county: "Embu",
    notes: "",
  });

  const deliveryFee = state.totalAmount >= 2000 ? 0 : 200;
  const finalTotal = state.totalAmount + deliveryFee;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const required = ['fullName', 'phone', 'address', 'town'];
    const missing = required.filter(field => !formData[field as keyof typeof formData]);
    
    if (missing.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return false;
    }

    if (!/^(07|01)\d{8}$/.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid Kenyan phone number.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    if (state.items.length === 0) return;

    setIsSubmitting(true);

    try {
      // Generate order ID
      const newOrderId = `EMB${Date.now()}`;
      setOrderId(newOrderId);

      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      setOrderPlaced(true);
      clearCart();

      toast({
        title: "Order Placed Successfully!",
        description: `Your order ${newOrderId} has been placed. You will receive confirmation shortly.`,
      });

    } catch (error) {
      toast({
        title: "Order Failed",
        description: "There was an error placing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (state.items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Your cart is empty
            </h1>
            <p className="text-muted-foreground mb-6">
              Add some items to your cart before checking out.
            </p>
            <Button asChild>
              <a href="/categories">Start Shopping</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <span className="text-success-foreground text-lg">✓</span>
                  </div>
                </div>
                <CardTitle className="text-2xl text-success">Order Placed Successfully!</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Thank you for your order! Your order number is:
                </p>
                <Badge variant="outline" className="text-lg px-4 py-2">
                  {orderId}
                </Badge>
                
                {paymentMethod === "mpesa" && (
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="text-lg">M-Pesa Payment Instructions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-left space-y-2 text-sm">
                        <p className="font-semibold">To complete your payment:</p>
                        <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                          <li>Go to M-Pesa on your phone</li>
                          <li>Select 'Lipa na M-Pesa'</li>
                          <li>Select 'Buy Goods and Services'</li>
                          <li>Enter Till Number: <strong className="text-foreground">0742756074</strong></li>
                          <li>Enter Amount: <strong className="text-foreground">KES {finalTotal.toFixed(2)}</strong></li>
                          <li>Enter Account/Reference: <strong className="text-foreground">{orderId}</strong></li>
                          <li>Enter your M-Pesa PIN to complete</li>
                        </ol>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    We'll contact you at <strong>{formData.phone}</strong> to confirm your order and delivery details.
                  </p>
                  <div className="space-y-2">
                    <Button asChild className="w-full">
                      <a href="/categories">Continue Shopping</a>
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <a href="/">Back to Home</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="order-2 lg:order-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <Image
                          src={item.image_url || "/placeholder.svg"}
                          alt={`${item.name} - Order item for checkout`}
                          className="w-16 h-16 object-cover rounded-md"
                          skeletonClassName="w-16 h-16 rounded-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            KES {item.price.toFixed(2)} {item.unit}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            KES {(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>KES {state.totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>
                        {deliveryFee === 0 ? (
                          <span className="text-success">FREE</span>
                        ) : (
                          `KES ${deliveryFee.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>KES {finalTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Checkout Form */}
            <div className="order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Customer Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Customer Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="0712345678"
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Delivery Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="Enter your complete delivery address"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="town">Town *</Label>
                        <Input
                          id="town"
                          value={formData.town}
                          onChange={(e) => handleInputChange("town", e.target.value)}
                          placeholder="e.g., Embu Town"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="county">County</Label>
                        <Input
                          id="county"
                          value={formData.county}
                          onChange={(e) => handleInputChange("county", e.target.value)}
                          placeholder="Embu"
                          disabled
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="notes">Order Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => handleInputChange("notes", e.target.value)}
                        placeholder="Any special instructions for delivery..."
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mpesa" id="mpesa" />
                        <Label htmlFor="mpesa" className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          M-Pesa (Lipa na M-Pesa) - 0742756074
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash">Cash on Delivery</Label>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "mpesa" && (
                      <div className="mt-4 p-3 bg-primary/5 rounded-md">
                        <p className="text-sm text-muted-foreground">
                          After placing your order, you'll receive M-Pesa payment instructions 
                          to complete your purchase using Till Number: <strong>0742756074</strong>
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Placing Order..." : `Place Order - KES ${finalTotal.toFixed(2)}`}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;