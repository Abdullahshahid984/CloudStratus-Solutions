import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">What Our Clients Say</h2>
          
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 relative">
            <Quote className="h-12 w-12 text-blue-600 mb-6 mx-auto" />
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
              "CloudStratus helped us reduce deployment time by 70% while improving system uptime. Their team became an extension of ours, truly understanding our business needs and delivering solutions that scale."
            </blockquote>
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <cite className="text-gray-600 font-medium">
              — CTO, Leading Fintech Company
            </cite>
          </div>

          <div className="mt-16 bg-blue-600 rounded-lg p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your infrastructure?</h3>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Let's talk about how DevOps can accelerate your growth.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;