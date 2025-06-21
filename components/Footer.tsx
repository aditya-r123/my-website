'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp, Linkedin, Github, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Interests', href: '#interests' },
        { name: 'Hobbies', href: '#hobbies' },
        { name: 'Contact', href: '#contact' },
        { name: 'Resume', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Portfolio', href: '#' },
        { name: 'GitHub', href: 'https://github.com/adityarao' },
        { name: 'LinkedIn', href: 'https://linkedin.com/in/adityarao' }
      ]
    }
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/adityarao', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/adityarao', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/adityarao', label: 'Twitter' },
    { icon: Mail, href: 'mailto:aditya.rao@email.com', label: 'Email' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">Aditya Rao</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  A passionate technologist dedicated to creating innovative solutions 
                  and making a positive impact through technology.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400 text-sm"
            >
              <span>© {currentYear} Aditya Rao. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart size={16} className="text-red-500 hidden sm:inline" />
              <span className="hidden sm:inline">in San Francisco</span>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-primary-600 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
            >
              <ArrowUp size={16} />
              <span className="text-sm font-medium">Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600"></div>
    </footer>
  )
}

export default Footer 