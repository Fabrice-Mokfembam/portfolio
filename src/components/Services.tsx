import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  GraduationCap, 
  Users, 
  Palette,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Heart
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive, scalable web applications with modern frameworks and best practices.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Friendly',
        'Cross-browser Compatibility',
        'Modern Frameworks',
        'Clean Code Architecture'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Creating cross-platform mobile applications that deliver exceptional user experiences.',
      features: [
        'Cross-platform Development',
        'Native Performance',
        'Offline Functionality',
        'Push Notifications',
        'App Store Optimization',
        'User Experience Design'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: GraduationCap,
      title: 'Tutoring',
      description: 'Personalized coding mentorship and technical education to accelerate your learning journey.',
      features: [
        'One-on-One Sessions',
        'Project-based Learning',
        'Code Reviews',
        'Career Guidance',
        'Technology Workshops',
        'Portfolio Development'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Project Management',
      description: 'Leading development teams and managing complex projects from conception to deployment.',
      features: [
        'Agile Methodology',
        'Team Leadership',
        'Timeline Management',
        'Quality Assurance',
        'Risk Assessment',
        'Client Communication'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Palette,
      title: 'UX Design',
      description: 'Designing intuitive user experiences that engage users and drive business success.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Usability Testing',
        'Design Systems',
        'Accessibility Design'
      ],
      color: 'from-pink-500 to-purple-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements and creating a detailed project roadmap.',
      icon: Zap
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Creating beautiful designs and implementing robust, scalable solutions.',
      icon: Code
    },
    {
      step: '03',
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization for the best user experience.',
      icon: Shield
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Deploying your project and providing ongoing maintenance and support.',
      icon: Heart
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions to transform your ideas into digital reality
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-lg p-6 group hover:bg-gray-600/10 transition-all duration-300"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-secondary flex items-center justify-center space-x-2 group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            My <span className="gradient-text">Process</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            A structured approach to delivering exceptional results
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-600 to-gray-500 z-0" />
                )}

                <div className="glass p-6 rounded-lg text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-400 mb-2">{step.step}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. 
              I'm here to help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
