export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
}

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
      when: 'beforeChildren'
    }
  }
})
