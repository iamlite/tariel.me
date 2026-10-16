'use client'

import { contacts } from '@/lib/data/homepage'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Person, WebPage, WebSite, WithContext } from 'schema-dts'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function HomePage() {
  const jsonLdPerson: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tariel Davidashvili',
    familyName: 'Davidashvili',
    givenName: 'Tariel',
    gender: 'male',
    nationality: 'Canada',
    birthPlace: 'Baku, Azerbaijan',
    birthDate: '1994-04-01',
    email: 'hello@tariel.me',
    description: 'Legally inclined. Technically curious. JD Candidate at Lakehead University.',
    url: 'https://tarieldavids.com',
    sameAs: ['https://github.com/iamlite', 'https://linkedin.com/in/tariel-davidashvili'],
    image: 'https://tarieldavids.com/assets/tariel_davidashvili.png'
  }

  const jsonLdWebSite: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tariel Davidashvili',
    url: 'https://tarieldavids.com'
  }

  const jsonLdWebPage: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Tariel Davidashvili',
    url: 'https://tarieldavids.com',
    description:
      'Personal website of Tariel Davidashvili — legally inclined, technically curious, JD Candidate at Lakehead University.'
  }

  return (
    <motion.div
      className='min-h-screen flex flex-col items-center justify-center p-4'
      initial='hidden'
      animate='visible'
      variants={containerVariants}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />

      <div className='max-w-2xl w-full font-mono mb-8'>
        <div className='flex flex-col md:flex-row'>
          <motion.div
            className='mb-8 md:mb-0 md:mr-8 flex items-center justify-center'
            variants={itemVariants}>
            <Image
              src='/assets/td.png'
              alt='Tariel Davidashvili'
              width={250}
              height={250}
              priority
              className='rounded-3xl'
              style={{ width: 'auto', height: 'auto', maxWidth: 250, maxHeight: 250 }}
            />
          </motion.div>

          <div className='flex-1 flex flex-col md:min-h-62.5'>
            <div className='space-y-2'>
              <motion.h1
                className='text-3xl font-bold text-foreground border-b border-border pb-2 mb-4'
                variants={itemVariants}>
                Tariel Davidashvili
              </motion.h1>

              <motion.p
                className='text-muted-foreground leading-relaxed text-xs'
                variants={itemVariants}>
                Legally inclined. Technically curious.
              </motion.p>
              <motion.p
                className='text-muted-foreground leading-relaxed text-xs'
                variants={itemVariants}>
                JD Candidate · Bora Laskin Faculty of Law
              </motion.p>
              <motion.p
                className='text-muted-foreground leading-relaxed text-xs'
                variants={itemVariants}>
                Lakehead University
              </motion.p>
            </div>

            <motion.div className='mt-auto pt-4' variants={itemVariants}>
              <div className='flex flex-wrap justify-start gap-4'>
                {contacts.map((contact, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Link
                      href={contact.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center space-x-2 hover:underline text-xs'>
                      <contact.icon className='w-5 h-5' />
                      <span>{contact.text}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>



      <footer className='absolute bottom-4 text-xs text-muted-foreground mt-24'>
        © {new Date().getFullYear()} Tariel Davidashvili. All rights reserved.
      </footer>
    </motion.div>
  )
}
