import { fadeIn, staggerContainer } from '@/lib/utils/motion'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Email, Github, Linkedin } from '../ui/icons'

export const Contact = () => (
  <motion.section
    className='space-y-4'
    variants={staggerContainer}>
    <motion.h2
      className='text-xl font-semibold text-foreground/90'
      variants={fadeIn}>
      &gt; Contact
    </motion.h2>
    <motion.div
      className='text-muted-foreground space-y-2'
      variants={staggerContainer}>
      {[
        { icon: Email, text: 'Email', href: 'mailto:hello@tariel.me' },
        { icon: Github, text: 'GitHub', href: 'https://github.com/iamlite' },
        { icon: Linkedin, text: 'LinkedIn', href: 'https://linkedin.com/in/tariel-davidashvili' }
      ].map((contact, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          className='flex items-center space-x-2'>
          <contact.icon className='w-5 h-5' />
          <Link
            href={contact.href}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline'>
            {contact.text}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
)
