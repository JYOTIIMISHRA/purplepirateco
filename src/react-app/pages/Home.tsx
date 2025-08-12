import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';
import WorkShowcase from '@/react-app/components/WorkShowcase';
import Footer from '@/react-app/components/Footer';
import { ArrowRight, Palette, Users, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WorkShowcase />
      
      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-sage-800 font-serif">
                Creating with Purpose
              </h2>
              
              <p className="text-xl text-sage-600 leading-relaxed">
                With over a decade of experience in contemporary art and design, I specialize in 
                creating meaningful visual narratives that bridge tradition and innovation.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: Palette, label: 'Creative Projects', value: '200+' },
                  { icon: Users, label: 'Collaborations', value: '50+' },
                  { icon: Award, label: 'Awards Won', value: '12+' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-sage-600" />
                    <div className="text-2xl font-bold text-sage-800 mb-1">{stat.value}</div>
                    <div className="text-sage-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <a
                href="/about"
                className="inline-flex items-center space-x-2 bg-sage-700 text-white px-8 py-4 rounded-full hover:bg-sage-800 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <span>Learn More About Me</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop&crop=center"
                  alt="Artist at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-sage-200/30 rounded-full blur-2xl" />
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-sage-300/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-sage-50 to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-sage-800 mb-8 font-serif">
            What I Create
          </h2>
          <p className="text-xl text-sage-600 mb-16 max-w-2xl mx-auto">
            From brand identities to art installations, every project is crafted with attention to detail and creative vision
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Brand Identity',
                description: 'Complete visual systems that tell your story',
                image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop'
              },
              {
                title: 'Collaborations',
                description: 'Creative partnerships with artists and brands',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
              },
              {
                title: 'Personal Projects',
                description: 'Artistic explorations and experimental work',
                image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop'
              },
              {
                title: 'Commissions',
                description: 'Custom artwork tailored to your vision',
                image: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sage-800 mb-2">{service.title}</h3>
                  <p className="text-sage-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <a
              href="/portfolio"
              className="inline-flex items-center space-x-2 border-2 border-sage-600 text-sage-700 px-8 py-4 rounded-full hover:bg-sage-600 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
