import React from 'react';
import { 
  Laptop, 
  CreditCard, 
  ShoppingCart, 
  Heart, 
  Monitor
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Laptop className="h-12 w-12" />,
      title: "SaaS & Tech Startups",
      description: "Accelerate your development cycles with scalable infrastructure and automated deployment pipelines.",
      benefits: ["Faster time to market", "Scalable architecture", "Cost optimization"]
    },
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: "Fintech & Banking",
      description: "Secure, compliant, and high-performance solutions for financial services.",
      benefits: ["Regulatory compliance", "Security-first approach", "High availability"]
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: "E-commerce & Retail",
      description: "Handle peak traffic and seasonal demands with robust, scalable cloud infrastructure.",
      benefits: ["Auto-scaling", "Performance optimization", "Global distribution"]
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Healthcare & Life Sciences",
      description: "HIPAA-compliant cloud solutions with enhanced security and reliability.",
      benefits: ["Data protection", "Compliance management", "Disaster recovery"]
    },
    {
      icon: <Monitor className="h-12 w-12" />,
      title: "Media & Entertainment",
      description: "Stream, process, and distribute content globally with optimized cloud architectures.",
      benefits: ["Content delivery", "Media processing", "Global reach"]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
          <p className="text-lg text-gray-600">
            We support companies across diverse industries with tailored DevOps and cloud solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-blue-600 mb-6 flex justify-center">{industry.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{industry.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{industry.description}</p>
              <div className="space-y-2">
                {industry.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-sm text-gray-500">
                    <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose CloudStratus Solutions?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="h-2 w-2 bg-blue-200 rounded-full mx-auto mb-2"></div>
                <p className="text-sm">Deep expertise in AWS, Azure, GCP, and Kubernetes</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="h-2 w-2 bg-blue-200 rounded-full mx-auto mb-2"></div>
                <p className="text-sm">Proven success in scaling infrastructure</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="h-2 w-2 bg-blue-200 rounded-full mx-auto mb-2"></div>
                <p className="text-sm">Agile and business-aligned DevOps strategy</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="h-2 w-2 bg-blue-200 rounded-full mx-auto mb-2"></div>
                <p className="text-sm">Transparent delivery model</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="h-2 w-2 bg-blue-200 rounded-full mx-auto mb-2"></div>
                <p className="text-sm">Collaborative approach</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="h-2 w-2 bg-blue-200 rounded-full mx-auto mb-2"></div>
                <p className="text-sm">Cost-effective solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;