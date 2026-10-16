import { ThemeProvider } from '@/components/context/theme-provider'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://tarieldavids.com'),
  title: 'Tariel Davidashvili',
  description: 'Legally inclined. Technically curious. JD Candidate at Lakehead University.',
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
    description: 'Legally inclined. Technically curious. JD Candidate at Lakehead University.',
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
    description: 'Legally inclined. Technically curious. JD Candidate at Lakehead University.',
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
    <html
      lang='en'
      suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Analytics />
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
