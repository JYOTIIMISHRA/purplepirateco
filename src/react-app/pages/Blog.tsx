import Navigation from '@/react-app/components/Navigation';
import Footer from '@/react-app/components/Footer';
import { Calendar, Clock, ChevronRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Finding Inspiration in Natural Forms",
    excerpt: "Exploring how organic shapes and textures influence contemporary design and artistic expression.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Process",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    slug: "finding-inspiration-natural-forms"
  },
  {
    id: 2,
    title: "The Art of Brand Storytelling",
    excerpt: "How visual identity can communicate brand values and create emotional connections with audiences.",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&h=400&fit=crop",
    slug: "art-of-brand-storytelling"
  },
  {
    id: 3,
    title: "Collaborative Art: Building Creative Partnerships",
    excerpt: "Lessons learned from working with other artists and how collaboration can push creative boundaries.",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "Collaboration",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    slug: "collaborative-art-partnerships"
  }
];

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What types of projects do you work on?",
    answer: "I work on a diverse range of projects including brand identity design, collaborative art installations, personal artistic explorations, and custom commissioned pieces. Whether you're a startup needing a complete visual identity or an individual looking for a unique art piece, I can help bring your vision to life."
  },
  {
    id: 2,
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on scope and complexity. Brand identity projects typically take 4-6 weeks, while custom art commissions can range from 2-8 weeks. I always provide a detailed timeline during our initial consultation and keep you updated throughout the process."
  },
  {
    id: 3,
    question: "How do you approach commission work?",
    answer: "Every commission begins with a thorough consultation to understand your vision, space, and requirements. I then create initial concepts and sketches for your review. Once approved, I begin the creation process, providing regular updates and seeking feedback at key milestones."
  },
  {
    id: 4,
    question: "Do you work with clients internationally?",
    answer: "Absolutely! I work with clients worldwide and am experienced in remote collaboration. For physical artworks, I arrange secure shipping. For digital work, everything can be handled remotely with regular video calls and digital presentations."
  },
  {
    id: 5,
    question: "What information do you need to provide a quote?",
    answer: "To provide an accurate quote, I need to understand your project scope, timeline, intended use, and any specific requirements. The more details you can share about your vision and goals, the better I can tailor my proposal to your needs."
  },
  {
    id: 6,
    question: "Do you offer rush projects or expedited timelines?",
    answer: "Yes, I can accommodate rush projects when my schedule allows. Expedited projects may include additional fees due to the intensive focus required, but I'm always willing to discuss options to meet your deadlines."
  }
];

export default function Blog() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-cream to-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-sage-800 mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-sage-600 leading-relaxed">
            Thoughts on art, design, creative process, and frequently asked questions
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-sage-800 mb-12 text-center font-serif">
            Latest Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-sage-600 mb-3">
                    <span className="px-3 py-1 bg-sage-100 rounded-full text-sage-700 font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-sage-800 mb-3 group-hover:text-sage-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sage-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <button className="flex items-center space-x-2 text-sage-700 font-semibold hover:text-sage-800 transition-colors group">
                    <span>Read More</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-sage-800 mb-4 text-center font-serif">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-sage-600 mb-12 text-lg">
            Common questions about working together and my creative process
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-sm border border-sage-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-sage-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-sage-800 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === faq.id ? (
                    <Minus className="w-5 h-5 text-sage-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-sage-600 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-sage-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sage-600 mb-6">
              Don't see your question answered here?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-sage-700 text-white px-8 py-4 rounded-full hover:bg-sage-800 transition-colors font-semibold"
            >
              <span>Get in Touch</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
