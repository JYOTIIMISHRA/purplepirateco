import { ArrowDown, Download, Play } from 'lucide-react';

export default function Hero() {
  const handleDownloadBrochure = () => {
    // This would typically link to a PDF file
    const link = document.createElement('a');
    link.href = '/brochure.pdf';
    link.download = 'Artist-Portfolio-Brochure.pdf';
    link.click();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-sage-50 to-sage-100" />
      
      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sage-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sage-300/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-sage-800 mb-6">
          Contemporary
          <span className="block bg-gradient-to-r from-sage-600 to-sage-800 bg-clip-text text-transparent">
            Artist
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-sage-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Exploring the intersection of tradition and innovation through
          <span className="font-semibold text-sage-700"> branding, collaborations, and commissioned artwork</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={handleDownloadBrochure}
            className="group flex items-center space-x-2 bg-sage-700 text-white px-8 py-4 rounded-full hover:bg-sage-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span className="font-semibold">Download Brochure</span>
          </button>
          
          <button className="group flex items-center space-x-2 border-2 border-sage-600 text-sage-700 px-8 py-4 rounded-full hover:bg-sage-600 hover:text-white transition-all duration-300 transform hover:scale-105">
            <Play className="w-5 h-5 group-hover:animate-pulse" />
            <span className="font-semibold">Watch Video</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-sage-600 mx-auto" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
