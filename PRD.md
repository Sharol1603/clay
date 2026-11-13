# Product Requirements: Shoreline Clay website

## 1. Overview
A single-page marketing site for Shoreline Clay, a small pottery studio in Mangaluru. It sells tableware and teaches weekend wheel classes. This is a starter project: the focus is a clean UI and purposeful GSAP animation, with placeholder copy you can replace.

## 2. Goals
- Show the studio's pieces and make the class schedule easy to scan.
- Turn visitors into class bookings and studio visits (email is the single call to action).
- Serve as a base for practicing React, Tailwind and GSAP UI work.

## 3. Audience
Local home cooks, gift buyers and beginners who want to try pottery. Most arrive on a phone.

## 4. Tech stack
| Area | Choice |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animation | GSAP 3 with ScrollTrigger and @gsap/react |
| Language | JavaScript (JSX) |

## 5. Design tokens
- Colors: paper `#EDF1EF`, ink `#10242A`, glaze `#2F5D8C`, slip `#E8B931`, mist `#C9D6D2`.
- Type: Bricolage Grotesque for headings, DM Sans for body text.
- Shapes: pottery silhouettes drawn as SVG paths in `src/lib/vessels.js`. No photographs are required.

## 6. Sections and requirements
| Section | Requirement | Animation |
|---|---|---|
| Navbar | Fixed bar with the studio name and anchor links to Pieces, Classes and Visit. | None |
| Hero | Headline, one-line description, "See the pieces" button, and a vase illustration. | Page-load timeline: headline words rise, the vase outline draws itself, then fills with glaze. |
| Pieces | Four products with name, price and a short note. | Desktop: section pins and the shelf scrolls sideways with the page scroll. Mobile: swipeable row. Hover tilts the vessel. |
| Classes | Three classes with day and time. Details expand on click. | Smooth height transition on expand. |
| Visit | Opening hours and an "Email the studio" button. | Button leans toward the cursor. |

## 7. Motion rules
- One orchestrated moment on load (the hero). Everything else responds to scroll position or user action.
- Every animation sits inside `gsap.matchMedia()`. With `prefers-reduced-motion: reduce`, the page is fully static and still usable.
- Animate transforms and opacity only.

## 8. Non-functional requirements
- Responsive from 360 px wide up.
- Visible keyboard focus and semantic landmarks (header, nav, main, footer).
- Text contrast of at least 4.5:1.
- First load under 200 KB of JavaScript (gzipped).

## 9. Out of scope (v1)
Online payments, a product database, user accounts, a contact form backend, and a CMS.

## 10. Ideas for later
- Replace the SVG vessels with product photos.
- Add a booking form connected to an email or form service.
- Page transitions with a router.
- A text-split headline effect using GSAP SplitText.

## 11. Acceptance criteria
- `npm run dev` starts the site with no console errors.
- `npm run build` completes.
- Hero animation plays once on load and does not replay on scroll.
- The Pieces shelf scrolls sideways on desktop and stacks as a swipe row on mobile.
- Only one class panel is open at a time, and each is operable by keyboard.
