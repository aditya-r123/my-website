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
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop',
      details: ['Landscape photography', 'Street photography', 'Portrait sessions', 'Photo editing']
    },
    {
      title: 'Music',
      description: 'Playing guitar and piano, exploring different genres from classical to contemporary.',
      icon: Music,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop',
      details: ['Guitar playing', 'Piano', 'Music production', 'Concert attendance']
    },
    {
      title: 'Reading',
      description: 'Avid reader of science fiction, technology books, and philosophical literature.',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop',
      details: ['Science fiction', 'Tech books', 'Philosophy', 'Biographies']
    },
    {
      title: 'Cooking',
      description: 'Experimenting with different cuisines and learning new recipes from around the world.',
      icon: Utensils,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-700',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop',
      details: ['International cuisine', 'Baking', 'Grilling', 'Recipe development']
    },
    {
      title: 'Travel',
      description: 'Exploring new places, cultures, and experiences around the world.',
      icon: Plane,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-700',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=200&fit=crop',
      details: ['Cultural exploration', 'Adventure travel', 'Local experiences', 'Photography']
    },
    {
      title: 'Gaming',
      description: 'Enjoying strategic games and exploring virtual worlds in my free time.',
      icon: Gamepad2,
      color: 'from-pink-500 to-purple-500',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-700',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop',
      details: ['Strategy games', 'RPGs', 'Indie games', 'Gaming communities']
    },
    {
      title: 'Fitness',
      description: 'Staying active through various forms of exercise and outdoor activities.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-100',
      textColor: 'text-red-700',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
      details: ['Weight training', 'Cardio', 'Yoga', 'Outdoor activities']
    },
    {
      title: 'Hiking',
      description: 'Exploring nature trails and enjoying the great outdoors.',
      icon: Mountain,
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-700',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=200&fit=crop',
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
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 h-full hover:-translate-y-1">
                {/* Image Placeholder */}
                <div className="relative h-32 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img 
                    src={hobby.image} 
                    alt={hobby.title}
                    className="w-full h-full object-cover"
                  />
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
                  <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${hobby.color} mt-4 group-hover:w-12 transition-all duration-200`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hobbies 