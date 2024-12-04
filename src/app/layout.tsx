import type { Metadata } from 'next'
import './globals.css'
import { Cinzel, Cinzel_Decorative } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '700'],
})

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  variable: '--font-cinzel-decorative',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Magical Market',
  description: 'A Magical Market based on Harry Potter World!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${cinzelDecorative.variable}`}>
        {children}
      </body>
    </html>
  )
}
