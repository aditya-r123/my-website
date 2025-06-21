'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, GitBranch, Eye } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with modern technologies, featuring user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      github: 'https://github.com/adityarao/ecommerce',
      live: 'https://ecommerce-demo.com',
      stats: { stars: 245, forks: 89, views: 1200 }
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking features.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop',
      technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'Socket.io', 'Redis'],
      github: 'https://github.com/adityarao/taskmanager',
      live: 'https://taskmanager-demo.com',
      stats: { stars: 189, forks: 67, views: 890 }
    },
    {
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot powered by machine learning, capable of understanding context and providing helpful responses.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker'],
      github: 'https://github.com/adityarao/ai-chat',
      live: 'https://ai-chat-demo.com',
      stats: { stars: 312, forks: 124, views: 2100 }
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/adityarao/portfolio',
      live: 'https://adityarao.dev',
      stats: { stars: 156, forks: 45, views: 750 }
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with real-time data, forecasts, and interactive maps for multiple locations.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=250&fit=crop',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet', 'PWA'],
      github: 'https://github.com/adityarao/weather-app',
      live: 'https://weather-demo.com',
      stats: { stars: 98, forks: 34, views: 520 }
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics platform for social media management with data visualization and reporting tools.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'D3.js', 'AWS'],
      github: 'https://github.com/adityarao/social-analytics',
      live: 'https://analytics-demo.com',
      stats: { stars: 203, forks: 78, views: 1100 }
    }
  ]

  return (
    <section id="projects" className="section-padding bg-[#0a0f1c]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            A collection of my <span className="gradient-text-purple">innovative projects</span> showcasing <span className="gradient-text-green">technical expertise</span> and creative problem-solving.
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
                className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-full border border-slate-700"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-200 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700 text-slate-200 rounded-md text-xs font-medium border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star size={14} />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitBranch size={14} />
                        <span>{project.stats.forks}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye size={14} />
                        <span>{project.stats.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-slate-700 text-slate-200 py-2 px-4 rounded-lg text-sm font-medium text-center hover:bg-slate-600 transition-colors duration-200 flex items-center justify-center space-x-2 border border-slate-600"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium text-center hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </motion.a>
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
          <motion.a
            href="https://github.com/adityarao"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center space-x-2 bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 hover:bg-slate-700 border border-slate-600"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 