import React, { useRef, useEffect, useState } from 'react';
import {
  Wifi,
  MonitorSmartphone,
  Layers,
  Video,
  Users,
  Server,
  Lock,
  Clock,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ServiceCard = ({ icon: Icon, title, description, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-indigo-950/30 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-indigo-900/50 transition-all duration-500 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-3 rounded-lg inline-block mb-4">
        <Icon className="h-6 w-6 text-indigo-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};

const Services = () => {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { threshold: 0.1 });

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={headingRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              Services
            </span>
          </h2>
          <p className="text-slate-300 text-lg">
            From event planning and live streaming to IT infrastructure and
            support, we offer end-to-end solutions to meet your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <ServiceCard
            icon={Video}
            title="Live Streaming"
            description="Professional live streaming services with high-definition video and reliable connectivity for virtual events, webinars, and conferences."
          />

          <ServiceCard
            icon={Users}
            title="Event Management"
            description="Comprehensive event planning and execution services, from venue selection and registration to on-site coordination and post-event analytics."
          />

          <ServiceCard
            icon={Server}
            title="IT Infrastructure"
            description="Design, implementation, and management of robust IT infrastructure solutions tailored to your business requirements."
          />

          <ServiceCard
            icon={Layers}
            title="Software Solutions"
            description="Custom software development and integration services to streamline your business processes and enhance productivity."
          />

          <ServiceCard
            icon={Lock}
            title="Cybersecurity"
            description="Comprehensive security assessments, implementation of best practices, and ongoing monitoring to protect your digital assets."
            className="md:col-span-2 lg:col-span-1"
          />

          <ServiceCard
            icon={Clock}
            title="24/7 Technical Support"
            description="Round-the-clock technical support and maintenance services to ensure your systems run smoothly at all times."
            className="md:col-span-2 lg:col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;