import type { Metadata } from 'next'
import { Inter, Lora, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'R. Cody Bradshaw — Operational Leader',
  description:
    'I build operational infrastructure from scratch at high-growth companies.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lora.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
