'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/adityarao',
      color: 'hover:text-slate-800 dark:hover:text-slate-200'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/adityarao',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:aditya.rao@email.com',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    }
  ]

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="container-max py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Aditya Rao</h3>
            <p className="text-slate-300 dark:text-slate-400 mb-4 leading-relaxed">
              A passionate <span className="gradient-text-purple">software engineer</span> dedicated to creating <span className="gradient-text-green">innovative solutions</span> 
              and building meaningful applications that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`p-2 bg-slate-800 dark:bg-slate-900 rounded-lg transition-all duration-200 ${social.color}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Hobbies', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-300 dark:text-slate-400 hover:text-white dark:hover:text-slate-200 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-slate-300 dark:text-slate-400">
              <p>San Francisco, CA</p>
              <p>aditya.rao@email.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 dark:border-slate-700 mt-8 pt-8 text-center"
        >
          <p className="text-slate-400 dark:text-slate-500">
            © {currentYear} Aditya Rao. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 