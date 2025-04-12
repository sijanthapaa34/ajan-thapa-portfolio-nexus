
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    title: "Bank Management System",
    description: "Modern banking platform with secure authentication, transaction management, and user dashboard",
    status: "In Progress",
    tech: ["Java", "Spring Boot", "JPA", "MySQL", "React"],
    image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500"
  },
  {
    id: 2,
    title: "Class Scribe",
    description: "Educational platform for sharing and organizing class notes and resources",
    status: "Completed",
    tech: ["Java", "Spring Boot", "JPA", "MySQL", "React"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500"
  },
  {
    id: 3,
    title: "Job Listing Web App",
    description: "Platform connecting job seekers with employers with advanced filtering",
    status: "Completed",
    tech: ["Java", "Spring Boot", "JPA", "MySQL", "React"],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500"
  },
  {
    id: 4,
    title: "Employee Management System",
    description: "Comprehensive HR tool for managing employee data, attendance, and performance",
    status: "Completed",
    tech: ["Java", "Spring Boot", "JPA", "MySQL", "React"],
    image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500"
  },
  {
    id: 5,
    title: "Weather App",
    description: "Real-time weather forecasting application with location tracking",
    status: "Completed",
    tech: ["Java", "Spring Boot", "JPA", "MySQL", "React"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500"
  },
  {
    id: 6,
    title: "Bank Management System (Legacy)",
    description: "Console-based banking application with core account management features",
    status: "Completed",
    tech: ["Java", "Hibernate ORM", "MySQL"],
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500"
  },
  {
    id: 7,
    title: "Student Management System",
    description: "Academic record management system with grade tracking and reporting",
    status: "Completed",
    tech: ["Java", "JDBC", "MySQL"],
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500"
  },
  {
    id: 8,
    title: "Real Estate E-commerce",
    description: "Platform for buying, selling, and renting properties with search functionality",
    status: "Completed",
    tech: ["Java", "Servlet", "JSP", "JDBC", "MySQL"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500"
  }
];

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.tech.includes(filter) || project.status === filter);

  const uniqueTech = ["All", "In Progress", "Completed", ...Array.from(new Set(projects.flatMap(p => p.tech)))];

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
        duration: 0.4
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {uniqueTech.map((tech, index) => (
            <button
              key={index}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === tech 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="project-card h-full flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "In Progress" ? "bg-yellow-400 text-yellow-900" : "bg-green-400 text-green-900"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-radial from-primary/20 to-primary/50 dark:from-primary/30 dark:to-primary/60 flex items-center justify-center p-6"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="mb-4 text-white/90">{project.description}</p>
                  <button className="px-4 py-2 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
