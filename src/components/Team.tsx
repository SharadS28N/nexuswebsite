import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Linkedin, Github } from 'lucide-react';

const teamMembers = [
  {
    name: 'suhas belbase',
    role: 'Chief Technology Officer',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
    linkedin: '#',
    email: 'sarah@nexuseventit.com',
    github: '#'
  },
  {
    name: 'David Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    linkedin: '#',
    email: 'david@nexuseventit.com',
    github: '#'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Event Director',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    linkedin: '#',
    email: 'emily@nexuseventit.com',
    github: '#'
  },
  {
    name: 'Michael Thompson',
    role: 'Head of IT Solutions',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    linkedin: '#',
    email: 'michael@nexuseventit.com',
    github: '#'
  },
  {
    name: 'Jessica Wong',
    role: 'Lead Software Engineer',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg',
    linkedin: '#',
    email: 'jessica@nexuseventit.com',
    github: '#'
  },
  {
    name: 'Robert Turner',
    role: 'Network Security Specialist',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    linkedin: '#',
    email: 'robert@nexuseventit.com',
    github: '#'
  },
  {
    name: 'Anna Martinez',
    role: 'Client Success Manager',
    image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg',
    linkedin: '#',
    email: 'anna@nexuseventit.com',
    github: '#'
  },
  {
    name: 'James Wilson',
    role: 'Technical Director',
    image: 'https://images.pexels.com/photos/2379xxx/pexels-photo-2379xxx.jpeg',
    linkedin: '#',
    email: 'james@nexuseventit.com',
    github: '#'
  },
];

const Team = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="team" className="py-20 md:py-32 bg-indigo-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={sectionRef}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Team</span>
            </h2>
            <p className="text-slate-300 text-lg">
              Our diverse team of experts brings together years of experience in event management, streaming technology, and IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-indigo-950/50 backdrop-blur-sm rounded-xl border border-indigo-900/50 overflow-hidden hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-indigo-400 text-sm mb-4">{member.role}</p>
                  <p className="text-slate-300 mb-6">{member.bio}</p>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={`mailto:${member.email}`}
                      className="p-2 bg-indigo-900/50 rounded-full hover:bg-indigo-800/50 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5 text-indigo-400" />
                    </a>
                    <a 
                      href={member.linkedin}
                      className="p-2 bg-indigo-900/50 rounded-full hover:bg-indigo-800/50 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-5 w-5 text-indigo-400" />
                    </a>
                    <a 
                      href={member.github}
                      className="p-2 bg-indigo-900/50 rounded-full hover:bg-indigo-800/50 transition-colors"
                      aria-label={`${member.name}'s GitHub profile`}
                    >
                      <Github className="h-5 w-5 text-indigo-400" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;