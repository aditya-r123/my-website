'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading development of scalable web applications and mentoring junior developers.',
      achievements: [
        'Led development of 3 major web applications serving 50,000+ users',
        'Improved application performance by 40% through optimization',
        'Mentored 5 junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      title: 'Full Stack Developer',
      company: 'InnovateTech Solutions',
      period: '2020 - 2022',
      location: 'Seattle, WA',
      description: 'Built full-stack applications and improved development processes.',
      achievements: [
        'Built 3 full-stack applications serving 10,000+ users',
        'Reduced bug reports by 50% through improved testing',
        'Collaborated with cross-functional teams on product features',
        'Optimized database queries improving response time by 30%'
      ],
      technologies: ['JavaScript', 'Python', 'MongoDB', 'PostgreSQL', 'Git', 'Agile']
    },
    {
      title: 'Software Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      location: 'Austin, TX',
      description: 'Developed features for a growing startup platform.',
      achievements: [
        'Developed 10+ new features for the main platform',
        'Participated in agile development processes',
        'Worked closely with product managers and designers',
        'Contributed to open-source projects'
      ],
      technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Git', 'REST APIs']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-[#0a0f1c] relative overflow-hidden">
      {/* Background gradient circles with subtle shift */}
      <div className="absolute inset-0 opacity-2">
        <div className="bg-gradient-circle top-20 right-20 w-96 h-96 bg-blue-500/5"></div>
        <div className="bg-gradient-circle bottom-20 left-20 w-96 h-96 bg-indigo-500/5"></div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            My professional journey in <span className="gradient-text-purple">software development</span> and <span className="gradient-text-green">technology innovation</span>.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-indigo-500"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg hover-pulse soft-glow">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-700 depth-layer hover-pulse">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                      <div className="flex items-center space-x-4 text-slate-300">
                        <div className="flex items-center space-x-1">
                          <span className="font-semibold gradient-text">{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="inline-flex items-center space-x-2 gradient-text hover:text-white transition-colors duration-200 hover-pulse">
                      <span className="font-medium">View Details</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <p className="text-slate-200 mb-6 leading-relaxed">{experience.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3 text-slate-200"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm font-medium border border-slate-600 hover-pulse"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 