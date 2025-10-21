import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Palette, 
  Server,
} from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React.js', percentage: 90, icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'MongoDB', percentage: 85, icon: Database, color: 'from-green-500 to-emerald-500' },
    { name: 'Express.js', percentage: 88, icon: Server, color: 'from-gray-500 to-slate-500' },
    { name: 'Next.js', percentage: 85, icon: Globe, color: 'from-black to-gray-800' },
    { name: 'Supabase', percentage: 80, icon: Database, color: 'from-green-400 to-green-600' },
    { name: 'Prisma', percentage: 75, icon: Database, color: 'from-purple-500 to-pink-500' },
    { name: 'PHP', percentage: 70, icon: Code, color: 'from-purple-600 to-indigo-600' },
    { name: 'MySQL', percentage: 75, icon: Database, color: 'from-orange-500 to-yellow-500' },
    { name: 'WordPress', percentage: 80, icon: Globe, color: 'from-blue-600 to-blue-800' },
    { name: 'React Native', percentage: 70, icon: Smartphone, color: 'from-blue-400 to-blue-600' },
    { name: 'Ionic', percentage: 65, icon: Smartphone, color: 'from-blue-500 to-purple-500' },
    { name: 'Flutter', percentage: 60, icon: Smartphone, color: 'from-blue-400 to-cyan-400' },
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Creating beautiful, responsive user interfaces',
      icon: Palette,
      skills: ['React.js', 'Next.js', 'WordPress']
    },
    {
      title: 'Backend Development',
      description: 'Building robust server-side applications',
      icon: Server,
      skills: ['Express.js', 'PHP', 'Node.js']
    },
    {
      title: 'Database Management',
      description: 'Designing and optimizing data storage',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Supabase']
    },
    {
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications',
      icon: Smartphone,
      skills: ['React Native', 'Ionic', 'Flutter']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming ideas into digital reality with cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-lg text-center group hover:bg-purple-500/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{category.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass p-6 rounded-lg group hover:bg-purple-500/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}>
                    <skill.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-white">{skill.name}</span>
                </div>
                <span className="text-lg font-bold gradient-text">{skill.percentage}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
              
              <div className="flex justify-between text-sm text-gray-400">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Additional Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-3">Development Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'VS Code', 'Figma', 'Postman', 'Chrome DevTools'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-3">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['Problem Solving', 'Team Collaboration', 'Project Management', 'Communication', 'Mentoring'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
