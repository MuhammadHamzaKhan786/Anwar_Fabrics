import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Define our own schema since we removed the shared schema
const insertContactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof insertContactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission without backend
    setTimeout(() => {
      console.log("Form submitted:", data);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });
      reset();
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: "Bolton Market Bombay Bazar Karachi, Pakistan",
      description: "Experience our collection in person at our flagship store"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+92 332 2424503",
      description: "Monday to Saturday, 11 AM - 8 PM PKT"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "anwarhamza712@gmail.com.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9 AM - 8 PM",
      description: "Sunday: Closed"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our material or need assistance with your order? 
            We're here to help and would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-pink-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      {...register("name")}
                      className="mt-1"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="mt-1"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="mt-1"
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      rows={6}
                      className="mt-1"
                      placeholder="Tell us about your inquiry, product questions, or how we can help you..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                Connect with us through any of these channels. We're committed to providing 
                excellent customer service and support.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-pink-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-lg text-pink-600 font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-gray-600">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Information */}
            <Card className="bg-pink-50 border-pink-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Why Choose Anwar Duppata House?
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                    29+ years of authentic Pakistani craftsmanship
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                    Premium quality fabrics and materials
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                    Worldwide shipping with secure packaging
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                    Customer satisfaction guarantee
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}