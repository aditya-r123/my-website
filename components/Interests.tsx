'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Globe, Lightbulb, TrendingUp, BookOpen, Users, Zap, Target } from 'lucide-react'

const Interests = () => {
  const interests = [
    {
      title: 'Artificial Intelligence',
      description: 'Fascinated by machine learning, neural networks, and the future of AI technology.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700'
    },
    {
      title: 'Emerging Technologies',
      description: 'Always exploring cutting-edge technologies like blockchain, IoT, and quantum computing.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-700'
    },
    {
      title: 'Open Source',
      description: 'Passionate about contributing to open-source projects and building the developer community.',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700'
    },
    {
      title: 'Continuous Learning',
      description: 'Committed to lifelong learning and staying updated with the latest industry trends.',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700'
    },
    {
      title: 'Innovation & Problem Solving',
      description: 'Love tackling complex problems and finding innovative solutions to real-world challenges.',
      icon: Lightbulb,
      color: 'from-pink-500 to-red-500',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-700'
    },
    {
      title: 'Global Technology Trends',
      description: 'Interested in understanding how technology shapes societies and economies worldwide.',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-700'
    },
    {
      title: 'Data Science',
      description: 'Excited about extracting insights from data and making data-driven decisions.',
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-700'
    },
    {
      title: 'Product Strategy',
      description: 'Interested in product development, user experience, and strategic thinking.',
      icon: Target,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-100',
      textColor: 'text-red-700'
    }
  ]

  return (
    <section id="interests" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional <span className="gradient-text">Interests</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Areas that drive my passion and keep me motivated in the ever-evolving world of technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
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
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${interest.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <interest.icon size={40} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {interest.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {interest.description}
                </p>

                {/* Decorative Element */}
                <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${interest.color} mt-4 group-hover:w-12 transition-all duration-300`}></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why These Interests Matter
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                My professional interests drive my work ethic and help me stay motivated in an ever-changing industry. 
                They guide my learning path and influence the projects I choose to work on.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By staying curious and engaged with these areas, I can bring fresh perspectives and innovative 
                solutions to every project I work on.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 mb-1">5+</div>
                <div className="text-sm text-gray-600">Years Learning</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-1">20+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Passion</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Interests 