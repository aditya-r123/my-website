'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS'
  ]

  return (
    <section id="about" className="section-padding bg-[#0a0f1c]">
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
            A passionate <span className="gradient-text-purple">technologist</span> with a drive for <span className="gradient-text-green">innovation</span> and a commitment to excellence in everything I do.
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
                  I'm a results-driven professional with over 5 years of experience in <span className="gradient-text-cyan">software development</span>, specializing in full-stack web applications and <span className="gradient-text-orange">cloud technologies</span>. My passion lies in creating innovative solutions that solve real-world problems.
                </p>
                <p>
                  Throughout my career, I've worked with diverse teams and technologies, always striving to learn and grow. I believe in the power of <span className="gradient-text-purple">collaboration</span> and continuous improvement, and I'm always excited to take on new challenges.
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