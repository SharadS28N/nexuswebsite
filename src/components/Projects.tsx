import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: "Underdogs championship",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
  },
  {
    title: "69GN 2500 special",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg"
  },
  {
    title: "69GN mobile legends pro series",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg"
  },
  {
    title: "Live Streaming Studio",
    image: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg"
  },
  {
    title: "Network Infrastructure Setup",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
  },
  {
    title: "Cybersecurity Implementation",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg"
  },
  {
    title: "Digital Transformation Project",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  {
    title: "Smart Office Solutions",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="projects" className="py-20 md:py-32 bg-indigo-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
      </div>

      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Projects</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Explore our portfolio of successful projects and innovative solutions.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="project-slider"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-indigo-950/30 backdrop-blur-sm rounded-xl border border-indigo-900/50 overflow-hidden hover:border-purple-500/30 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-center">{project.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;