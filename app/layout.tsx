import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
      <body className={`${inter.className} antialiased bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100`}>
        {children}
      </body>
    </html>
  )
} 