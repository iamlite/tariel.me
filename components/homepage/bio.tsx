import { fadeIn, staggerContainer } from '@/lib/utils/motion'
import { motion } from 'framer-motion'

export const Bio = () => (
  <motion.section
    className='space-y-4'
    variants={staggerContainer}>
    <motion.h2
      className='text-xl font-semibold text-foreground/90'
      variants={fadeIn}>
      &gt; Bio
    </motion.h2>
    <motion.p
      className='text-muted-foreground leading-relaxed'
      variants={fadeIn}>
      Hobbyist developer with a passion for creating useful and beautiful things.
    </motion.p>
  </motion.section>
)
