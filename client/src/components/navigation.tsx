import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <ShoppingBag className="text-pink-600 h-8 w-8 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">Anwar Duppata House</h1>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <Link
                href="/"
                className={cn(
                  "px-1 pt-1 pb-2 text-sm font-medium transition-colors",
                  isActive("/")
                    ? "text-pink-600 border-b-2 border-pink-600"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={cn(
                  "px-1 pt-1 pb-2 text-sm font-medium transition-colors",
                  isActive("/about")
                    ? "text-pink-600 border-b-2 border-pink-600"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                About
              </Link>
              <Link
                href="/products"
                className={cn(
                  "px-1 pt-1 pb-2 text-sm font-medium transition-colors",
                  isActive("/products")
                    ? "text-pink-600 border-b-2 border-pink-600"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                Products
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "px-1 pt-1 pb-2 text-sm font-medium transition-colors",
                  isActive("/contact")
                    ? "text-pink-600 border-b-2 border-pink-600"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={cn(
                  "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive("/")
                    ? "text-pink-600 bg-pink-50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={cn(
                  "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive("/about")
                    ? "text-pink-600 bg-pink-50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/products"
                className={cn(
                  "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive("/products")
                    ? "text-pink-600 bg-pink-50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive("/contact")
                    ? "text-pink-600 bg-pink-50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
