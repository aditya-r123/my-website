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
      bgColor: 'bg-slate-700',
      textColor: 'text-blue-400',
      image: '/api/placeholder/300/200',
      details: ['Landscape photography', 'Animal Photography', 'Photo editing']
    },
    {
      title: 'Music',
      description: 'Playing guitar and piano, exploring different genres from classical to contemporary.',
      icon: Music,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-slate-700',
      textColor: 'text-purple-400',
      image: '/api/placeholder/300/200',
      details: ['Guitar', 'Ukulele', 'Indian Classic Singing']
    },

    {
      title: 'Travel',
      description: 'Exploring new places, cultures, and experiences around the world.',
      icon: Plane,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-slate-700',
      textColor: 'text-indigo-400',
      image: '/api/placeholder/300/200',
      details: ['Trying new foods', 'Natural geography', 'Language learning', 'Historical sites']
    },


    {
      title: 'Hiking',
      description: 'Exploring nature trails and enjoying the great outdoors.',
      icon: Mountain,
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-slate-700',
      textColor: 'text-emerald-400',
      image: '/api/placeholder/300/200',
      details: ['Mountain trails', 'Nature photography', 'Camping', 'Outdoor gear']
    }
  ]

  return (
    <section id="hobbies" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Interests & <span className="gradient-text">Hobbies</span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
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
                className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 h-full border border-slate-700"
              >
                {/* Image Placeholder */}
                <div className="relative h-32 bg-gradient-to-br from-slate-700 to-slate-800">
                  <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-20`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <hobby.icon size={48} className={`${hobby.textColor} opacity-60`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                    {hobby.title}
                  </h3>
                  
                  <p className="text-slate-200 text-sm leading-relaxed mb-4">
                    {hobby.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-1">
                    {hobby.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-400">
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
      </div>
    </section>
  )
}

export default Hobbies 