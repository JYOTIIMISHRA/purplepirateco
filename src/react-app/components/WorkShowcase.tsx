import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface WorkItem {
  id: number;
  title: string;
  category: 'branding' | 'collaboration' | 'personal' | 'commission';
  description: string;
  image: string;
  link?: string;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    title: 'Botanical Brand Identity',
    category: 'branding',
    description: 'Complete brand identity for sustainable lifestyle company',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop&crop=center',
    link: '#'
  },
  {
    id: 2,
    title: 'Gallery Collaboration',
    category: 'collaboration',
    description: 'Joint exhibition with contemporary artists',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop&crop=center',
    link: '#'
  },
  {
    id: 3,
    title: 'Nature Study Series',
    category: 'personal',
    description: 'Personal exploration of natural forms and textures',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=center',
    link: '#'
  },
  {
    id: 4,
    title: 'Corporate Art Installation',
    category: 'commission',
    description: 'Large-scale installation for corporate headquarters',
    image: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=400&fit=crop&crop=center',
    link: '#'
  }
];

const categories = [
  { key: 'all', label: 'All Work' },
  { key: 'branding', label: 'Branding' },
  { key: 'collaboration', label: 'Collaborations' },
  { key: 'personal', label: 'Personal Projects' },
  { key: 'commission', label: 'Commissions' }
];

export default function WorkShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredWork = activeCategory === 'all' 
    ? workItems 
    : workItems.filter(item => item.category === activeCategory);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredWork.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredWork.length) % filteredWork.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-sage-800 mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            A curated selection of projects spanning branding, collaborations, personal explorations, and commissioned pieces
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => {
                setActiveCategory(category.key);
                setCurrentIndex(0);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-sage-700 text-white shadow-lg'
                  : 'bg-white text-sage-600 hover:bg-sage-100 border border-sage-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Work Display */}
        {filteredWork.length > 0 && (
          <div className="relative">
            {/* Main Work Display */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative group">
                  <img
                    src={filteredWork[currentIndex].image}
                    alt={filteredWork[currentIndex].title}
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-sage-700 bg-sage-100 rounded-full mb-4 w-fit">
                    {categories.find(cat => cat.key === filteredWork[currentIndex].category)?.label}
                  </span>
                  
                  <h3 className="text-3xl font-bold text-sage-800 mb-4">
                    {filteredWork[currentIndex].title}
                  </h3>
                  
                  <p className="text-sage-600 text-lg leading-relaxed mb-8">
                    {filteredWork[currentIndex].description}
                  </p>
                  
                  {filteredWork[currentIndex].link && (
                    <a
                      href={filteredWork[currentIndex].link}
                      className="inline-flex items-center space-x-2 text-sage-700 font-semibold hover:text-sage-800 transition-colors group"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation */}
            {filteredWork.length > 1 && (
              <div className="flex justify-center items-center mt-8 space-x-6">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-sage-700 hover:text-sage-800 transition-all duration-300"
                  aria-label="Previous work"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Dots indicator */}
                <div className="flex space-x-2">
                  {filteredWork.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-sage-700 scale-125' : 'bg-sage-300'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-sage-700 hover:text-sage-800 transition-all duration-300"
                  aria-label="Next work"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
