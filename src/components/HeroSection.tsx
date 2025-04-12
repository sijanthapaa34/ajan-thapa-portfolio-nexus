
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="mb-4">
              <motion.span 
                className="text-primary font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm
              </motion.span>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Sijan Thapa
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <TypeAnimation
                sequence={[
                  'Java Developer',
                  1000,
                  'AI Enthusiast',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            
            <motion.p 
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Building powerful backend systems & exploring the future with AI.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a 
                href="/sijan-thapa-resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <FiDownload /> Download Resume
              </a>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary dark:border-primary dark:text-primary rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
              >
                <FiMail /> Get in Touch
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-blue-500 animate-pulse-glow"></div>
              <img 
                src="/lovable-uploads/354e45aa-c9a2-427b-8eac-0a5aa5411d3c.png" 
                alt="Sijan Thapa" 
                className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 p-1 relative z-10"
              />
              
              {/* Decorative circles */}
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-dashed border-primary/50 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
              <div className="absolute -top-4 -left-4 -right-4 -bottom-4 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" style={{ animationDuration: '25s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
