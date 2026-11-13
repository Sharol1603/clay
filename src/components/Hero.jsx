import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap.js'
import { VESSELS } from '../lib/vessels.js'

const LINES = [['Cups', 'that', 'remember'], ['the', 'hands', 'that'], ['made', 'them.']]

export default function Hero() {
  const root = useRef(null)

  // The one page-load moment: words rise, then the vase is drawn and filled with glaze.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const line = root.current.querySelector('.vessel-line')
        const length = line.getTotalLength()
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length })
        gsap.set('.vessel-fill', { opacity: 0 })

        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('.hero-word', { yPercent: 110, duration: 0.9, stagger: 0.07 })
          .to(line, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }, 0.2)
          .to('.vessel-fill', { opacity: 1, duration: 0.9 }, '-=0.5')
          .from('.hero-meta', { opacity: 0, y: 12, duration: 0.6 }, '-=0.5')
      })
    },
    { scope: root }
  )

  return (
    <section
      id="top"
      ref={root}
      className="relative grid min-h-screen items-center gap-10 px-6 pb-16 pt-28 md:grid-cols-[1.4fr_1fr] md:px-16"
    >
      <div>
        <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] font-bold leading-[0.95] tracking-tight">
          {LINES.map((words, i) => (
            <span key={i} className="block">
              {words.map((w) => (
                <span key={w} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                  <span className="hero-word inline-block">{w}</span>
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p className="hero-meta mt-8 max-w-md text-lg leading-relaxed">
          Shoreline Clay is a small pottery studio in Mangaluru. We throw tableware on the wheel and
          teach weekend classes.
        </p>
        <a
          href="#pieces"
          className="hero-meta mt-8 inline-block rounded-full bg-ink px-7 py-3 font-medium text-paper transition-colors hover:bg-glaze"
        >
          See the pieces
        </a>
      </div>

      <svg viewBox="0 0 100 120" className="mx-auto w-full max-w-sm" role="img" aria-label="A hand-thrown vase">
        <path className="vessel-fill" d={VESSELS.vase} fill="#2F5D8C" />
        <path
          className="vessel-line"
          d={VESSELS.vase}
          fill="none"
          stroke="#10242A"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </section>
  )
}
