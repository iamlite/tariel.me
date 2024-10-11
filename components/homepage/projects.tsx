import { HyperText } from '@/components/ui/hyper-text'
import { fadeIn, staggerContainer } from '@/lib/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const projects = [
  {
    href: 'https://color-core.com',
    text: 'Color Core',
    favicon: 'color-core.png',
    description: 'A modern color library.'
  },
  {
    href: 'https://shadcn.tariel.me',
    text: 'Shadcn UI Theme Generator',
    favicon: 'shadcndesigner.png',
    description: 'A CSS palette generator for Shadcn UI'
  },
  {
    href: 'https://accessibledesigns.ca',
    text: 'Accessible Design Group',
    favicon: 'adg.png',
    description: 'A simple website for Accessible Design Group.'
  },
  {
    href: 'https://github.com/iamlite/wled-klipper-helper',
    text: 'WLED Klipper Helper',
    favicon: 'wledklipper.png',
    description: '3D printer LED control made simple'
  }
]

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.section
      className='space-y-4'
      variants={staggerContainer}>
      <motion.h2
        className='text-xl font-semibold text-foreground/90'
        variants={fadeIn}>
        &gt; Projects
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        className='space-y-2'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
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
                <span className='text-sm text-muted-foreground'>{project.description}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
