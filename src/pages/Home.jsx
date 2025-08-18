import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Target, Users, TrendingUp, Globe } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader } from '../components/ui/Card';

export const Home = () => {
  const features = [
    { icon: Shield, title: 'Enterprise Security', description: 'Bank-level security with end-to-end encryption and compliance standards.' },
    { icon: Zap, title: 'Lightning Fast', description: 'Optimized performance with sub-second response times globally.' },
    { icon: Target, title: 'Precision Analytics', description: 'Advanced AI-powered insights to drive data-driven decisions.' },
    { icon: Users, title: 'Team Collaboration', description: 'Seamless workflows designed for modern distributed teams.' },
    { icon: TrendingUp, title: 'Scalable Growth', description: 'Infrastructure that grows with your business, from startup to enterprise.' },
    { icon: Globe, title: 'Global Reach', description: 'Multi-region deployment with 99.9% uptime guarantee.' }
  ];

  const useCasePreviews = [
    { title: 'Manufacturing', description: 'Optimize production lines and reduce downtime', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
    { title: 'Healthcare', description: 'Streamline patient care and medical workflows', image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
    { title: 'Finance', description: 'Risk management and real-time trading analytics', image: 'https://images.pexels.com/photos/955081/pexels-photo-955081.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Transform Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Smart Sensing Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md lg:max-w-lg">
              Revolutionize your operations with cutting-edge technology that adapts to your needs. 
              Experience unprecedented efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/product">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img 
              src="/images/hero.jpg" 
              alt="IoT Illustration" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose SenseGrid?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the features that make us the preferred choice for industry leaders worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how organizations in various sectors leverage our platform to achieve remarkable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCasePreviews.map((useCase, index) => (
              <Card key={index} hover>
                <div className="aspect-video rounded-t-xl overflow-hidden">
                  <img src={useCase.image} alt={useCase.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{useCase.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{useCase.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/use-cases">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/use-cases">View All Use Cases</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using SenseGrid to drive innovation and achieve unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">Start Free Trial</Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
