
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div variants={fadeIn} className="glass-card p-8 md:p-12 mb-10">
            <p className="text-lg leading-relaxed mb-6">
              I'm a backend-focused software developer based in Pokhara, Nepal. My passion lies in building efficient backend systems, integrating with modern frontends, and pushing boundaries with AI and NLP.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I am a dedicated Bachelor of Information Technology (BIT) student with a strong passion for Java development. With solid problem-solving skills and a constant drive to learn emerging technologies, I enjoy tackling challenges and refining my skills to stay current in the ever-evolving field of software development.
            </p>
            <p className="text-lg leading-relaxed">
              I am eager to apply my technical knowledge in a practical setting and contribute to impactful projects through an internship opportunity.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeIn} className="glass-card p-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <FiMail className="text-primary text-xl" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <a href="mailto:sijanmgr034@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  sijanmgr034@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="glass-card p-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <FiPhone className="text-primary text-xl" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <a href="tel:+9779846030022" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  +977 9846030022
                </a>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="glass-card p-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <FiMapPin className="text-primary text-xl" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Fulbari, Pokhara -11, Nepal
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
