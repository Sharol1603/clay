import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap.js'
import { VESSELS } from '../lib/vessels.js'

const PIECES = [
  { name: 'Tide cup', price: '₹850', note: 'Holds 220 ml. Speckled blue glaze.', shape: 'cup', color: '#2F5D8C' },
  { name: 'Low bowl', price: '₹1,400', note: 'Wide enough for rice or soup.', shape: 'bowl', color: '#E8B931' },
  { name: 'Monsoon vase', price: '₹3,200', note: 'Narrow neck, wheel-thrown in one piece.', shape: 'vase', color: '#10242A' },
  { name: 'Pour jug', price: '₹2,100', note: 'Drip-free spout. Fits one litre.', shape: 'jug', color: '#7FA6A0' },
]

export default function Works() {
  const section = useRef(null)
  const track = useRef(null)

  // Desktop: pin the section and slide the shelf sideways while scrolling.
  // Mobile and reduced motion: the shelf is a normal swipeable row.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        const distance = () => Math.max(0, track.current.scrollWidth - window.innerWidth)
        gsap.to(track.current, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section.current,
            start: 'top top',
            end: () => '+=' + distance(),
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })
      })
    },
    { scope: section }
  )

  return (
    <section
      id="pieces"
      ref={section}
      className="flex flex-col justify-center overflow-hidden bg-mist py-20 md:min-h-screen"
    >
      <div className="px-6 md:px-16">
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">On the shelf this month</h2>
        <p className="mt-3 max-w-md">Every piece is made in small batches, so each one differs a little.</p>
      </div>

      <div className="mt-12 overflow-x-auto md:overflow-visible">
        <ul ref={track} className="flex w-max gap-6 px-6 md:gap-10 md:px-16">
          {PIECES.map((p) => (
            <li key={p.name} className="group w-72 shrink-0 md:w-96">
              <div className="flex aspect-[4/5] items-center justify-center rounded-3xl bg-paper">
                <svg
                  viewBox="0 0 100 120"
                  className="w-2/3 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <path d={VESSELS[p.shape]} fill={p.color} />
                </svg>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <span className="font-medium">{p.price}</span>
              </div>
              <p className="mt-1 text-sm">{p.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
