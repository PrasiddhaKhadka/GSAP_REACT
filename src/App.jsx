import './index.css'
import About from './sections/About'
import Hero from './sections/Hero'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  )
}

export default App