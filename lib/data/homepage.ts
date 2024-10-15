import { Email, Github, Linkedin } from '@/components/ui/icons'

export const projects = [
  {
    href: 'https://color-core.com',
    text: 'Color Core',
    favicon: 'color-core.png',
    description: 'A modern color library.'
  },
  {
    href: 'https://shadesigner.com',
    text: 'ShaDesigner.com',
    favicon: 'shadcndesigner.png',
    description: 'A CSS palette generator for Shadcn UI'
  },
  {
    href: 'https://accessibledesigns.ca',
    text: 'Accessible Design Group',
    favicon: 'adg.png',
    description: 'A website for Accessible Design Group.'
  },
  {
    href: 'https://github.com/iamlite/wled-klipper-helper',
    text: 'WLED Klipper Helper',
    favicon: 'wledklipper.png',
    description: '3D printer LED control made simple'
  }
]

export const contacts = [
  { icon: Email, text: 'Email', href: 'mailto:hello@tariel.me' },
  { icon: Github, text: 'GitHub', href: 'https://github.com/iamlite' },
  { icon: Linkedin, text: 'LinkedIn', href: 'https://linkedin.com/in/tariel-davidashvili' }
]
