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
import { Button } from './components/ui/button'
import { ShadCdnUi } from './shadcn/shadcn_page'
import CounterZus from './store/counter_ui'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './store/lib/queryClient'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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

        {/* <LucidApp /> */}

        <ShadCdnUi />

        <CounterZus />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App