import { Mail, Instagram, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sage-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Artisan Gallery</h3>
            <p className="text-sage-200 mb-6 max-w-md leading-relaxed">
              Contemporary artist exploring the intersection of tradition and innovation through 
              thoughtful design and meaningful collaborations.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:artist@example.com"
                className="p-3 rounded-full bg-sage-700 hover:bg-sage-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/artist"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-sage-700 hover:bg-sage-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-sage-200 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-sage-200 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-sage-200 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sage-200 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sage-200 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sage-200">Brand Identity</span>
              </li>
              <li>
                <span className="text-sage-200">Collaborations</span>
              </li>
              <li>
                <span className="text-sage-200">Commission Work</span>
              </li>
              <li>
                <span className="text-sage-200">Art Consultation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-sage-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-sage-200 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>© 2024 Artisan Gallery. All rights reserved.</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sage-200 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
