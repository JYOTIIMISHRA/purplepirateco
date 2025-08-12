import Navigation from '@/react-app/components/Navigation';
import Footer from '@/react-app/components/Footer';
import { Award, Users, Palette, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-cream to-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-sage-800 mb-6">
            About the Artist
          </h1>
          <p className="text-xl text-sage-600 leading-relaxed">
            Exploring the delicate balance between contemporary expression and timeless craftsmanship
          </p>
        </div>
      </section>
npm init -y
      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                  alt="Artist Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage-200/30 rounded-full blur-2xl" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-sage-800 font-serif">
                Creative Journey
              </h2>
              
              <p className="text-lg text-sage-600 leading-relaxed">
                With over a decade of experience in contemporary art and design, I specialize in 
                creating meaningful visual narratives that bridge the gap between traditional 
                craftsmanship and modern aesthetics.
              </p>
              
              <p className="text-lg text-sage-600 leading-relaxed">
                My work spans across branding, collaborative installations, personal explorations, 
                and commissioned pieces for clients worldwide. Each project is approached with 
                careful consideration for context, purpose, and the unique story it needs to tell.
              </p>
              
              <p className="text-lg text-sage-600 leading-relaxed">
                Drawing inspiration from nature's organic forms and the interplay of light and 
                shadow, I aim to create art that not only captures the eye but also resonates 
                with the soul.
              </p>
            </div>
          </div>

          {/* Stats/Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Award, label: 'Awards Won', value: '12+', color: 'text-yellow-600' },
              { icon: Users, label: 'Collaborations', value: '50+', color: 'text-blue-600' },
              { icon: Palette, label: 'Projects Completed', value: '200+', color: 'text-purple-600' },
              { icon: Heart, label: 'Happy Clients', value: '150+', color: 'text-red-500' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-sage-800 mb-2">{stat.value}</div>
                <div className="text-sage-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Philosophy */}
          <div className="bg-sage-50 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-sage-800 mb-6 font-serif">
              Artistic Philosophy
            </h3>
            <p className="text-xl text-sage-600 leading-relaxed max-w-4xl mx-auto">
              "Art is not what you see, but what you make others see. My mission is to create 
              visual experiences that transcend the ordinary, inviting viewers into a world where 
              beauty meets purpose, and tradition dances with innovation."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
