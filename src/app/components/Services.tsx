import React from "react";

// Define the type for service data
type Service = {
  title: string;
  description: string;
  icon: string;
};

// Array of services
const services: Service[] = [
  {
    title: "Custom Software Development",
    description:
      "Expertise in various programming languages to build tailored software solutions.",
    icon: "fas fa-code",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating innovative and user-friendly mobile applications for all platforms.",
    icon: "fas fa-mobile-alt",
  },
  {
    title: "Cloud Solutions",
    description:
      "Providing scalable and secure cloud services for your business needs.",
    icon: "fas fa-cloud",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section container mx-auto my-8">
      <h2 className="services-title text-3xl font-bold mb-4">Our Services</h2>
      <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={`${service.icon} service-icon`}></i>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
