import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Instagram, Mail } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-sage-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-sage-800 hover:text-sage-600 transition-colors">
            Artisan Gallery
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-sage-800 border-b-2 border-sage-600'
                    : 'text-sage-600 hover:text-sage-800'
                } pb-1`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-6">
              <a
                href="mailto:artist@example.com"
                className="p-2 rounded-full bg-sage-100 text-sage-700 hover:bg-sage-200 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/artist"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-sage-100 text-sage-700 hover:bg-sage-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-sage-600 hover:text-sage-800 hover:bg-sage-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-sage-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block font-medium transition-colors ${
                    isActive(link.href) ? 'text-sage-800' : 'text-sage-600 hover:text-sage-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="flex items-center space-x-4 pt-4 border-t border-sage-100">
                <a
                  href="mailto:artist@example.com"
                  className="flex items-center space-x-2 text-sage-600 hover:text-sage-800 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://instagram.com/artist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sage-600 hover:text-sage-800 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
