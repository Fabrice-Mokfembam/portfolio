import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
  const passions = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies to solve real-world problems creatively.'
    },
    {
      icon: Heart,
      title: 'User Experience',
      description: 'Creating intuitive and delightful experiences that users love and remember.'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Breaking down complex challenges into elegant, sustainable solutions.'
    }
  ];

  return (
    <section id="about" className="section bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about transforming ideas into digital reality through innovative technology solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm Mokfembam Fabrice, an aspirant software engineer with a deep passion for technology 
                  and problem-solving. My journey began with curiosity about how digital systems work and 
                  has evolved into a commitment to creating sustainable, impactful solutions.
                </p>
                <p>
                  What drives me is the belief that technology should serve humanity in meaningful ways. 
                  I specialize in full-stack development, with expertise in modern frameworks like React, 
                  Node.js, and various databases. My approach combines technical excellence with user-centered design.
                </p>
                <p>
                  Beyond coding, I'm passionate about continuous learning, staying updated with emerging 
                  technologies, and contributing to the developer community. I believe in writing clean, 
                  maintainable code and creating experiences that users love.
                </p>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-sm text-gray-400">Years Coding</div>
              </div>
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-2xl font-bold gradient-text">15+</div>
                <div className="text-sm text-gray-400">Projects Built</div>
              </div>
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-2xl font-bold gradient-text">∞</div>
                <div className="text-sm text-gray-400">Learning</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Passions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">What Drives Me</h3>
            <div className="space-y-6">
              {passions.map((passion, index) => (
                <motion.div
                  key={passion.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 rounded-lg group hover:bg-purple-500/10 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <passion.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">{passion.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{passion.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's collaborate and turn your ideas into reality with cutting-edge technology and innovative solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Let's Work Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
