import React, { useState, useEffect } from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, image }) => {
  return (
    <div className="min-w-full">
      <p className="text-gray-700 text-xl italic mb-8 leading-relaxed">{quote}</p>
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div>
          <p className="font-bold text-rose-600">{name}</p>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "I've tried countless skincare products, but ViralLens has truly transformed my routine. The results are visible within weeks!",
      name: "Sarah Johnson",
      role: "Beauty Blogger",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote: "As a dermatologist, I'm impressed by the science behind ViralLens products. They're effective yet gentle on the skin.",
      name: "Emily Chen",
      role: "Dermatologist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote: "Even with my active lifestyle, these products keep my skin looking fresh and healthy. The lightweight formulas are perfect!",
      name: "Michael Rodriguez",
      role: "Fitness Trainer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-rose-600 text-sm font-semibold tracking-wider uppercase mb-2">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">
            What Our Customers Say
          </h2>
          <div className="flex justify-center items-center">
            <div className="flex text-yellow-400 text-2xl">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span className="ml-2 text-xl font-medium">4.8/5</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img
              src="https://readdy.ai/api/search-image?query=Beautiful%20Asian%20woman%20with%20glowing%20dewy%20skin%20applying%20facial%20oil%2C%20natural%20makeup%2C%20serene%20expression%2C%20soft%20lighting%2C%20clean%20beauty%20portrait%20against%20soft%20pink%20background%2C%20korean%20beauty%20skincare%20routine&width=600&height=700&seq=15&orientation=portrait"
              alt="Customer Using LunaGlow"
              className="rounded-2xl shadow-xl object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="absolute -top-10 -left-10 text-rose-200 opacity-50">
                <i className="fas fa-quote-left text-6xl"></i>
              </div>
              <div className="relative overflow-hidden">
                <div
                  className="transition-transform duration-500 transform"
                  style={{
                    transform: `translateX(-${currentTestimonial * 100}%)`,
                  }}
                >
                  <div className="flex">
                    {testimonials.map((testimonial, index) => (
                      <Testimonial key={index} {...testimonial} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-3 mt-10">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer focus:outline-none ${
                      currentTestimonial === index ? "bg-rose-600" : "bg-rose-200"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 