'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Users, Star } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      github: 'https://github.com/adityarao/ecommerce',
      live: 'https://ecommerce-demo.com',
      features: ['Real-time inventory', 'Payment processing', 'Admin dashboard', 'Mobile responsive'],
      stats: { stars: 45, forks: 12 }
    },
    {
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot powered by machine learning that provides customer support and answers queries.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL'],
      github: 'https://github.com/adityarao/ai-chat',
      live: 'https://ai-chat-demo.com',
      features: ['Natural language processing', 'Real-time responses', 'Multi-language support', 'Analytics dashboard'],
      stats: { stars: 78, forks: 23 }
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team collaboration, and progress tracking.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind CSS', 'Socket.io'],
      github: 'https://github.com/adityarao/task-manager',
      live: 'https://task-manager-demo.com',
      features: ['Real-time collaboration', 'Task assignments', 'Progress tracking', 'File sharing'],
      stats: { stars: 32, forks: 8 }
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js', 'PWA'],
      github: 'https://github.com/adityarao/weather-app',
      live: 'https://weather-dashboard.com',
      features: ['Location-based forecasts', 'Interactive maps', 'Weather analytics', 'PWA support'],
      stats: { stars: 56, forks: 15 }
    },
    {
      title: 'Fitness Tracker',
      description: 'A comprehensive fitness tracking application with workout planning, progress monitoring, and social features.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Push notifications'],
      github: 'https://github.com/adityarao/fitness-tracker',
      live: 'https://fitness-tracker-app.com',
      features: ['Workout planning', 'Progress tracking', 'Social features', 'Push notifications'],
      stats: { stars: 89, forks: 34 }
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      github: 'https://github.com/adityarao/portfolio',
      live: 'https://adityarao.dev',
      features: ['Responsive design', 'Smooth animations', 'SEO optimized', 'Fast performance'],
      stats: { stars: 23, forks: 5 }
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-purple-400/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code size={64} className="text-primary-600/30" />
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/90 rounded-lg text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      <Github size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/90 rounded-lg text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-gray-600">
                          <span className="text-primary-600">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary-100 text-primary-700 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star size={14} />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={14} />
                        <span>{project.stats.forks}</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                    >
                      View Details →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 