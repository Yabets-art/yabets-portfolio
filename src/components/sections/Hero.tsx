import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Code, Cpu, Database, Globe, Smartphone, Zap } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Tech icons for the rotating circle
  const techIcons = [
    { icon: Code, delay: 0 },
    { icon: Globe, delay: 0.5 },
    { icon: Database, delay: 1 },
    { icon: Smartphone, delay: 1.5 },
    { icon: Cpu, delay: 2 },
    { icon: Zap, delay: 2.5 }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 dark:from-blue-800 dark:via-purple-800 dark:to-teal-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
          style={{
            backgroundSize: '200% 200%',
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                👋 Hello, my name is
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="block">Yabets</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Desalegn
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl mb-4 font-light"
            >
              {personalInfo.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg mb-6 opacity-90 max-w-lg mx-auto lg:mx-0"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-base mb-8 opacity-80 max-w-md mx-auto lg:mx-0"
            >
              {personalInfo.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors group"
              >
                Explore My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Photo with animated elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer rotating circle with tech icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 w-80 h-80 md:w-96 md:h-96"
                style={{ 
                  left: '50%', 
                  top: '50%', 
                  transform: 'translate(-50%, -50%) scale(1.2)' 
                }}
              >
                {techIcons.map((item, index) => {
                  const angle = (index * 60) * (Math.PI / 180);
                  const radius = 140;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={index}
                      className="absolute w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      animate={{ 
                        rotate: -360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        },
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          delay: item.delay
                        }
                      }}
                    >
                      <item.icon size={20} className="text-white" />
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Middle rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 border-2 border-white/20 rounded-full"
                style={{ 
                  left: '50%', 
                  top: '50%', 
                  transform: 'translate(-50%, -50%)' 
                }}
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute left-0 top-1/2 w-3 h-3 bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute right-0 top-1/2 w-3 h-3 bg-purple-400 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              </motion.div>

              {/* Right-side large badge (user-supplied photo) - centered and sized to fit the right circle */}
              <motion.div
                // gentle bobbing to match ambient motion
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
                // center the badge inside the larger orbit circle and size it to fit
                style={{ left: '78%', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden">
                  <img
                    src="/photo_2025-08-05_09-40-59.png"
                    alt="badge-right"
                    className="w-full h-full object-cover object-center block"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.onerror = null;
                      img.src = '/photo_2024-07-30_16-27-29-removebg-preview.png';
                    }}
                  />
                </div>
              </motion.div>

              {/* Inner pulsing circle */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 w-72 h-72 md:w-80 md:h-80 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
                style={{ 
                  left: '50%', 
                  top: '50%', 
                  transform: 'translate(-50%, -50%)' 
                }}
              />

              {/* Photo container */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <img
                  src="/photo_2024-07-30_16-27-29-removebg-preview.png"
                  alt="Yabets Desalegn"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.onerror = null;
                    img.src = '/photo_2024-07-30_16-03-42-removebg-preview.png';
                  }}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </motion.div>

              {/* Floating elements around photo */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 flex items-center justify-center"
              >
                <Code size={24} className="text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-80 flex items-center justify-center"
              >
                <Database size={16} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToAbout}
          className="text-white hover:text-gray-300 transition-colors flex flex-col items-center"
        >
          <span className="text-sm mb-2 opacity-80">Scroll Down</span>
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;