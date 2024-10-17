import { ThemeProvider } from '@/components/context/theme-provider'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tariel Davidashvili',
  description: '-',
  authors: [{ name: 'Tariel Davidashvili', url: 'https://tarieldavids.com' }],
  publisher: 'Tariel Davidashvili',
  creator: 'Tariel Davidashvili',
  generator: 'Next.js',
  applicationName: 'Tariel Davidashvili',
  metadataBase: new URL('https://tarieldavids.com'),
  keywords: ['Tariel Davidashvili', 'Canada', 'Ottawa'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  icons: {
    icon: [
      { url: '/assets/favicon.ico' },
      { url: '/assets/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/assets/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/assets/favicon.ico',
    apple: '/assets/apple-touch-icon.png'
  },
  manifest: '/assets/site.webmanifest',
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
  twitter: {
    title: 'Tariel Davidashvili',
    description: '-',
    creator: 'Tariel Davidashvili',
    images: 'https://tarieldavids.com/og.png'
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
