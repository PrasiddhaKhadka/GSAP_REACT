import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function About() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const textRef = useRef(null)
  const boxRef = useRef(null)


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

    gsap.to(boxRef.current, {
        x: 400,
        rotation: 360,
        ease: 'none',
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 1,       // ties animation progress to scroll position
          markers: true,
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
      <div ref={boxRef} style={{
        width: '80px',
        height: '80px',
        background: 'white',
        borderRadius: '8px',
        marginTop: '60px'
      }} />
    </section>
  )
}

export default About