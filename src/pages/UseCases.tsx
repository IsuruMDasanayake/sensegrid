import React from 'react';
import { ArrowRight, Factory, Heart, Banknote, Truck, GraduationCap, Building } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader } from '../components/ui/Card';

export const UseCases: React.FC = () => {
  const industries = [
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Optimize production lines, reduce downtime, and improve quality control with real-time monitoring and predictive maintenance.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      benefits: ['40% reduction in downtime', 'Real-time quality monitoring', 'Predictive maintenance alerts']
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Streamline patient care, manage medical records, and enhance diagnostic accuracy with AI-powered healthcare solutions.',
      image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      benefits: ['Improved patient outcomes', 'Reduced administrative burden', 'Enhanced diagnostic accuracy']
    },
    {
      icon: Banknote,
      title: 'Financial Services',
      description: 'Advanced risk management, fraud detection, and algorithmic trading with real-time market analysis and compliance.',
      image: 'https://images.pexels.com/photos/955081/pexels-photo-955081.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      benefits: ['Real-time fraud detection', 'Automated compliance', 'Advanced risk analytics']
    },
    {
      icon: Truck,
      title: 'Logistics & Supply Chain',
      description: 'Optimize delivery routes, track shipments, and manage inventory with intelligent supply chain automation.',
      image: 'https://images.pexels.com/photos/586021/pexels-photo-586021.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      benefits: ['30% faster deliveries', 'Real-time tracking', 'Automated inventory management']
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Personalized learning experiences, student performance analytics, and administrative automation for educational institutions.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      benefits: ['Personalized learning paths', 'Performance analytics', 'Administrative efficiency']
    },
    {
      icon: Building,
      title: 'Real Estate',
      description: 'Property valuation, market analysis, and customer relationship management with predictive pricing models.',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      benefits: ['Accurate property valuations', 'Market trend analysis', 'Lead management automation']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Transforming Industries Worldwide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how organizations across various sectors leverage SenseGrid to achieve 
            breakthrough results and drive innovation in their industry.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} hover className="group">
                <div className="aspect-video rounded-t-xl overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <industry.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {industry.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proven Results Across All Sectors
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our platform delivers measurable impact across every industry we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">40%</div>
              <div className="text-gray-600 dark:text-gray-300">Average Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-600 dark:text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Global Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};