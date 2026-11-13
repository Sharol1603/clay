import { useState } from 'react'

const CLASSES = [
  {
    title: 'Wheel basics',
    when: 'Saturdays, 10:00 am to 1:00 pm',
    detail: 'Centre the clay, pull a cup and trim it. Six seats per session, ₹2,500 including firing.',
  },
  {
    title: 'Hand-building evening',
    when: 'Wednesdays, 6:00 pm to 8:30 pm',
    detail: 'Pinch pots, coil bowls and slab plates. No wheel needed. Eight seats, ₹1,800.',
  },
  {
    title: 'Glaze day',
    when: 'First Sunday of the month',
    detail: 'Bring pieces you made here and glaze them with our blues, yellows and speckles. ₹900.',
  },
]

export default function Workshops() {
  const [open, setOpen] = useState(0)

  return (
    <section id="classes" className="px-6 py-24 md:px-16">
      <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">Learn to throw</h2>
      <ul className="mt-12 max-w-3xl divide-y divide-ink/20 border-y border-ink/20">
        {CLASSES.map((c, i) => {
          const isOpen = open === i
          return (
            <li key={c.title}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`class-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-2xl font-bold md:text-3xl">{c.title}</span>
                  <span className="text-sm">{c.when}</span>
                </button>
              </h3>
              <div
                id={`class-${i}`}
                className={`grid transition-[grid-template-rows] duration-300 ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <p className="overflow-hidden pr-6 leading-relaxed">
                  <span className="block pb-6">{c.detail}</span>
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
