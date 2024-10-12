'use client'

import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils/cn'

interface HyperTextProps {
  text: string
  duration?: number
  framerProps?: Variants
  className?: string
  animateOnLoad?: boolean
  smoothness?: number
  randomChars?: string
}

export function HyperText({
  text,
  duration = 800,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 }
  },
  className,
  animateOnLoad = true,
  smoothness = 2,
  randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&'
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(text.split(''))
  const [trigger, setTrigger] = useState(false)
  const iterations = useRef(0)
  const isFirstRender = useRef(true)

  const triggerAnimation = () => {
    iterations.current = 0
    setTrigger(true)
  }

  useEffect(() => {
    if (!animateOnLoad && isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const interval = setInterval(() => {
      if (iterations.current < text.length * smoothness) {
        setDisplayText((t) =>
          t.map((l, i) => {
            if (l === ' ') return l
            const progress = iterations.current / smoothness - i
            if (progress >= 1) return text[i]
            if (progress <= 0) return randomChars[Math.floor(Math.random() * randomChars.length)]
            return Math.random() < progress ? text[i] : randomChars[Math.floor(Math.random() * randomChars.length)]
          })
        )
        iterations.current++
      } else {
        setTrigger(false)
        clearInterval(interval)
      }
    }, duration / (text.length * smoothness))

    return () => clearInterval(interval)
  }, [text, duration, trigger, animateOnLoad, smoothness, randomChars])

  return (
    <div
      className='overflow-hidden py-2 flex scale-100'
      onMouseEnter={triggerAnimation}>
      <AnimatePresence>
        {displayText.map((letter, i) => (
          <motion.span
            key={i}
            className={cn('font-mono', letter === ' ' ? 'w-3' : '', className)}
            {...framerProps}>
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
