// ServiceSection.jsx - Vite React Version
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const ServicesSection = () => {
  const [expandedSection, setExpandedSection] = useState("01");

  const toggleSection = (id) => {
    if (expandedSection === id) {
      setTimeout(() => {
        setExpandedSection("");
      }, 50);
    } else {
      setExpandedSection(id);
    }
  };

  const services = [
    {
      id: "01",
      title: "UI Development",
      content:
        "We specialize in creating dynamic and user-friendly interfaces that enhance user experiences. Our UI development services ensure that your application is visually appealing, responsive, and easy to navigate, creating seamless interactions for your users.",
      cards: [
        {
          title: "User Interface\nDesign",
          image: "/ui_img1.jpg",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
        {
          title: "Responsive\nWeb Design",
          image: "/ui_img2.jpg",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
        {
          title: "Front-End\nDevelopment",
          image: "/app_img3.jpg",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
        {
          title: "Mobile UI\nDesign",
          image: "/app_img2.jpg",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
      ],
    },
    {
      id: "02",
      title: "Wordpress Development",
      content:
        "WordPress is one of the most powerful and flexible content management systems (CMS) available today, allowing businesses to create dynamic websites with ease. At TechTech, we specialize in WordPress development, crafting custom themes, plugins, and solutions tailored to your unique business needs.",
      cards: [
        {
          title: "Custom Theme Development",
          image: "/wordpress_img3.jpg",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
        {
          title: "Plugin Development",
          image: "/wordpress_img1.jpg",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
        {
          title: "Site Optimization & Security",
          image: "/wordpress_img3.jpg",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
        {
          title: "Ongoing Support & Maintenance",
          image: "/wordpress_img4.jpg",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
      ],
    },
    {
      id: "03",
      title: "Web Development",
      content:
        "In the digital age, having a robust and visually appealing website is essential for businesses to thrive. At TechTech, we specialize in creating custom, responsive websites that not only look great but also provide seamless user experiences. Our web development services are designed to help you achieve your online goals, whether it's building an e-commerce platform, a corporate website, or a personal blog.",
      cards: [
        {
          title: "Custom Website\nDevelopment",
          image: "/app_img1.jpg",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
        {
          title: "Responsive\nDesign",
          image: "/app_img2.jpg",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
        {
          title: "E-Commerce\nSolutions",
          image: "/ui_img1.jpg",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
        {
          title: "Content\nManagement Systems",
          image: "/ui_img2.jpg",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
      ],
    },
    {
      id: "04",
      title: "Mobile App Development",
      content:
        "We focus on creating mobile apps that are intuitive, scalable, and secure. From custom development to seamless integration with your existing systems, we ensure that every app we build is optimized for speed, performance, and usability. Whether you need a mobile app for a startup, an enterprise solution, or something in between, we have the expertise to bring your ideas to life.",
      cards: [
        {
          title: "Custom Mobile\nApp Development",
          image: "/app_img1.jpg",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
        {
          title: "Cross-Platform\nApp Development",
          image: "/app_img2.jpg",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
        {
          title: "Native App\nDevelopment",
          image: "/app_img3.jpg",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
        {
          title: "App Integration\n& Maintenance",
          image: "/app_img4.png",
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
      ],
    },
    {
      id: "05",
      title: "Staff augmentation",
      content:
        "Hire dedicated contractors integrated into your team, providing specialized expertise in mobile app development, integration, and maintenance.",
      cards: [
        {
          title: "Custom Mobile\nApp Development",
          // image: '/app_img1.jpg',
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
        {
          title: "Wordpress\nDevelopment",
          // image: '/app_img2.jpg',
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
        {
          title: "Web\nDevelopment",
          // image: '/app_img3.jpg',
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
        {
          title: "App Integration,\nUpgrades & Maintenance",
          // image: '/app_img4.png',
          overlay: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        },
      ],
    },
  ];

  return (
    <section id="services">
      <div className="min-h-screen text-black p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-gray-500 text-2xl mb-4">Our Services</h2>
            <h1 className="text-3xl md:text-4xl font-light leading-tight text-gray-500 max-w-9xl mx-auto">
              Your Aspiration, Our Expertise: Tailored Services for
              <br className="mb-4" /> Unmatched Excellence.
            </h1>
          </div>

          <div className="space-y-0">
            {services.map((service) => (
              <div
                key={service.id}
                className={`border-t border-gray-800 transition-all duration-500 ease-in-out
                                ${
                                  expandedSection === service.id
                                    ? "py-12"
                                    : "py-8"
                                }`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer group"
                  onClick={() => toggleSection(service.id)}
                >
                  <div className="flex items-center gap-12">
                    <span className="text-3xl font-light">{service.id}</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-500 group-hover:text-cyan-300 group-hover:scale-110 sm:group-hover:scale-110 lg:group-hover:scale-115 duration-300 ease-in-out transition-all">
                      {service.title}
                    </h3>
                  </div>
                  <div
                    className={`rounded-full border border-gray-700 p-2 transition-all duration-300 
                                        ${
                                          expandedSection === service.id
                                            ? "bg-white"
                                            : "group-hover:border-black"
                                        }`}
                  >
                    <ArrowUpRight
                      className={`w-6 h-6 transition-transform duration-300
                                            ${
                                              expandedSection === service.id
                                                ? "text-black rotate-45"
                                                : "text-black group-hover:scale-110"
                                            }`}
                    />
                  </div>
                </div>

                {service.content && (
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden
                                        ${
                                          expandedSection === service.id
                                            ? "max-h-[1000px] opacity-100"
                                            : "max-h-0 opacity-0"
                                        }`}
                  >
                    <div className="mt-8 space-y-8">
                      <div className="border-l-2 border-gray-800 pl-6 max-w-2xl">
                        <p className="text-gray-500 text-lg">
                          {service.content}
                        </p>
                      </div>

                      {service.cards && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                          {service.cards.map((card, index) => (
                            <div
                              key={index}
                              className="relative group overflow-hidden aspect-[4/3] "
                            >
                              {card.image && (
                                <img
                                  src={card.image}
                                  alt={card.title}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                                />
                              )}
                              <div
                                className="absolute inset-0 flex items-center justify-center p-4"
                                style={{ background: card.overlay }}
                              >
                                <h4 className="text-white text-center text-2xl font-medium whitespace-pre-line">
                                  {card.title}
                                </h4>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
