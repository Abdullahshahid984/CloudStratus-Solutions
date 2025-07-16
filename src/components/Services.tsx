import React from 'react';
import { 
  Settings, 
  Cloud, 
  GitBranch, 
  Container, 
  ArrowUpRight, 
  Monitor,
  Shield
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "DevOps as a Service",
      description: "Continuous integration, delivery, and release automation across your environments.",
      features: ["CI/CD Pipeline Setup", "Automated Testing", "Release Management", "Environment Provisioning"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Infrastructure & Automation",
      description: "Infrastructure as Code (IaC) with Terraform, ARM, Pulumi, and more.",
      features: ["Infrastructure as Code", "Cloud Architecture", "Resource Optimization", "Cost Management"]
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "CI/CD Pipeline Design",
      description: "Modern, secure pipelines using GitHub Actions, Azure DevOps, GitLab CI, Jenkins.",
      features: ["Pipeline Architecture", "Automated Deployments", "Quality Gates", "Security Scanning"]
    },
    {
      icon: <Container className="h-8 w-8" />,
      title: "Kubernetes & Containerization",
      description: "Design, deploy, and manage scalable microservices using Kubernetes and Docker.",
      features: ["Container Orchestration", "Microservices Architecture", "Service Mesh", "Auto-scaling"]
    },
    {
      icon: <ArrowUpRight className="h-8 w-8" />,
      title: "Cloud Migration & Optimization",
      description: "Migrate workloads to AWS, Azure, or GCP with cost-efficient architectures.",
      features: ["Migration Strategy", "Performance Optimization", "Cost Reduction", "Multi-cloud Support"]
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Monitoring & Observability",
      description: "Implement monitoring, logging, alerting, and tracing with industry-leading tools.",
      features: ["Performance Monitoring", "Log Management", "Alerting Systems", "Distributed Tracing"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Compliance",
      description: "DevSecOps integration and cloud-native security best practices.",
      features: ["Security Automation", "Compliance Management", "Vulnerability Scanning", "Access Control"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-lg text-gray-600">
            We deliver end-to-end DevOps and cloud transformation solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;