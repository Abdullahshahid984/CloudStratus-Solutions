import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Empowering Cloud Innovation with 
            <span className="text-blue-200"> DevOps Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Deliver faster. Operate smarter. Scale with confidence.
          </p>
          <p className="text-lg mb-12 text-blue-100 max-w-2xl mx-auto">
            Reliable DevOps Strategies for Scalable Cloud Operations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;