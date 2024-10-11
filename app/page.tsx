'use client'

import { Bio } from '@/components/homepage/bio'
import { Contact } from '@/components/homepage/contact'
import { Projects } from '@/components/homepage/projects'
import { fadeIn, staggerContainer } from '@/lib/utils/motion'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <motion.div
      className='min-h-screen flex items-center justify-center p-4'
      initial='initial'
      animate='animate'
      variants={staggerContainer}>
      <motion.div
        className='max-w-2xl w-full space-y-8 font-mono'
        initial='initial'
        animate='animate'
        variants={staggerContainer}>
        <motion.h1
          className='text-3xl font-bold text-foreground border-b border-border pb-2'
          variants={fadeIn}>
          Tariel Davidashvili
        </motion.h1>

        <Bio />
        <Projects />
        <Contact />
      </motion.div>
    </motion.div>
  )
}
