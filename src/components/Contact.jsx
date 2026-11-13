import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap.js'

export default function Contact() {
  const root = useRef(null)
  const button = useRef(null)

  // The button leans toward the cursor. Only runs on devices with hover and no reduced-motion setting.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(hover: hover) and (prefers-reduced-motion: no-preference)', () => {
        const el = button.current
        const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' })
        const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' })
        const move = (e) => {
          const r = el.getBoundingClientRect()
          xTo((e.clientX - (r.left + r.width / 2)) * 0.3)
          yTo((e.clientY - (r.top + r.height / 2)) * 0.3)
        }
        const leave = () => {
          xTo(0)
          yTo(0)
        }
        el.addEventListener('mousemove', move)
        el.addEventListener('mouseleave', leave)
        return () => {
          el.removeEventListener('mousemove', move)
          el.removeEventListener('mouseleave', leave)
        }
      })
    },
    { scope: root }
  )

  return (
    <section id="visit" ref={root} className="bg-ink px-6 py-24 text-paper md:px-16">
      <h2 className="max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
        Come see the kiln.
      </h2>
      <p className="mt-6 max-w-md text-lg leading-relaxed">
        The studio is open Thursday to Sunday, 11 am to 6 pm. Walk in, or write to book a class seat.
      </p>
      <a
        ref={button}
        href="mailto:hello@shorelineclay.example"
        className="mt-10 inline-block rounded-full bg-slip px-8 py-4 font-medium text-ink"
      >
        Email the studio
      </a>
      <footer className="mt-24 text-sm text-mist">© 2026 Shoreline Clay, Mangaluru</footer>
    </section>
  )
}
