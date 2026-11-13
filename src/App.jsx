import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Works from './components/Works.jsx'
import Workshops from './components/Workshops.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Works />
        <Workshops />
        <Contact />
      </main>
    </>
  )
}
