import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aditya Rao - Personal Website',
  description: 'Professional portfolio and personal website of Aditya Rao. Explore my experiences, projects, interests, and hobbies.',
  keywords: ['Aditya Rao', 'Portfolio', 'Personal Website', 'Professional', 'Projects', 'Experience'],
  authors: [{ name: 'Aditya Rao' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
} 