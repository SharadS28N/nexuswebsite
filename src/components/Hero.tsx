import React, { useEffect, useState } from 'react';
import { ArrowRight, Monitor, Calendar, Server } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Elevating Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Digital Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
              Comprehensive event management, streaming solutions, and IT services tailored to your unique business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-medium flex items-center justify-center group hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-indigo-950/50 text-white rounded-lg font-medium hover:bg-indigo-900/50 transition-colors duration-300"
              >
                Explore Services
              </button>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-950/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-900/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 group">
                <Monitor className="h-10 w-10 text-indigo-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2">Streaming</h3>
                <p className="text-slate-400">Professional live streaming services for your events.</p>
              </div>
              
              <div className="bg-indigo-950/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-900/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group">
                <Calendar className="h-10 w-10 text-purple-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2">Events</h3>
                <p className="text-slate-400">Comprehensive event planning and management.</p>
              </div>
              
              <div className="bg-indigo-950/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-900/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 col-span-2 group">
                <Server className="h-10 w-10 text-indigo-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2">IT Solutions</h3>
                <p className="text-slate-400">Tailored technology solutions to power your business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;