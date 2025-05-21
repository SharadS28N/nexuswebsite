import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Nexus transformed our annual conference with their seamless streaming solution. The technical quality was exceptional, and their team's support was outstanding from planning to execution.",
    author: "Sarah Johnson",
    position: "Events Director, TechCorp",
    rating: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
  },
  {
    id: 2,
    content: "We've partnered with Nexus for our IT infrastructure needs for over 3 years. Their expertise and proactive approach have significantly improved our systems' reliability and performance.",
    author: "Michael Chen",
    position: "CTO, Innovate Solutions",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    id: 3,
    content: "The Nexus team went above and beyond for our product launch event. Their attention to detail and technical prowess ensured everything ran flawlessly, both for in-person and virtual attendees.",
    author: "Emily Rodriguez",
    position: "Marketing Director, FutureTech",
    rating: 5,
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg"
  },
  {
    id: 4,
    content: "Nexus provided a comprehensive IT overhaul for our company, from network infrastructure to cybersecurity. Their expertise and responsive support have been invaluable to our operations.",
    author: "David Wilson",
    position: "Operations Manager, GrowthLabs",
    rating: 4,
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
  },
  {
    id: 5,
    content: "Our virtual conference was a huge success thanks to Nexus. Their streaming platform was reliable, user-friendly, and delivered excellent video quality to our global audience.",
    author: "Jessica Taylor",
    position: "Conference Coordinator, EduSummit",
    rating: 5,
    image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg"
  }
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Clients Say</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Don't just take our word for it. Here's what our clients have to say about their experience working with Nexus.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`}
                        />
                      ))}
                    </div>
                    
                    <p className="text-lg text-slate-300 mb-6">"{testimonial.content}"</p>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-indigo-500"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-slate-400 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index ? 'w-8 bg-indigo-400' : 'w-2 bg-slate-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">250+</h3>
            <p className="text-slate-300">Projects Delivered</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">98%</h3>
            <p className="text-slate-300">Client Satisfaction</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">120+</h3>
            <p className="text-slate-300">Clients Worldwide</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">7</h3>
            <p className="text-slate-300">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;