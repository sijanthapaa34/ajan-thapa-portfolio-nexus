
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, 
  FiDatabase, 
  FiCpu, 
  FiLayout, 
  FiGitBranch, 
  FiUsers, 
  FiGlobe 
} from 'react-icons/fi';

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <FiCode className="text-2xl" />,
      skills: [
        { name: "Java", level: "Advanced", width: "90%" },
        { name: "Spring Boot", level: "Intermediate", width: "75%" },
        { name: "JavaScript", level: "Basic", width: "50%" }
      ]
    },
    {
      title: "Databases",
      icon: <FiDatabase className="text-2xl" />,
      skills: [
        { name: "MySQL", level: "Intermediate", width: "80%" },
        { name: "Oracle", level: "Intermediate", width: "75%" },
        { name: "MongoDB", level: "Basic", width: "40%" }
      ]
    },
    {
      title: "AI & ML",
      icon: <FiCpu className="text-2xl" />,
      skills: [
        { name: "Python", level: "Intermediate", width: "70%" },
        { name: "Data Analysis", level: "Basic", width: "50%" },
        { name: "NLP", level: "Basic", width: "40%" }
      ]
    },
    {
      title: "Frontend",
      icon: <FiLayout className="text-2xl" />,
      skills: [
        { name: "HTML", level: "Intermediate", width: "75%" },
        { name: "CSS", level: "Intermediate", width: "70%" }
      ]
    },
    {
      title: "Version Control",
      icon: <FiGitBranch className="text-2xl" />,
      skills: [
        { name: "Git", level: "Intermediate", width: "75%" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <FiUsers className="text-2xl" />,
      skills: [
        { name: "Problem Solving", level: "Advanced", width: "85%" },
        { name: "Adaptability", level: "Advanced", width: "90%" },
        { name: "Critical Thinking", level: "Advanced", width: "85%" },
        { name: "Communication", level: "Intermediate", width: "75%" },
        { name: "Leadership", level: "Intermediate", width: "70%" }
      ]
    },
    {
      title: "Languages",
      icon: <FiGlobe className="text-2xl" />,
      skills: [
        { name: "English", level: "Fluent", width: "95%" },
        { name: "Nepali", level: "Fluent", width: "100%" },
        { name: "Hindi", level: "Intermediate", width: "75%" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900/50">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="skill-card h-full"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: skill.width }}
                        transition={{ duration: 1, delay: 0.2 * index }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
