import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We\'ll be in touch soon.'
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="py-20 md:py-32 bg-indigo-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Touch</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Interested in our services? Have questions? We're here to help. Reach out to us using the form below or contact information.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-indigo-950/30 backdrop-blur-sm rounded-xl border border-indigo-900/50 p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-indigo-900/50 p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 mb-1">Email</h4>
                  <p className="font-medium">contact.nexusevent@gmail.com
</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-900/50 p-3 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 mb-1">Phone</h4>
                  <p className="font-medium">+977-9767494370
</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-900/50 p-3 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 mb-1">Address</h4>
                  <p className="font-medium">123 Tech Boulevard, Suite 101</p>
                  <p className="text-slate-400">San Francisco, CA 94103, USA</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-indigo-900/30">
                    <td className="py-2 text-slate-400">Monday - Friday</td>
                    <td className="py-2">Always online</td>
                  </tr>
                  <tr className="border-b border-indigo-900/30">
                    <td className="py-2 text-slate-400">Saturday</td>
                    <td className="py-2">10:00 AM - 4:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-slate-400">Sunday</td>
                    <td className="py-2">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-indigo-950/30 backdrop-blur-sm rounded-xl border border-indigo-900/50 p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            {formStatus.submitted ? (
              <div className={`p-4 rounded-lg ${formStatus.error ? 'bg-red-900/20 border border-red-800' : 'bg-green-900/20 border border-green-800'}`}>
                <p className="text-center">{formStatus.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-indigo-900/50 border border-indigo-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-indigo-900/50 border border-indigo-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-indigo-900/50 border border-indigo-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-indigo-900/50 border border-indigo-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="streaming">Live Streaming</option>
                      <option value="events">Event Management</option>
                      <option value="it">IT Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-indigo-900/50 border border-indigo-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;