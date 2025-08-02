import React from 'react';
import { Download, ExternalLink, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero: React.FC = () => {
  const { personal, social } = portfolioData;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8">
            <img
              src={personal.avatarUrl}
              alt={personal.name}
              className="w-32 h-32 rounded-full mx-auto shadow-xl ring-4 ring-white dark:ring-gray-700"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              {personal.role}
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {personal.bio}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Download size={20} />
                Download Resume
              </a>
              
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <ExternalLink size={20} />
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;