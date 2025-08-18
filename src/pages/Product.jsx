import React, { useState } from 'react';
import { Download, Play, CheckCircle, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader } from '../components/ui/Card';

export const Product = () => {
  const [activeTab, setActiveTab] = useState('specifications');

  const tabs = [
    { id: 'specifications', label: 'Specifications' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'how-it-works', label: 'How It Works' }
  ];

  const specifications = [
    { label: 'Processing Power', value: '10,000+ requests/second' },
    { label: 'Data Storage', value: 'Unlimited with 99.99% durability' },
    { label: 'API Response Time', value: '< 50ms average globally' },
    { label: 'Uptime SLA', value: '99.9% guaranteed' },
    { label: 'Security', value: 'SOC 2 Type II, GDPR compliant' },
    { label: 'Integration', value: '500+ pre-built connectors' }
  ];

  const benefits = [
    { title: 'Reduce Costs by 40%', description: 'Automated workflows eliminate manual processes and reduce operational overhead.' },
    { title: 'Increase Efficiency', description: 'AI-powered optimization streamlines your entire business operation.' },
    { title: 'Scale Globally', description: 'Multi-region architecture supports worldwide expansion seamlessly.' },
    { title: 'Real-time Insights', description: 'Make informed decisions with live analytics and predictive modeling.' }
  ];

  const steps = [
    { step: 1, title: 'Connect Your Data', description: 'Integrate with existing systems in minutes using our API or pre-built connectors.' },
    { step: 2, title: 'Configure Workflows', description: 'Set up automated processes with our intuitive drag-and-drop interface.' },
    { step: 3, title: 'Monitor & Optimize', description: 'Track performance and let AI continuously improve your operations.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The Complete Business Intelligence Platform
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Harness the power of artificial intelligence to automate workflows, 
              analyze data, and accelerate your business growth with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="SenseGrid Dashboard"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-lg font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Technical Specifications
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {specifications.map((spec, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                          <span className="font-medium text-gray-700 dark:text-gray-300">{spec.label}</span>
                          <span className="text-blue-600 dark:text-blue-400 font-semibold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                    <Zap className="h-8 w-8 mb-4" />
                    <h4 className="text-xl font-bold mb-2">Enterprise Ready</h4>
                    <p>Built for mission-critical applications with enterprise-grade reliability and support.</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 rounded-xl text-white">
                    <Shield className="h-8 w-8 mb-4" />
                    <h4 className="text-xl font-bold mb-2">Security First</h4>
                    <p>Advanced security measures protect your data with military-grade encryption.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {benefit.title}
                        </h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'how-it-works' && (
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block w-24 h-px bg-gray-300 dark:bg-gray-600" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Download our comprehensive product documentation and technical specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Download className="mr-2 h-5 w-5" />
              Technical Datasheet
            </Button>
            <Button variant="outline" size="lg">
              <Globe className="mr-2 h-5 w-5" />
              API Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
