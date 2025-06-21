'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Smartphone, Cloud, Shield, Zap } from 'lucide-react'

const About = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700',
      technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      category: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700',
      technologies: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'PostgreSQL']
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA']
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-700',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
    },
    {
      category: 'Security',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-100',
      textColor: 'text-red-700',
      technologies: ['OAuth', 'JWT', 'HTTPS', 'Security Best Practices', 'Penetration Testing']
    },
    {
      category: 'Performance',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-700',
      technologies: ['Caching', 'CDN', 'Optimization', 'Monitoring', 'Analytics']
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate software engineer with expertise in full-stack development and modern technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Turning Ideas Into Reality
            </h3>
            
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a software engineer with over 5 years of experience building scalable web applications 
                and innovative solutions. My passion lies in creating user-friendly applications that solve 
                real-world problems.
              </p>
              
              <p>
                I specialize in modern web technologies including React, Node.js, and cloud platforms. 
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                industry trends and best practices.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I'm always eager to learn 
                new skills and take on challenging projects.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-400 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop" 
                  alt="Working on code"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}>
                  <skill.icon size={24} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {skill.category}
                </h3>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 ${skill.bgColor} ${skill.textColor} rounded-md text-xs font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${skill.color} mt-4 group-hover:w-12 transition-all duration-300`}></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About 