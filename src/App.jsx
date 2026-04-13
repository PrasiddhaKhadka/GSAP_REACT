import './index.css'
import About from './sections/About'
import Hero from './sections/Hero'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Work from './sections/Work'
import Project from './sections/Project'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Project />
    </main>
  )
}

export default App