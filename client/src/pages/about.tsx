import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Globe } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Craft",
      description: "Every dupatta is crafted with love and attention to detail, preserving traditional Pakistani artistry."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source only the finest fabrics and work with skilled artisans to ensure exceptional quality."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do, from design to delivery."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Bringing authentic Pakistani fashion to customers worldwide with pride and authenticity."
    }
  ];

  const milestones = [
    { year: "1995", event: "Founded Anwar Duppata House in Karachi, Pakistan" },
    { year: "2005", event: "Expanded to serve customers across Pakistan" },
    { year: "2015", event: "Launched online platform for international customers" },
    { year: "2020", event: "Reached 50,000+ satisfied customers worldwide" },
    { year: "2024", event: "Celebrating 29 years of excellence in dupatta craftsmanship" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story of
              <span className="text-pink-600 block">Excellence & Heritage</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For nearly three decades, Anwar Duppata House has been synonymous with quality, 
              authenticity, and the timeless beauty of Pakistani dupatta craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Heritage & Tradition</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1995 by Master Craftsman Anwar Ahmed, our house began with a simple yet 
                profound vision: to preserve and celebrate the rich tradition of Pakistani dupatta 
                craftsmanship while making it accessible to fashion enthusiasts worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small workshop in the bustling markets of Karachi has grown into 
                a globally recognized brand, yet we remain true to our roots—honoring traditional 
                techniques while embracing contemporary designs.
              </p>
              <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                Established 1995 • Karachi, Pakistan
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1583292650901-7d22cd27ca8f?w=400&h=400&fit=crop"
                alt="Traditional Pakistani dupatta craftsmanship"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1506629905315-89a9b0c1a84f?w=400&h=400&fit=crop"
                alt="Premium dupatta fabrics and textures"
                className="rounded-lg shadow-md mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from selecting the finest materials 
              to delivering exceptional customer experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-pink-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Quality Promise</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every dupatta that bears the Anwar Duppata House name represents our unwavering 
                commitment to excellence, authenticity, and customer satisfaction.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Authentic Pakistani Fabrics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">50,000+</div>
                <div className="text-sm text-gray-600">Satisfied Customers Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">29</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our journey of craftsmanship and growth</p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-20 text-right">
                  <Badge variant="outline" className="text-pink-600 border-pink-600">
                    {milestone.year}
                  </Badge>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-pink-600 rounded-full mx-6"></div>
                <div className="flex-grow">
                  <p className="text-lg text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}