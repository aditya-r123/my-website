'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, FlaskConical } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'ML Research Intern',
      company: 'AMD',
      period: '2025 - Present',
      location: 'San Jose, CA',
      type: 'work',
      description: 'Full-stack development focusing on scalable web applications and modern technologies.',
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Git']
    },
    {
      title: 'Research Assistant',
      company: 'University Research Lab',
      period: '2024 - Present',
      location: 'University Campus',
      type: 'research',
      description: 'Conducting cutting-edge research in machine learning and artificial intelligence, focusing on novel algorithms and their applications.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Jupyter', 'Git', 'LaTeX']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2021 - 2022',
      location: 'Remote',
      type: 'work',
      description: 'Built modern, responsive web applications and improved development workflows.',
      technologies: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Git', 'Agile']
    },
    {
      title: 'Graduate Researcher',
      company: 'Computer Science Department',
      period: '2023 - 2024',
      location: 'Research Institute',
      type: 'research',
      description: 'Leading research projects in computer vision and deep learning, publishing findings in top-tier conferences and journals.',
      technologies: ['Python', 'OpenCV', 'Scikit-learn', 'Docker', 'AWS', 'Research']
    },
    {
      title: 'Junior Developer',
      company: 'Software Company',
      period: '2020 - 2021',
      location: 'Remote',
      type: 'work',
      description: 'Started my professional journey in software development.',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Git', 'REST APIs']
    },
    {
      title: 'Undergraduate Researcher',
      company: 'AI Research Group',
      period: '2022 - 2023',
      location: 'University Lab',
      type: 'research',
      description: 'Collaborated on research projects exploring natural language processing and neural network architectures.',
      technologies: ['Python', 'NLTK', 'Transformers', 'Hugging Face', 'Git', 'Papers']
    }
  ]

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background gradient circles */}
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
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            My professional journey in <span className="gradient-text-purple">software development</span> and <span className="gradient-text-green">research innovation</span>.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 md:hidden"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 md:left-1/2 top-6 w-4 h-4 rounded-full border-4 border-slate-800 shadow-lg transform -translate-x-1/2 z-10 ${
                  experience.type === 'research' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                }`}>
                  <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${
                    experience.type === 'research' ? 'bg-purple-500' : 'bg-blue-500'
                  }`}></div>
                </div>

                {/* Experience Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8 md:max-w-[calc(50%-2rem)]' : 'md:ml-auto md:pl-8 md:max-w-[calc(50%-2rem)]'}`}>
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 rounded-2xl p-5 md:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 border depth-layer hover-pulse relative group ${
                      experience.type === 'research' 
                        ? 'hover:shadow-purple-500/20 border-slate-700/50' 
                        : 'hover:shadow-blue-500/20 border-slate-700/50'
                    }`}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 rounded-2xl pointer-events-none group-hover:transition-all duration-500 ${
                      experience.type === 'research'
                        ? 'bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10'
                        : 'bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 group-hover:from-blue-500/10 group-hover:to-indigo-500/10'
                    }`}></div>
                    
                    {/* Experience Type Badge */}
                    <div className={`absolute -top-2 -left-2 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center space-x-1 ${
                      experience.type === 'research'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}>
                      {experience.type === 'research' ? (
                        <>
                          <FlaskConical size={12} />
                          <span>RESEARCH</span>
                        </>
                      ) : (
                        <>
                          <Briefcase size={12} />
                          <span>WORK</span>
                        </>
                      )}
                    </div>

                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          {/* Company Logo and Title Row */}
                          <div className="flex items-center space-x-3 mb-3">
                            {/* Company Logo */}
                            <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg border border-slate-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                              <div className="text-slate-400 text-xs font-medium text-center">
                                <div className={`w-6 h-6 rounded-md flex items-center justify-center mb-1 ${
                                  experience.type === 'research'
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                                    : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                                }`}>
                                  <span className="text-white text-sm font-bold">
                                    {experience.company.charAt(0)}
                                  </span>
                                </div>
                                <span className="text-[8px]">LOGO</span>
                              </div>
                            </div>
                            
                            {/* Title and Company Info */}
                            <div className="flex-1">
                              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                                {experience.title}
                              </h3>
                              <span className="font-semibold gradient-text text-base">{experience.company}</span>
                            </div>
                          </div>
                          
                          {/* Period and Location */}
                          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-1 lg:space-y-0 text-slate-300 text-sm">
                            <div className="flex items-center space-x-2">
                              <Calendar size={16} className="text-blue-400" />
                              <span>{experience.period}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin size={16} className="text-indigo-400" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-200 mb-4 leading-relaxed text-sm md:text-base">{experience.description}</p>

                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-white mb-3 gradient-text">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1, duration: 0.5 }}
                              viewport={{ once: true }}
                              className="px-2 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 rounded-full text-xs font-medium border border-slate-600 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover-pulse"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 