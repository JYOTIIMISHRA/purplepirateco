import Navigation from '@/react-app/components/Navigation';
import Footer from '@/react-app/components/Footer';
import { useState } from 'react';
import { ExternalLink, Calendar, Tag, ArrowLeft, ArrowRight } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: 'branding' | 'collaboration' | 'personal' | 'commission';
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  year: string;
  client?: string;
  skills: string[];
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Botanical Brand Identity",
    category: "branding",
    description: "Complete brand identity for sustainable lifestyle company",
    fullDescription: "A comprehensive brand identity project for a sustainable lifestyle company focused on botanical products. The project included logo design, color palette development, typography selection, packaging design, and brand guidelines. The visual identity draws inspiration from organic forms and natural textures, creating a cohesive system that communicates the brand's commitment to sustainability and natural beauty.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1590736969955-eefb34246cd8?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center"
    ],
    year: "2024",
    client: "Green Botanicals Co.",
    skills: ["Brand Identity", "Logo Design", "Packaging", "Color Theory"],
    link: "#"
  },
  {
    id: 2,
    title: "Gallery Collaboration Exhibition",
    category: "collaboration",
    description: "Joint exhibition with contemporary artists exploring themes of nature and technology",
    fullDescription: "A collaborative exhibition featuring works from five contemporary artists, exploring the intersection between natural forms and technological advancement. My contribution included three large-scale mixed media pieces that incorporated organic materials with digital elements. The project challenged traditional boundaries between mediums and invited viewers to reconsider their relationship with both nature and technology.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1594736797933-d0d2d73b7796?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center"
    ],
    year: "2023",
    client: "Modern Art Collective",
    skills: ["Mixed Media", "Installation", "Collaboration", "Curation"],
    link: "#"
  },
  {
    id: 3,
    title: "Nature Study Series",
    category: "personal",
    description: "Personal exploration of natural forms and textures through various mediums",
    fullDescription: "An ongoing personal project documenting the intricate patterns and textures found in nature. This series combines photography, digital art, and traditional drawing techniques to capture the often-overlooked details in natural environments. Each piece in the series focuses on a different aspect of natural form, from the spiral patterns of shells to the branching structures of trees, celebrating the mathematical beauty inherent in nature.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center"
    ],
    year: "2023-2024",
    skills: ["Photography", "Digital Art", "Drawing", "Pattern Design"],
  },
  {
    id: 4,
    title: "Corporate Art Installation",
    category: "commission",
    description: "Large-scale installation for corporate headquarters lobby",
    fullDescription: "A monumental art installation commissioned for a tech company's new headquarters. The piece, spanning 20 feet in width, incorporates sustainable materials and LED lighting to create an dynamic environment that changes throughout the day. The installation reflects the company's values of innovation and environmental responsibility while providing an inspiring focal point for employees and visitors.",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1565025690736-0b25dd6e05b0?w=800&h=600&fit=crop&crop=center"
    ],
    year: "2023",
    client: "TechForward Inc.",
    skills: ["Installation Art", "Sustainable Materials", "LED Integration", "Space Design"],
    link: "#"
  },
  {
    id: 5,
    title: "Minimalist Restaurant Branding",
    category: "branding",
    description: "Clean, sophisticated identity for upscale dining establishment",
    fullDescription: "A refined branding project for a minimalist fine dining restaurant. The challenge was to create an identity that felt both sophisticated and approachable, reflecting the restaurant's philosophy of elevated simplicity. The solution included a custom wordmark, elegant color palette, distinctive typography, menu design, and environmental graphics that work harmoniously to create a memorable dining experience.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop&crop=center"
    ],
    year: "2024",
    client: "Sage & Stone Restaurant",
    skills: ["Brand Identity", "Menu Design", "Typography", "Environmental Graphics"]
  },
  {
    id: 6,
    title: "Digital Art Collection",
    category: "personal",
    description: "Abstract digital compositions exploring color and form",
    fullDescription: "A collection of abstract digital artworks exploring the relationship between color, form, and emotional response. Each piece in the collection uses algorithmic generation combined with intuitive artistic decision-making to create unique compositions. The works investigate themes of chaos and order, natural and artificial, while pushing the boundaries of digital art creation.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1594736797933-d0d2d73b7796?w=800&h=600&fit=crop&crop=center"
    ],
    year: "2024",
    skills: ["Digital Art", "Algorithmic Design", "Color Theory", "Abstract Composition"]
  }
];

const categories = [
  { key: 'all', label: 'All Work' },
  { key: 'branding', label: 'Branding' },
  { key: 'collaboration', label: 'Collaborations' },
  { key: 'personal', label: 'Personal Projects' },
  { key: 'commission', label: 'Commissions' }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedItem.images.length);
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedItem.images.length) % selectedItem.images.length);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-cream to-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-sage-800 mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-sage-600 leading-relaxed">
            A collection of projects spanning branding, collaborations, personal work, and commissions
          </p>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
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

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 text-sm font-semibold text-sage-700 bg-sage-100 rounded-full">
                      {categories.find(cat => cat.key === item.category)?.label}
                    </span>
                    <span className="text-sage-500 text-sm">{item.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-sage-800 mb-2 group-hover:text-sage-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  {item.client && (
                    <p className="text-sage-600 text-sm mb-2">for {item.client}</p>
                  )}
                  
                  <p className="text-sage-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="max-w-6xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-sage-100 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-sage-800">{selectedItem.title}</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-sage-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid lg:grid-cols-2 gap-8 p-6">
                {/* Image Gallery */}
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] bg-sage-50 rounded-2xl overflow-hidden">
                    <img
                      src={selectedItem.images[currentImageIndex]}
                      alt={`${selectedItem.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {selectedItem.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Thumbnail Strip */}
                  {selectedItem.images.length > 1 && (
                    <div className="flex space-x-2 overflow-x-auto pb-2">
                      {selectedItem.images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                            index === currentImageIndex ? 'border-sage-600' : 'border-sage-200'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Project Details */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-sm text-sage-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedItem.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span>{categories.find(cat => cat.key === selectedItem.category)?.label}</span>
                    </div>
                  </div>
                  
                  {selectedItem.client && (
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">Client</h3>
                      <p className="text-sage-600">{selectedItem.client}</p>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-2">Project Description</h3>
                    <p className="text-sage-600 leading-relaxed">{selectedItem.fullDescription}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-3">Skills & Techniques</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-sage-100 text-sage-700 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {selectedItem.link && (
                    <div>
                      <a
                        href={selectedItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-sage-700 text-white px-6 py-3 rounded-full hover:bg-sage-800 transition-colors font-semibold"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
