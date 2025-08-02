import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer: React.FC = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
                {personal.name}
              </div>
              <p className="text-gray-400">
                Full-Stack Developer crafting digital experiences
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200 transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
              © {currentYear} {personal.name}. Made with 
              <Heart size={16} className="text-red-500" />
              using React & TailwindCSS
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Open source and available on GitHub
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;