'use client'

import { HyperText } from '@/components/ui/hyper-text'
import { contacts, projects } from '@/lib/data/homepage'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Person, WithContext } from 'schema-dts'

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

  const jsonLd: WithContext<Person> = {
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
    description: 'Hobbyist developer with a passion for creating useful and beautiful things.',
    url: 'https://tarieldavids.com',
    sameAs: ['https://github.com/iamlite', 'https://linkedin.com/in/tariel-davidashvili']
  }

  return (
    <motion.div
      className='min-h-screen flex items-center justify-center p-4'
      initial='hidden'
      animate='visible'
      variants={containerVariants}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className='max-w-2xl w-full space-y-20 font-mono'>
        <motion.h1
          className='text-3xl font-bold text-foreground border-b border-border pb-2 '
          variants={itemVariants}>
          Tariel Davidashvili
        </motion.h1>

        <div className='space-y-4'>
          <motion.h2
            className='text-lg font-semibold text-foreground/90 underline underline-offset-8 decoration-muted-foreground'
            variants={itemVariants}>
            &gt; Bio
          </motion.h2>
          <motion.p
            className='text-muted-foreground leading-relaxed text-sm'
            variants={itemVariants}>
            Hobbyist developer with a passion for creating useful and beautiful things.
          </motion.p>
        </div>

        <div className='space-y-4'>
          <motion.h2
            className='text-lg font-semibold text-foreground/90 underline underline-offset-8 decoration-muted-foreground'
            variants={itemVariants}>
            &gt; Works
          </motion.h2>
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

        <div className='space-y-4'>
          <motion.h2
            className='text-lg font-semibold text-foreground/90 mb-12 underline underline-offset-8 decoration-muted-foreground'
            variants={itemVariants}>
            &gt; Contact
          </motion.h2>
          <div className='flex flex-wrap justify-evenly'>
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
        </div>
      </div>
    </motion.div>
  )
}
