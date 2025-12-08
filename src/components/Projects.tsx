import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Globe, Smartphone } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges: string[];
  solutions: string[];
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Frontend', 'Full-Stack', 'Mobile'];

  const projects: Project[] = [
    {
      id: 'sweetslickui',
      title: 'SweetSlickUI',
      description: 'A comprehensive UI library built with React and TypeScript, providing beautiful, accessible components for modern web applications.',
      longDescription: 'SweetSlickUI is a comprehensive React UI library that I developed to solve the common problem of inconsistent design systems across projects. Built with TypeScript and modern React patterns, it provides a collection of beautiful, accessible, and customizable components.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'NPM'],
      category: 'Frontend',
      liveUrl: 'https://www.npmjs.com/package/sweetslickui',
      githubUrl: 'https://github.com/mokfembam/sweetslickui',
      features: [
        '30+ reusable components',
        'TypeScript support',
        'Dark/Light theme support',
        'Accessibility compliant',
        'Customizable theming',
        'Storybook documentation'
      ],
      challenges: [
        'Creating consistent design patterns',
        'Ensuring accessibility compliance',
        'Managing complex component APIs',
        'Building comprehensive documentation'
      ],
      solutions: [
        'Implemented design tokens system',
        'Used ARIA attributes and semantic HTML',
        'Created flexible prop interfaces',
        'Built interactive Storybook stories'
      ]
    },
    {
      id: 'viralboost',
      title: 'ViralBoost',
      description: 'A comprehensive social media task management platform where users earn money by completing engagement tasks across various platforms.',
      longDescription: 'ViralBoost is a full-stack social media task management platform that connects users with earning opportunities through social media engagement. Built for Intech company, this platform facilitates microtasking specifically focused on social media marketing.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Laravel', 'MySQL', 'Cloudinary', 'JWT', 'Tailwind CSS'],
      category: 'Full-Stack',
      liveUrl: 'https://viralboost.com',
      features: [
        'Task management system',
        'Multi-tier membership',
        'Cryptocurrency payments',
        'Referral program',
        'Admin dashboard',
        'Real-time progress tracking'
      ],
      challenges: [
        'Complex user permission system',
        'Secure payment processing',
        'Real-time task updates',
        'Scalable architecture'
      ],
      solutions: [
        'Implemented role-based access control',
        'Integrated secure payment gateways',
        'Used WebSockets for real-time updates',
        'Designed microservices architecture'
      ]
    },
    {
      id: 'reepls',
      title: 'Reepls',
      description: 'A modern content platform combining blogging, podcasting, and social networking features to amplify African voices.',
      longDescription: 'Reepls is a comprehensive content creation platform designed to amplify African voices through modern blogging, podcasting, and social networking features. Built with MERN stack, it provides a complete ecosystem for content creators.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'WaveSurfer.js', 'TipTap'],
      category: 'Full-Stack',
      liveUrl: 'https://reepls.com',
      githubUrl: 'https://github.com/mokfembam/reepls',
      features: [
        'Rich text editor',
        'Audio podcast platform',
        'Social feed system',
        'User profiles',
        'Search functionality',
        'Multi-language support'
      ],
      challenges: [
        'Audio streaming optimization',
        'Real-time social features',
        'Content moderation',
        'Multi-language implementation'
      ],
      solutions: [
        'Implemented efficient audio compression',
        'Used WebSockets for real-time updates',
        'Built AI-powered content filtering',
        'Integrated i18n framework'
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return Globe;
      case 'Full-Stack': return Code;
      case 'Mobile': return Smartphone;
      default: return Database;
    }
  };

  return (
    <section id="projects" className="section bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Showcasing innovative solutions and cutting-edge technology implementations
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                    : 'glass text-gray-300 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                 <div className="relative h-48 bg-gradient-to-br from-gray-600/20 to-gray-500/20 flex items-center justify-center">
                   <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg flex items-center justify-center">
                     <Code className="w-8 h-8 text-white" />
                   </div>
                   <div className="absolute top-4 right-4">
                     <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center">
                      {React.createElement(getCategoryIcon(project.category), { className: "w-4 h-4 text-white" })}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 btn-secondary text-sm py-2"
                    >
                      View Details
                    </motion.button>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-purple-500/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-300" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-purple-500/20 transition-colors"
                      >
                        <Github className="w-4 h-4 text-gray-300" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                      <p className="text-gray-400">{selectedProject.longDescription}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProject(null)}
                      className="w-8 h-8 glass rounded-lg flex items-center justify-center"
                    >
                      ×
                    </motion.button>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="text-gray-400 flex items-start space-x-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Challenges</h4>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="text-gray-400 flex items-start space-x-2">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Solutions</h4>
                      <ul className="space-y-2">
                        {selectedProject.solutions.map((solution, index) => (
                          <li key={index} className="text-gray-400 flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    {selectedProject.liveUrl && (
                      <motion.a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center space-x-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    {selectedProject.githubUrl && (
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary flex items-center space-x-2"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
