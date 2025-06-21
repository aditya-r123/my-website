'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail, Phone, Globe } from 'lucide-react'

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java',
    'AWS', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'Git',
    'Machine Learning', 'Data Analysis', 'Agile', 'Leadership'
  ]

  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
    { icon: Calendar, label: 'Experience', value: '5+ Years' },
    { icon: Mail, label: 'Email', value: 'aditya.rao@email.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: Globe, label: 'Website', value: 'adityarao.dev' },
  ]

  return (
    <section id="about" className="section-padding bg-white">
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
            A passionate technologist with a drive for innovation and a commitment to excellence in everything I do.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-96 h-96 rounded-2xl bg-gradient-to-br from-primary-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-2xl bg-white p-2">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <User size={120} className="text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg">Professional Photo</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Personal Info */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Personal Information</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <info.icon size={20} className="text-primary-600" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                      <p className="text-gray-900 font-semibold">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bio</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a results-driven professional with over 5 years of experience in software development, 
                  specializing in full-stack web applications and cloud technologies. My passion lies in 
                  creating innovative solutions that solve real-world problems.
                </p>
                <p>
                  Throughout my career, I've worked with diverse teams and technologies, always striving 
                  to learn and grow. I believe in the power of collaboration and continuous improvement, 
                  and I'm always excited to take on new challenges.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 