import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Download, ArrowRight, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [showCvPopup, setShowCvPopup] = useState(false);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCv = () => {
    setShowCvPopup(true);
  };
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Fabrice-Mokfembam/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/fabrice-mokfembam/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/home', label: 'Twitter' },
    { icon: Mail, href: 'mailto:fabricemokfembam@gmail.com', label: 'Email' },
  ];

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '5+', label: 'Projects Completed' },
    { number: '4+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-700/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl font-bold">
                I'm{' '}
                <span className="text-white">Mokfembam</span>
                <br />
                Fabrice
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300 font-medium">
                Aspirant Software Engineer
              </h2>
              <p className="text-lg text-gray-400 max-w-lg">
                Transforming ideas into digital reality with passion for problem-solving 
                and sustainable technology solutions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={handleDownloadCv}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2 group"
              >
                <span>Download CV</span>
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-purple-500/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Profile Image Container */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-80 h-80 mx-auto lg:mx-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full blur-xl opacity-30" />
              <div className="relative w-full h-full glass rounded-full p-2">
                <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-600/20 to-gray-500/20 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold gradient-text">MF</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-4 rounded-lg text-center"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* CV Not Available Popup */}
      <AnimatePresence>
        {showCvPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCvPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass max-w-md w-full rounded-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">CV Not Available</h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowCvPopup(false)}
                  className="w-8 h-8 glass rounded-lg flex items-center justify-center hover:bg-gray-600/20 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-300" />
                </motion.button>
              </div>
              <p className="text-gray-300 mb-6">
                My CV is currently not available for download. Please contact me directly at{' '}
                <a 
                  href="mailto:fabricemokfembam@gmail.com" 
                  className="text-white hover:underline"
                >
                  fabricemokfembam@gmail.com
                </a>{' '}
                for more information.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCvPopup(false)}
                className="w-full btn-primary"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
