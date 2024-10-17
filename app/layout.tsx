import { ThemeProvider } from '@/components/context/theme-provider'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tariel Davidashvili',
  description: 'Aspiring lawyer with a passion for technology, AI, and creating useful things.',
  authors: [{ name: 'Tariel Davidashvili', url: 'https://tarieldavids.com' }],
  publisher: 'Tariel Davidashvili',
  creator: 'Tariel Davidashvili',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  appleWebApp: {
    title: 'Tariel Davidashvili',
    statusBarStyle: 'black-translucent'
  },
  alternates: {
    canonical: 'https://tarieldavids.com',
    languages: {
      'en-US': 'https://tarieldavids.com'
    }
  },
  openGraph: {
    type: 'website',
    url: 'https://tarieldavids.com',
    title: 'Tariel Davidashvili',
    description: 'Aspiring lawyer with a passion for technology, AI, and creating useful things.',
    siteName: 'Tariel Davidashvili',
    images: [
      {
        url: 'https://tarieldavids.com/opengraph-image',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    title: 'Tariel Davidashvili',
    description: 'Aspiring lawyer with a passion for technology, AI, and creating useful things.',
    creator: 'Tariel Davidashvili',
    images: [
      {
        url: 'https://tarieldavids.com/twitter-image',
        width: 1200,
        height: 600
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
