'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadResume = () => {
    // Create a sample PDF content (in a real app, this would be an actual PDF file)
    const sampleResumeContent = `
Aditya Rao - Software Engineer

EXPERIENCE
Senior Software Engineer | TechCorp Inc. | 2022 - Present
- Led development of scalable web applications
- Mentored junior developers and conducted code reviews
- Improved application performance by 40%

Full Stack Developer | InnovateTech Solutions | 2020 - 2022
- Built 3 full-stack applications serving 10,000+ users
- Reduced bug reports by 50% through improved testing
- Collaborated with cross-functional teams on product features

Software Developer | StartupXYZ | 2019 - 2020
- Developed 10+ new features for the main platform
- Participated in agile development processes
- Worked closely with product managers and designers

SKILLS
JavaScript, TypeScript, React, Node.js, Python, AWS, Docker, MongoDB, PostgreSQL, Git

EDUCATION
Bachelor of Science in Computer Science | University of Technology | 2019

CONTACT
Email: aditya.rao@email.com
Phone: +1 (555) 123-4567
Location: San Francisco, CA
    `
    
    // Create a blob and download
    const blob = new Blob([sampleResumeContent], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Aditya_Rao_Resume.txt'
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0f1c]">
      {/* Background gradient circles with subtle shift */}
      <div className="absolute inset-0 opacity-3">
        <div className="bg-gradient-circle top-20 left-20 w-96 h-96 bg-blue-500/5"></div>
        <div className="bg-gradient-circle top-40 right-20 w-96 h-96 bg-indigo-500/5"></div>
        <div className="bg-gradient-circle -bottom-8 left-40 w-96 h-96 bg-blue-500/5"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Hi, I'm <span className="gradient-text">Aditya Rao</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed"
            >
              Passionate about <span className="gradient-text-purple">technology</span>, <span className="gradient-text-green">innovation</span>, and creating meaningful solutions that make a difference.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 hover-pulse depth-layer"
              >
                <Mail size={20} />
                Get In Touch
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadResume}
                className="border-2 border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover-pulse depth-layer"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </motion.div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative soft-glow hover-pulse"
            >
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 p-1 depth-layer">
                <div className="w-full h-full rounded-full bg-slate-900 p-2">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                    {/* Sample profile image */}
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                      alt="Aditya Rao" 
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="text-6xl font-bold text-slate-600 hidden">AR</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          whileHover={{ y: 5 }}
          onClick={scrollToAbout}
          className="text-slate-400 hover:text-white transition-colors duration-200 hover-pulse"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero 