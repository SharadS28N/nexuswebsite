import React, { useRef } from 'react';
import { Shield, Award, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-indigo-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={sectionRef}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Nexus
              </span>
            </h2>

            <p className="text-slate-300 mb-6">
              Nexus Event & I.T. Solution Pvt. Ltd. is a dynamic company
              dedicated to delivering exceptional event management and
              innovative IT solutions. We specialize in organizing and managing
              esports tournaments, corporate events, and live productions, while
              also providing cutting-edge IT services such as software
              development, web design, and digital marketing.
            </p>

            <p className="text-slate-300 mb-8">
              Our team blends creativity, technology, and strategic execution to
              create flawless experiences that drive engagement and success.
              Whether it's crafting immersive events or enhancing digital
              presence, Nexus is committed to delivering excellence at every
              stage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 p-3 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="font-semibold mb-1">50+</h3>
                <p className="text-slate-400 text-sm">Projects Completed</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 p-3 rounded-full mb-4">
                  <Award className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="font-semibold mb-1">9+</h3>
                <p className="text-slate-400 text-sm">Industry Awards</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 p-3 rounded-full mb-4">
                  <Zap className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="font-semibold mb-1">100%</h3>
                <p className="text-slate-400 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-950/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-900/50 relative">
            <div className="absolute -top-3 -left-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg h-20 w-20 flex items-center justify-center">
              <span className="font-bold text-3xl">3</span>
            </div>

            <div className="pt-12">
              <h3 className="text-2xl font-semibold mb-6">
                Years of Excellence
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium mb-2">Our Mission</h4>
                  <p className="text-slate-400">
                    To redefine event management and broadcasting by integrating
                    creativity, technology, and strategic execution. We aim to
                    provide top-tier event solutions, esports production, and IT
                    services that elevate brands, engage audiences, and drive
                    success
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Our Vision</h4>
                  <p className="text-slate-400">
                    To become a leading force in event management and IT
                    solutions, recognized for our innovation, professionalism,
                    and dedication to excellence. We aspire to transform the way
                    events are organized and businesses operate by leveraging
                    the latest technologies and industry best practices. By
                    continuously evolving and pushing boundaries, we aim to
                    shape the future of esports, corporate events, and digital
                    transformation in Nepal and beyond.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Our Values</h4>
                  <ul className="text-slate-400 list-disc pl-5 space-y-1">
                    <li>Innovation in everything we do</li>
                    <li>Integrity and transparency</li>
                    <li>Excellence in service delivery</li>
                    <li>Client-centered approach</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
