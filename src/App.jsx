import './index.css'
import About from './sections/About'
import Hero from './sections/Hero'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Work from './sections/Work'
import Project from './sections/Project'
import Learn from './sections/learn'
import VideoScroll from './sections/Video'
import { CallBackApp } from './callbacks/callbacks'
import TodoScreen from './hooks/todo_screen'
import LucidApp from './lucid/lucid'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main>
      {/* <CallBackApp /> */}
      {/* <Hero />
      <About />
      <Work /> */}
      {/* <Project /> */}
      {/* <Learn />
      <VideoScroll />
      <div className='h-dvh w-dvw'></div> */}


      {/* <TodoScreen /> */}

      <LucidApp />
    </main>
  )
}

export default App