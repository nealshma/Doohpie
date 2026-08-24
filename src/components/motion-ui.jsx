import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useMotionValue, useSpring } from 'motion/react'

export const EASE = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

export function SplitWords({ text, wordClassName = '', delayStart = 0 }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span className="split-word-mask" key={`${word}-${i}`}>
          <motion.span
            className={wordClassName}
            initial={{ y: '115%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: delayStart + i * 0.07, ease: EASE }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  )
}

export function SpotlightCard({ as: Tag = 'div', className = '', children, ...rest }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <Tag ref={cardRef} className={`spotlight-card ${className}`} onMouseMove={handleMouseMove} {...rest}>
      {children}
    </Tag>
  )
}

export function MagneticLink({ to, className, children, strength = 0.35 }) {
  const wrapRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 22, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 300, damping: 22, mass: 0.5 })

  const handleMouseMove = (e) => {
    const rect = wrapRef.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={wrapRef}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={to} className={className}>{children}</Link>
    </motion.div>
  )
}

export function Magnetic({ children, strength = 0.35, className = '' }) {
  const wrapRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 22, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 300, damping: 22, mass: 0.5 })

  const handleMouseMove = (e) => {
    const rect = wrapRef.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={wrapRef}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedCounter({ target, prefix = '', suffix = '', duration = 1800, format = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else { setCount(Math.floor(start)) }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target, duration])

  const displayValue = format ? count.toLocaleString('en-US') : count

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>
}
