
import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';

const footerLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" }
];

const techStack = [
  "Java", "Spring Boot", "MySQL", "JPA/Hibernate", "React", "Python"
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/80 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Sijan<span className="text-primary">.dev</span></h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Building powerful backend systems & exploring the future with AI.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/sijanthapaa34" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a 
                href="https://linkedin.com/in/sijan-thapa-a00182302/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a 
                href="mailto:sijanmgr034@gmail.com" 
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Sijan Thapa. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
