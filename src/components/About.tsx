import React from 'react';
import { Target, Eye, Heart, TrendingUp, Users, Focus } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Innovation",
      description: "Embracing cutting-edge technologies and creative solutions"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Transparency",
      description: "Open communication and clear delivery processes"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Reliability",
      description: "Consistent performance and dependable infrastructure"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Continuous Improvement",
      description: "Always evolving and optimizing our approaches"
    },
    {
      icon: <Focus className="h-6 w-6" />,
      title: "Customer Focus",
      description: "Your success is our primary objective"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About CloudStratus Solutions</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <strong>CloudStratus Solutions</strong> is a specialized DevOps and cloud consulting company dedicated to helping businesses achieve <strong>reliable</strong>, <strong>scalable</strong>, and <strong>automated infrastructure operations</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We help startups and enterprises modernize their delivery pipelines, optimize cloud performance, and reduce deployment risks using proven DevOps practices.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to bridge the gap between development and operations, delivering faster releases, better system reliability, and measurable business outcomes. We believe DevOps is not just about tools — it's a culture, a mindset, and a strategic enabler.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become a global leader in cloud-native DevOps consulting, empowering businesses of all sizes to achieve their digital transformation goals through innovative, scalable, and reliable cloud solutions.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;