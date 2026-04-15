import './index.css'
import About from './sections/About'
import Hero from './sections/Hero'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Work from './sections/Work'
import Project from './sections/Project'
import Learn from './sections/learn'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      {/* <Project /> */}
      <Learn />
      <div className='h-dvh w-dvw'></div>
    </main>
  )
}

export default App