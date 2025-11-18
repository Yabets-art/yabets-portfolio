import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a focus on creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-gray-800 dark:via-blue-900 dark:to-purple-900 flex items-end justify-center overflow-hidden">
                  <img
                    src="/photo_2024-07-30_16-03-42-removebg-preview.png"
                    alt="Yabets Desalegn"
                    className="w-full h-full object-contain object-bottom transform scale-x-[-1] brightness-90 contrast-90"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Bio and Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                  >
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;