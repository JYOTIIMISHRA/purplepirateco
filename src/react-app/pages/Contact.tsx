import Navigation from '@/react-app/components/Navigation';
import Footer from '@/react-app/components/Footer';
import { Mail, Instagram, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '', projectType: 'general' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-cream to-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-sage-800 mb-6">
            Let's Create Together
          </h1>
          <p className="text-xl text-sage-600 leading-relaxed">
            Ready to bring your vision to life? I'd love to hear about your project
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-sage-800 mb-8 font-serif">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-sage-100 rounded-full">
                      <Mail className="w-6 h-6 text-sage-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">Email</h3>
                      <a 
                        href="mailto:hello@artisangallery.com" 
                        className="text-sage-600 hover:text-sage-800 transition-colors"
                      >
                        hello@artisangallery.com
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-sage-100 rounded-full">
                      <Instagram className="w-6 h-6 text-sage-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">Instagram</h3>
                      <a 
                        href="https://instagram.com/artisangallery" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sage-600 hover:text-sage-800 transition-colors"
                      >
                        @artisangallery
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-sage-100 rounded-full">
                      <MapPin className="w-6 h-6 text-sage-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">Studio</h3>
                      <p className="text-sage-600">
                        Available worldwide<br />
                        Remote collaborations welcome
                      </p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-sage-100 rounded-full">
                      <Clock className="w-6 h-6 text-sage-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">Response Time</h3>
                      <p className="text-sage-600">
                        Usually within 24-48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Types */}
              <div className="bg-sage-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-sage-800 mb-4">
                  What I Work On
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                    <span className="text-sage-700">Brand Identity & Visual Systems</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                    <span className="text-sage-700">Art Collaborations & Exhibitions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                    <span className="text-sage-700">Custom Art & Installations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                    <span className="text-sage-700">Art Direction & Consultation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-sage-800 mb-8 font-serif">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-sage-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-sage-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-sage-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="branding">Branding Project</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="commission">Commission Work</option>
                    <option value="consultation">Art Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-sage-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors"
                    placeholder="Your project in a few words"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-sage-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sage-700 text-white py-4 px-6 rounded-lg font-semibold hover:bg-sage-800 transition-colors flex items-center justify-center space-x-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
