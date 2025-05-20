"use client"
import { useEffect, useRef } from "react";
import Testimonial from "./Testimonial";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Digital Marketer",
    content: "VidAU AI has erased all my UGC content creation worries. I now generate video assets that are compatible with any platform. The video generation process is fast, easy to use, and produces HD videos in minutes!",
    image: "/assets/1.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Content Creator",
    company: "Digital Studios",
    content: "TI now save time and money creating professional video ad creatives that were never cheap and this easy. VidAU AI-driven features save me hours of editing videos while delivering stunning ROI!",
    image: "/assets/2.png"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "E-commerce Manager",
    company: "StyleHub",
    content: "From ad campaigns to product showcases, VidAU AI does it all. It’s the fastest and most cost-effective way to generate professional videos that capture attention!",
    image: "/assets/3.png"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Digital Marketer",
    company: "Growth Labs",
    content: "The automated video generation saves us hours of work. The results are consistently impressive.",
    image: "/assets/4.png"
  },
  {
    id: 5,
    name: "Lisa Zhang",
    role: "Product Manager",
    company: "InnovateTech",
    content: "VidAU's AI understands our brand voice perfectly. Every video feels authentic and on-brand.",
    image: "/assets/5.png"
  },
  {
    id: 6,
    name: "David Kim",
    role: "Startup Founder",
    company: "NextGen",
    content: "As a startup, VidAU helps us compete with bigger brands by creating professional-looking video ads.",
    image: "/assets/"
  }
];

function TestimonialSection() {
  const scrollRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const intervals = scrollRefs.map((ref, index) => {
      return setInterval(() => {
        if (ref.current) {
          const isMobile = window.innerWidth < 768;
          
          if (isMobile) {
            // Horizontal scrolling for mobile
            if (ref.current.scrollLeft + ref.current.clientWidth >= ref.current.scrollWidth) {
              ref.current.scrollLeft = 0;
            } else {
              ref.current.scrollLeft += 1;
            }
          } else {
            // Vertical scrolling for desktop
            if (ref.current.scrollTop + ref.current.clientHeight >= ref.current.scrollHeight) {
              ref.current.scrollTop = 0;
            } else {
              ref.current.scrollTop += 1;
            }
          }
        }
      }, 5 + (index * 10)); // Slightly different speeds for each column
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  return (
    <div className="w-full h-auto md:py-20 py-10 bg-[#fcfcfc]">
      <div className=" mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          What Our Users Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 md:w-[80%] mx-auto md:h-[500px]">
          {scrollRefs.map((ref, index) => (
            <div 
              key={index}
              ref={ref}
              className="hide-scrollbar md:overflow-y-scroll md:overflow-x-hidden overflow-x-scroll overflow-y-hidden md:h-[500px] flex md:flex-col md:items-stretch items-center"
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="md:mb-6 min-w-[300px] md:min-w-full">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default TestimonialSection;