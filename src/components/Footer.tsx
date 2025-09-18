import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">EmbuFresh</h3>
            <p className="text-muted-foreground mb-4">
              Your trusted online grocery store in Embu County, delivering fresh produce 
              and quality products right to your doorstep.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Serving Embu County, Kenya</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">Categories</Link></li>
              <li><Link to="/offers" className="text-muted-foreground hover:text-primary transition-colors">Special Offers</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Customer Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Delivery Info</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">Customer Service</p>
                  <p className="text-sm text-muted-foreground">+254 xxx xxx xxx</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">Email Support</p>
                  <p className="text-sm text-muted-foreground">hello@embufresh.co.ke</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">Business Hours</p>
                  <p className="text-sm text-muted-foreground">Mon-Sat: 6AM - 8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 EmbuFresh. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-sm text-muted-foreground">Payment Methods:</span>
              <div className="flex gap-2 text-sm text-muted-foreground">
                <span>M-Pesa</span>
                <span>•</span>
                <span>Visa/Mastercard</span>
                <span>•</span>
                <span>Cash on Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;