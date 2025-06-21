'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      github: 'https://github.com/adityarao/ecommerce',
      features: ['Real-time inventory', 'Payment processing', 'Admin dashboard', 'Mobile responsive']
    },
    {
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot powered by machine learning that provides customer support and answers queries.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL'],
      github: 'https://github.com/adityarao/ai-chat',
      features: ['Natural language processing', 'Real-time responses', 'Multi-language support', 'Analytics dashboard']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team collaboration, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      technologies: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind CSS', 'Socket.io'],
      github: 'https://github.com/adityarao/task-manager',
      features: ['Real-time collaboration', 'Task assignments', 'Progress tracking', 'File sharing']
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=250&fit=crop',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js', 'PWA'],
      github: 'https://github.com/adityarao/weather-app',
      features: ['Location-based forecasts', 'Interactive maps', 'Weather analytics', 'PWA support']
    },
    {
      title: 'Fitness Tracker',
      description: 'A comprehensive fitness tracking application with workout planning, progress monitoring, and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Push notifications'],
      github: 'https://github.com/adityarao/fitness-tracker',
      features: ['Workout planning', 'Progress tracking', 'Social features', 'Push notifications']
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      github: 'https://github.com/adityarao/portfolio',
      features: ['Responsive design', 'Smooth animations', 'SEO optimized', 'Fast performance']
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my recent work showcasing various technologies and problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-primary-500/20 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-purple-400/20 group-hover:from-primary-400/30 group-hover:to-purple-400/30 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg shadow-lg transition-all duration-200 flex items-center gap-2 group-hover:shadow-xl"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.span 
                            className="text-primary-600 dark:text-primary-400"
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          >
                            •
                          </motion.span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md text-xs font-medium hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors duration-200"
                          whileHover={{ 
                            scale: 1.05,
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <motion.span 
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                        >
                          +{project.technologies.length - 4}
                        </motion.span>
                      )}
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

export default Projects 