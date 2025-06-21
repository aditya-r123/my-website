'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'Git'
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            A passionate <span className="gradient-text-purple">software engineer</span> with a drive for <span className="gradient-text-green">innovation</span> and a commitment to building impactful solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Bio</h3>
              <div className="space-y-4 text-slate-200 leading-relaxed">
                <p>
                  I'm a <span className="gradient-text-cyan">software engineer</span> with a passion for creating innovative web applications and solving complex technical challenges. With experience in both frontend and backend development, I specialize in building scalable, user-friendly applications that make a real impact.
                </p>
                <p>
                  My journey in technology has been driven by curiosity and a desire to continuously learn and grow. I enjoy working with modern technologies and frameworks, and I'm always excited to explore new tools and methodologies that can improve the development process and user experience.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-slate-800 text-slate-200 rounded-full text-sm font-medium border border-slate-700 hover:border-blue-500 transition-colors duration-200"
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