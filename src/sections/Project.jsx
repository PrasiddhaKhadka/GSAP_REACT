import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const projects = [
  { title: 'Project One', desc: 'React + GSAP animation showcase', bg: '#111' },
  { title: 'Project Two', desc: 'Interactive 3D landing page', bg: '#0a0a1a' },
  { title: 'Project Three', desc: 'Scroll-driven storytelling', bg: '#0a1a0a' },
  { title: 'Project Four', desc: 'E-commerce micro animations', bg: '#1a0a0a' },
]

function Project() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  const headerRef = useRef(null)

  useGSAP(() => {
    gsap.from(headerRef.current, {
        opacity: 0,
        y: 60,
        duration: 2,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger:{
            trigger: headerRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
        }
    })
  },[])

  return (
    <section>
        <h1 
        ref={headerRef}
        style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '60px',
            textAlign:'center'
        }}>Projects</h1>
    </section>
  )
}

export default Project