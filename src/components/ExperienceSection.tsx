
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: "Spring Boot & RESTful API Development",
    subtitle: "Backend Development Expertise",
    description: "Hands-on experience building scalable backend services using Spring Boot and designing RESTful APIs with proper layering, validations, and secure endpoints. Proficient in API versioning, request/response optimization, and exception handling."
  },
  {
    title: "Hibernate & Database Management",
    subtitle: "ORM & Data Layer Expertise",
    description: "Skilled in designing normalized relational databases (MySQL, MongoDB) and implementing ORM solutions using Hibernate and JPA. Experience includes entity mapping, one-to-many/many-to-many relationships, eager/lazy fetching, and performance optimization."
  },
  {
    title: "Full-Stack Web Development",
    subtitle: "End-to-End Development",
    description: "Integrated React frontends with secure Spring Boot backends; built responsive UIs with modern JavaScript frameworks while maintaining robust backend architecture and security practices."
  },
  {
    title: "Actively Exploring Opportunities",
    subtitle: "Open to Industrial Training & Developer Roles",
    description: "Eager to contribute to impactful projects in Java development through hands-on experience in a real-world environment. Seeking opportunities that foster growth, encourage innovation, and help build a solid foundation for a professional software engineering career."
  }
];

const ExperienceSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="timeline-line" />

          {/* Timeline Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-20 relative ${index % 2 === 0 ? 'md:pr-10 md:text-right md:ml-auto md:mr-0' : 'md:pl-10 md:ml-0 md:mr-auto'} md:w-[calc(50%-40px)] w-full`}
            >
              {/* Timeline dot */}
              <div className="timeline-dot" />
              
              <div className="glass-card p-6 md:p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-2">{exp.title}</h3>
                <h4 className="text-gray-600 dark:text-gray-300 mb-4">{exp.subtitle}</h4>
                <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What I Bring to the Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">What I Bring to the Table</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Strong foundation in Java & backend architecture</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Proficient in core Java concepts, OOP principles, design patterns, and building robust backend systems with Spring Boot and RESTful architecture.
              </p>
            </div>

            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Creative problem-solving & analytical thinking</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Able to break down complex problems, analyze requirements, and develop efficient solutions with clean, maintainable code.
              </p>
            </div>

            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Eagerness to learn and master new technologies</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Passionate about staying current with industry trends and continuously expanding my technical knowledge and practical skills.
              </p>
            </div>

            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Excellent communication & team collaboration</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Effective at communicating technical concepts, collaborating across teams, and adapting to feedback for project success.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
