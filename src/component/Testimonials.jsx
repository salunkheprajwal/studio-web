import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Name",
    position: "CEO, Tech Solutions",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMcaD9XCVB0ELCCJdktXzOOcHVaG3Zo-NBHlqk75s5o2m6qtTL3H7tZ6huybK87yXsAFw&usqp=CAU",
    quote:
      "TechTech has transformed our business with their seamless integrations and intuitive digital solutions.",
  },
  {
    name: "Name",
    position: "Founder, InnovateX",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMcaD9XCVB0ELCCJdktXzOOcHVaG3Zo-NBHlqk75s5o2m6qtTL3H7tZ6huybK87yXsAFw&usqp=CAU",
    quote:
      "The ease of use and rapid implementation made our transition to digital workflows effortless and impactful.",
  },
  {
    name: "Name",
    position: "CTO, GrowthHub",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMcaD9XCVB0ELCCJdktXzOOcHVaG3Zo-NBHlqk75s5o2m6qtTL3H7tZ6huybK87yXsAFw&usqp=CAU",
    quote:
      "With TechTech, we've scaled operations efficiently while maintaining our team's productivity.",
  },
];

const TestimonialsPage = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.to(overlayRef.current, {
      y: "0%",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="relative min-h-screen  py-12 px-6 overflow-hidden">
      <div
        ref={overlayRef}
        className="absolute inset-0  z-10 translate-y-full"
      />

      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-[60px] sm:text-[180px] font-extrabold text-black uppercase tracking-widest opacity-5">
          TESTIMONIALS
        </h1>
      </div>

      <div
        ref={sectionRef}
        className="relative max-w-4xl mx-auto text-center mt-20 sm:mt-40 z-20"
      >
        <h2
          ref={(el) => {
            textRefs.current[0] = el;
          }}
          className="text-2xl sm:text-4xl font-bold text-gray-900"
        >
          Our Customers Are Proud of Their{" "}
          <span className="text-orange-500">Growth</span>
        </h2>
        <p
          ref={(el) => {
            textRefs.current[1] = el;
          }}
          className="mt-4 text-base sm:text-lg text-gray-600"
        >
          We invite you to explore the opportunity to gain efficiencies and
          manage growth. Moving from manual to digital workflows frees up
          capacity for your teams and allows growth with level staffing. Learn
          more about our rapid implementation and customer experiences.
        </p>
      </div>

      <div className="relative mt-16 sm:mt-32 flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 max-w-6xl mx-auto z-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            ref={(el) => {
              textRefs.current[index + 2] = el;
            }}
            className="flex flex-col items-center text-center w-full sm:w-1/3 opacity-0"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
              {testimonial.name}
            </h3>
            <p className="text-gray-500 text-sm">{testimonial.position}</p>
            <p className="mt-4 text-gray-700 text-base sm:text-lg italic max-w-xs">
              "{testimonial.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
