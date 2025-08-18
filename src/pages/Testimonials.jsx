import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'CTO, InnovateCorp',
      company: 'InnovateCorp',
      rating: 5,
      content: 'SenseGrid transformed our entire operation. We saw a 45% increase in efficiency within the first quarter of implementation.',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      results: ['45% efficiency increase', '60% cost reduction', '99.9% uptime achieved']
    },
    {
      name: 'Robert Thompson',
      role: 'Operations Director, ManufacturingPlus',
      company: 'ManufacturingPlus',
      rating: 5,
      content: 'The predictive analytics have been game-changing. We prevent equipment failures before they happen and our downtime is virtually zero.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      results: ['Zero unplanned downtime', 'Predictive maintenance', '25% productivity boost']
    },
    {
      name: 'Dr. Amanda Foster',
      role: 'Chief Medical Officer, HealthTech Solutions',
      company: 'HealthTech Solutions',
      rating: 5,
      content: 'Patient care has improved dramatically with SenseGrid. Our diagnostic accuracy is up 30% and administrative time is down 50%.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      results: ['30% diagnostic accuracy', '50% less admin time', 'Improved patient satisfaction']
    },
    {
      name: 'Mark Williams',
      role: 'VP of Technology, FinanceForward',
      company: 'FinanceForward',
      rating: 5,
      content: 'Risk management has never been this sophisticated. Real-time analytics help us make better investment decisions every day.',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      results: ['Real-time risk analysis', '35% better ROI', 'Automated compliance']
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Customers Say
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover how industry leaders are transforming their businesses with SenseGrid. Real stories, real results, real impact.
          </p>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 text-white">
                <div className="flex items-center justify-between mb-8">
                  <Quote className="h-12 w-12 text-blue-200" />
                  <div className="flex space-x-1">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                  />
                  <div className="text-center md:text-left">
                    <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-blue-200">{testimonials[currentIndex].role}</div>
                    <div className="text-blue-100 text-sm">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Results:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {testimonials[currentIndex].results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              More Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover>
                <CardContent className="p-6">
                  <div className="flex space-x-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-gray-600 dark:text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
