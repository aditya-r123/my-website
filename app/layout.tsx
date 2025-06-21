import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DynamicBackground from './DynamicBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aditya Rao - Personal Website',
  description: 'Professional portfolio and personal website of Aditya Rao. Explore my experiences, projects, interests, and hobbies.',
  authors: [{ name: 'Aditya Rao' }],
  keywords: ['Aditya Rao', 'Portfolio', 'Personal Website', 'Professional', 'Projects', 'Experience'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={`${inter.className} antialiased`}>
        <DynamicBackground />
        {children}
      </body>
    </html>
  )
} 