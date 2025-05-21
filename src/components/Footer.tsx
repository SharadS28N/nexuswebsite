import React from 'react';
import { Github, Twitter, Linkedin, Facebook, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-indigo-950 border-t border-indigo-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="https://media.discordapp.net/attachments/1374625641978265610/1374627582871470150/Adobe_Express_-_file.png?ex=682ebd33&is=682d6bb3&hm=2736611e256e98a371a53b6a2233a1b6976635907f26c14c5d500758a5229ab0&=&format=webp&quality=lossless"
                alt="Nexus Event Logo"
                className="h-8 w-8"
              />
              <div className="ml-2">
                <h3 className="text-xl font-bold">
                  <span className="text-white">Nexus</span> 
                  <span className="text-indigo-400">Event</span>
                </h3>
                <p className="text-sm text-slate-400">IT Solutions</p>
              </div>
            </div>
            
            <p className="text-slate-400 mb-6">
              Empowering businesses with innovative technology solutions and exceptional event experiences.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-indigo-900 rounded-full hover:bg-indigo-800 transition-colors">
                <Facebook className="h-5 w-5 text-slate-300" />
              </a>
              <a href="#" className="p-2 bg-indigo-900 rounded-full hover:bg-indigo-800 transition-colors">
                <Twitter className="h-5 w-5 text-slate-300" />
              </a>
              <a href="#" className="p-2 bg-indigo-900 rounded-full hover:bg-indigo-800 transition-colors">
                <Instagram className="h-5 w-5 text-slate-300" />
              </a>
              <a href="#" className="p-2 bg-indigo-900 rounded-full hover:bg-indigo-800 transition-colors">
                <Linkedin className="h-5 w-5 text-slate-300" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Live Streaming</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Event Management</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">IT Infrastructure</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Network Solutions</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Cybersecurity</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-indigo-900 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Nexus Event and I.T Solutions. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <a href="#home" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;