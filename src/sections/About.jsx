import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function About() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const textRef = useRef(null)

  useGSAP(()=>{

    gsap.from(headingRef.current,{
        opacity:0,
        y:80,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger:{
            trigger:  headingRef.current,
            start: 'top 80%',
            end: 'top 30%', 
            markers: true,
            toggleActions: 'play none none reverse'
        }
    })

    gsap.from(textRef.current,{
        opacity:0,
        y:80,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger:{
            trigger:  textRef.current,
            start: 'top 80%',
            markers: true,
            toggleActions: 'play none none reverse'
        }
    })
  })
  

  return (
    <section ref={sectionRef} style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
      textAlign: 'center'
    }}>
      <h2 ref={headingRef} style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px' }}>
        About Me
      </h2>
      <p ref={textRef} style={{ fontSize: '1.1rem', color: '#888', maxWidth: '600px', lineHeight: '1.8' }}>
        I'm a frontend developer obsessed with creating smooth, 
        meaningful animations that make users stop and say "wow". 
        I use GSAP, React, and creative problem solving to bring 
        interfaces to life.
      </p>
    </section>
  )
}

export default About