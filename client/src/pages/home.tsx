import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingBag, Truck, Shield, RefreshCw } from "lucide-react";

export default function Home() {
  const categories = [
    {
      name: "Crystal Tissue",
      description: "Elegant dupattas with delicate shimmer",
      image: "data:image/jpeg;base64,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",
      href: "/products?category=crystal-tissue"
    },
    {
      name: "Dull Tissue",
      description: "Traditional comfort with timeless style",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd66qTUh7X2WckjIKzmcx6LLmaSic54HaNzn8wh6fvzt6fnfNDWJj6qMO2NbE3NGcH2p8&usqp=CAU",
      href: "/products?category=dull-tissue"
    },
    {
      name: "Chamak Net",
      description: "Glamorous dupattas for special occasions",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZltcxTOB9zVeisYsUTYAsF3GDcPi7icej8NEuNMKnkiuuFvk7TDFRzqC7gkxQoxtYEo&usqp=CAU",
      href: "/products?category=chamak-net"
    },
    {
      name: "Dull Net",
      description: "Sophisticated everyday elegance",
      image: "https://tiimg.tistatic.com/fp/1/008/159/light-weight-comfortable-plain-dyed-colorful-shiny-net-fabric-652.jpg",
      href: "/products?category=dull-net"
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over RS: 14000"
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
              Exquisite Imported & Local
              <span className="text-pink-600 block">Material & Fabrics Collection</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our premium collection of handcrafted imported fabrics featuring traditional Pakistani artistry
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