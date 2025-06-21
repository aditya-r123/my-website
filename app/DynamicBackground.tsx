'use client'

import { useEffect } from 'react'

const DynamicBackground = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100

      // Remove existing classes
      document.body.classList.remove('scroll-top', 'scroll-middle', 'scroll-bottom')

      // Apply classes based on scroll position with more granular control
      if (scrollPercentage < 20) {
        document.body.classList.add('scroll-top')
      } else if (scrollPercentage < 80) {
        document.body.classList.add('scroll-middle')
      } else {
        document.body.classList.add('scroll-bottom')
      }
    }

    // Add scroll event listener with throttling for better performance
    let ticking = false
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', scrollHandler, { passive: true })
    
    // Initial call to set the correct class
    handleScroll()

    // Cleanup
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return null
}

export default DynamicBackground 