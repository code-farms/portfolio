import React from 'react';
import { GraduationCap, MapPin, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About: React.FC = () => {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {about.summary}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {about.education.degree}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {about.education.institution} ({about.education.year})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                    <MapPin className="text-teal-600 dark:text-teal-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">{personal.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Code className="text-purple-600 dark:text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Experience</p>
                    <p className="text-gray-600 dark:text-gray-400">3+ Years in Development</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-r from-blue-600 to-teal-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Why Work With Me?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Passionate about creating scalable, efficient solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Strong focus on code quality and best practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Experience with modern technologies and frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Collaborative approach and strong communication</span>
                  </li>
                </ul>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-blue-200 to-teal-200 dark:from-blue-900 dark:to-teal-900 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;