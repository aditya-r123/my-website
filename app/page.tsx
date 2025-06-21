'use client'

import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Hobbies from '@/components/Hobbies'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1c]">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  )
} 