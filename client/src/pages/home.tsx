import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingBag, Truck, Shield, RefreshCw } from "lucide-react";

export default function Home() {
  const categories = [
    {
      name: "Crystal Tissue",
      description: "Elegant dupattas with delicate shimmer",
      image: "https://images.unsplash.com/photo-1594736797933-d0c5fc2c99e4?w=300&h=300&fit=crop",
      href: "/products?category=crystal-tissue"
    },
    {
      name: "Dull Tissue",
      description: "Traditional comfort with timeless style",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=300&fit=crop",
      href: "/products?category=dull-tissue"
    },
    {
      name: "Chamak Net",
      description: "Glamorous dupattas for special occasions",
      image: "https://images.unsplash.com/photo-1506629905315-89a9b0c1a84f?w=300&h=300&fit=crop",
      href: "/products?category=chamak-net"
    },
    {
      name: "Dull Net",
      description: "Sophisticated everyday elegance",
      image: "https://images.unsplash.com/photo-1594736797526-d0c5fc2c99f4?w=300&h=300&fit=crop",
      href: "/products?category=dull-net"
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over $50"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Premium Pakistani fabrics and craftsmanship"
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day hassle-free returns"
    },
    {
      icon: Star,
      title: "Customer Reviews",
      description: "4.9/5 rating from thousands of customers"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Exquisite Pakistani
              <span className="text-pink-600 block">Dupatta Collections</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our premium collection of handcrafted dupattas featuring traditional Pakistani artistry
              with modern elegance. Each piece tells a story of heritage, quality, and timeless beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                <Link href="/products">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Collection
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Collections</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated categories, each offering unique textures and styles 
              to complement your traditional and contemporary wardrobe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Anwar Duppata House?</h2>
            <p className="text-lg text-gray-600">Experience the best in Pakistani fashion with our commitment to quality and service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Dupatta?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Browse our complete collection and discover the perfect dupatta for every occasion
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/products">
              Browse All Products
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}