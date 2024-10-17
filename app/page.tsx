'use client'

import { HyperText } from '@/components/ui/hyper-text'
import { contacts, projects } from '@/lib/data/homepage'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
    description: 'Aspiring lawyer with a passion for technology, AI, and creating useful things.',
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
    description: 'Personal website of Tariel Davidashvili, aspiring lawyer with a passion for technology and AI.'
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

      <div className='max-w-4xl w-full font-mono mb-8'>
        <div className='flex'>
          <motion.div
            className='mr-8 flex items-center justify-center'
            variants={itemVariants}>
            <Image
              src='/assets/td.png'
              alt='Tariel Davidashvili'
              width={250}
              height={250}
              className='rounded-3xl '
            />
          </motion.div>

          <div className='flex-1'>
            <motion.h1
              className='text-3xl font-bold text-foreground border-b border-border pb-2 mb-4'
              variants={itemVariants}>
              Tariel Davidashvili
            </motion.h1>

            <div className='mb-8'>
              <motion.p
                className='text-muted-foreground leading-relaxed text-xs'
                variants={itemVariants}>
                Aspiring lawyer and hobbyist developer with a focus on the intersection of technology and law.
              </motion.p>
            </div>

            <div className='space-y-4'>
              <motion.p
                className='text-foreground leading-relaxed text-xs'
                variants={itemVariants}>
                &gt; Currently working on an AI tool that leverages RAG (retrieval augmented generation), structured
                outputs, and multiple agents to analyze and generate large legal documents based on local data using
                local LLMs for privacy.
              </motion.p>
              <motion.p
                className='text-muted-foreground leading-relaxed text-sm'
                variants={itemVariants}>
                +
              </motion.p>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className='flex items-center space-x-2 cursor-pointer'
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}>
                  <Link
                    href={project.href}
                    className='flex items-center space-x-2'>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}>
                        <Image
                          src={`/projects/${project.favicon}`}
                          alt={`${project.text} favicon`}
                          width={24}
                          height={24}
                          className='rounded-full'
                        />
                      </motion.div>
                    )}
                    <div className='flex items-center space-x-2'>
                      <HyperText
                        text={`[${project.text}]`}
                        animateOnLoad={false}
                        duration={300}
                        className='text-sm'
                      />
                      <span className='text-muted-foreground text-sm'>{project.description}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className='w-full max-w-4xl'
        variants={itemVariants}>
        <div className='flex flex-wrap justify-center gap-4'>
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              variants={itemVariants}>
              <Link
                href={contact.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center space-x-2 hover:underline'>
                <contact.icon className='w-5 h-5' />
                <span>{contact.text}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <footer className='absolute bottom-4 text-xs text-muted-foreground mt-24'>
        © {new Date().getFullYear()} Tariel Davidashvili. All rights reserved.
      </footer>
    </motion.div>
  )
}
