'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Music, BookOpen, Utensils, Plane, Gamepad2, Heart, Mountain } from 'lucide-react'

const Hobbies = () => {
  const hobbies = [
    {
      title: 'Photography',
      description: 'Capturing moments and exploring the world through the lens. Love landscape and street photography.',
      icon: Camera,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700',
      image: '/api/placeholder/300/200',
      details: ['Landscape photography', 'Street photography', 'Portrait sessions', 'Photo editing']
    },
    {
      title: 'Music',
      description: 'Playing guitar and piano, exploring different genres from classical to contemporary.',
      icon: Music,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700',
      image: '/api/placeholder/300/200',
      details: ['Guitar playing', 'Piano', 'Music production', 'Concert attendance']
    },
    {
      title: 'Reading',
      description: 'Avid reader of science fiction, technology books, and philosophical literature.',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700',
      image: '/api/placeholder/300/200',
      details: ['Science fiction', 'Tech books', 'Philosophy', 'Biographies']
    },
    {
      title: 'Cooking',
      description: 'Experimenting with different cuisines and learning new recipes from around the world.',
      icon: Utensils,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-700',
      image: '/api/placeholder/300/200',
      details: ['International cuisine', 'Baking', 'Grilling', 'Recipe development']
    },
    {
      title: 'Travel',
      description: 'Exploring new places, cultures, and experiences around the world.',
      icon: Plane,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-700',
      image: '/api/placeholder/300/200',
      details: ['Cultural exploration', 'Adventure travel', 'Local experiences', 'Photography']
    },
    {
      title: 'Gaming',
      description: 'Enjoying strategic games and exploring virtual worlds in my free time.',
      icon: Gamepad2,
      color: 'from-pink-500 to-purple-500',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-700',
      image: '/api/placeholder/300/200',
      details: ['Strategy games', 'RPGs', 'Indie games', 'Gaming communities']
    },
    {
      title: 'Fitness',
      description: 'Staying active through various forms of exercise and outdoor activities.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-100',
      textColor: 'text-red-700',
      image: '/api/placeholder/300/200',
      details: ['Weight training', 'Cardio', 'Yoga', 'Outdoor activities']
    },
    {
      title: 'Hiking',
      description: 'Exploring nature trails and enjoying the great outdoors.',
      icon: Mountain,
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-700',
      image: '/api/placeholder/300/200',
      details: ['Mountain trails', 'Nature photography', 'Camping', 'Outdoor gear']
    }
  ]

  return (
    <section id="hobbies" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Personal <span className="gradient-text">Hobbies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Activities that bring joy, balance, and inspiration to my life outside of work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
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
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
              >
                {/* Image Placeholder */}
                <div className="relative h-32 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-20`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <hobby.icon size={48} className={`${hobby.textColor} opacity-60`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {hobby.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {hobby.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-1">
                    {hobby.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-500">
                        <span className={`w-1 h-1 rounded-full ${hobby.bgColor}`}></span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Element */}
                  <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${hobby.color} mt-4 group-hover:w-12 transition-all duration-300`}></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Personal Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Finding Balance Through Hobbies
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                My hobbies help me maintain a healthy work-life balance and provide creative outlets 
                that complement my professional work. They keep me inspired and bring fresh perspectives 
                to problem-solving.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether it's capturing a perfect moment through photography, exploring new cultures 
                through travel, or challenging myself with new recipes, these activities enrich my life 
                and make me a more well-rounded individual.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                <div className="text-2xl mb-2">📸</div>
                <div className="text-sm font-medium text-gray-700">Photography</div>
                <div className="text-xs text-gray-500">5+ years</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                <div className="text-2xl mb-2">🎸</div>
                <div className="text-sm font-medium text-gray-700">Music</div>
                <div className="text-xs text-gray-500">8+ years</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-sm font-medium text-gray-700">Travel</div>
                <div className="text-xs text-gray-500">15+ countries</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                <div className="text-2xl mb-2">🏔️</div>
                <div className="text-sm font-medium text-gray-700">Hiking</div>
                <div className="text-xs text-gray-500">50+ trails</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hobbies 