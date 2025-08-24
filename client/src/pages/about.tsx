import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Globe } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Craft",
      description: "Every material is crafted with love and attention to detail, preserving traditional Imported artistry."
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
      description: "Bringing authentic imported fashion to customers worldwide with pride and authenticity."
    }
  ];

  const milestones = [
    { year: "1995", event: "Founded Anwar Duppata House in Karachi, Pakistan" },
    { year: "2005", event: "Expanded to serve customers across Pakistan" },
    { year: "2015", event: "Launched online platform for international customers" },
    { year: "2020", event: "Reached 50,000+ satisfied customers worldwide" },
    { year: "2024", event: "Celebrating 29 years of excellence in imported material craftsmanship" }
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
              authenticity, and the timeless beauty of Pakistani imported material craftsmanship.
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
                Founded in 1995 by Master Craftsman Muhammad Anwar Bahzad, our house began with a simple yet 
                profound vision: to preserve and celebrate the rich tradition of imported material 
                craftsmanship while making it accessible to fashion enthusiasts worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small workshop in the bustling markets of Karachi
                , yet we remain true to our roots—honoring traditional 
                techniques while embracing contemporary designs.
              </p>
              <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                Established 1995 • Karachi, Pakistan
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="data:image/jpeg;base64,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"
                alt="Traditional imported fabrics craftsmanship"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJgAaKikcseocSn4FMHmI_Ae9JRgomNQZAH_1roJ8OJVkY-6TJfBOY7LGM9VnqNITKos&usqp=CAU"
                alt="Premium imported fabrics and textures"
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
                Every material that bears the Anwar Duppata House name represents our unwavering 
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