import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, Filter } from "lucide-react";
import type { Product } from "@shared/schema";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const { data: products, isLoading } = useQuery({
    queryKey: ["/api/products", { category: selectedCategory !== "all" ? selectedCategory : undefined }],
  });

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "crystal-tissue", label: "Crystal Tissue" },
    { value: "dull-tissue", label: "Dull Tissue" },
    { value: "chamak-net", label: "Chamak Net" },
    { value: "dull-net", label: "Dull Net" }
  ];

  const sortOptions = [
    { value: "name", label: "Name A-Z" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "newest", label: "Newest First" }
  ];

  const getCategoryLabel = (category: string) => {
    const categoryMap: Record<string, string> = {
      "crystal-tissue": "Crystal Tissue",
      "dull-tissue": "Dull Tissue",
      "chamak-net": "Chamak Net",
      "dull-net": "Dull Net"
    };
    return categoryMap[category] || category;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      "crystal-tissue": "bg-purple-100 text-purple-800",
      "dull-tissue": "bg-blue-100 text-blue-800",
      "chamak-net": "bg-pink-100 text-pink-800",
      "dull-net": "bg-green-100 text-green-800"
    };
    return colorMap[category] || "bg-gray-100 text-gray-800";
  };

  const sortProducts = (products: Product[]) => {
    if (!products) return [];
    
    return [...products].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return parseFloat(a.price) - parseFloat(b.price);
        case "price-high":
          return parseFloat(b.price) - parseFloat(a.price);
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return a.name.localeCompare(b.name);
      }
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Skeleton className="h-12 w-64 mb-4" />
            <Skeleton className="h-6 w-96" />
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <Skeleton className="h-40 w-full" />
            </div>
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <Skeleton className="h-64 w-full" />
                    <div className="p-4">
                      <Skeleton className="h-6 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-8 w-20" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const sortedProducts = sortProducts(products || []);

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Premium Dupatta Collection</h1>
          <p className="text-lg text-gray-600">
            Discover authentic Pakistani dupattas crafted with the finest materials and traditional techniques
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Filter className="h-5 w-5 text-gray-400 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Quick Stats</h4>
                  <p className="text-sm text-gray-600">
                    {sortedProducts.length} products available
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product: Product) => (
                  <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={getCategoryColor(product.category)}>
                            {getCategoryLabel(product.category)}
                          </Badge>
                          {product.inStock > 0 ? (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              In Stock
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-red-600 border-red-600">
                              Out of Stock
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-pink-600">
                            ${product.price}
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-pink-600 hover:bg-pink-700 text-white"
                            disabled={product.inStock === 0}
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Add to Cart
                          </Button>
                        </div>
                        {product.inStock > 0 && product.inStock <= 5 && (
                          <p className="text-xs text-orange-600 mt-2">
                            Only {product.inStock} left in stock!
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}