import { Link, useLocation } from "wouter";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [, setLocation] = useLocation();

  const handleNavigation = (path: string) => {
    setLocation(path);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-pink-400 mb-4">Anwar Duppata House</h3>
            <p className="text-gray-300 mb-4">
              Authentic Imported collections crafted with tradition and elegance since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation("/")}
                  className="text-gray-300 hover:text-pink-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/about")}
                  className="text-gray-300 hover:text-pink-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/products")}
                  className="text-gray-300 hover:text-pink-400 transition-colors text-left"
                >
                  Our Collection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/contact")}
                  className="text-gray-300 hover:text-pink-400 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation("/products?category=crystal-tissue")}
                  className="text-gray-300 hover:text-pink-400 transition-colors text-left"
                >
                  Crystal Tissue
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/products?category=dull-tissue")}
                  className="text-gray-300 hover:text-pink-400 transition-colors text-left"
                >
                  Dull Tissue
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/products?category=chamak-net")}
                  className="text-gray-300 hover:text-pink-400 transition-colors text-left"
                >
                  Chamak Net
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/products?category=dull-net")}
                  className="text-gray-300 hover:text-pink-400 transition-colors text-left"
                >
                  Dull Net
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-pink-400" />
                <span>Bolton Market Bombay Bazar Karachi, Pakistan</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-pink-400" />
                <span>+92 332 2424503</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-pink-400" />
                <span>anwarhamza712@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Anwar Duppata House. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Shipping Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}