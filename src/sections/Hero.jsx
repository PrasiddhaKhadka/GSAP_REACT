import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Hero() {
  const headingRef = useRef(null)
  const subheadingRef = useRef(null)
  const buttonRef = useRef(null)

  useGSAP(() => {
    // gsap.from = start from these values, animate TO current state
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power3.out',
      repeat: 0,
      yoyo: true 
    })

    // delay: 0.2 means this starts 0.2s AFTER the heading starts
    gsap.from(subheadingRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out',
      repeat:0,
      yoyo: true
    })

    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.4,
      ease: 'power3.out'
    })
  }, [])

  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <h1 ref={headingRef} style={{ fontSize: '4rem', fontWeight: '700' }}>
        Hello, I'm a Creative Developer
      </h1>

      <p ref={subheadingRef} style={{ fontSize: '1.2rem', color: '#888', maxWidth: '500px' }}>
        I build interactive web experiences with GSAP, React, and a lot of caffeine.
      </p>

      <button ref={buttonRef} style={{
        marginTop: '10px',
        padding: '14px 32px',
        background: 'white',
        color: 'black',
        border: 'none',
        borderRadius: '999px',
        fontSize: '1rem',
        cursor: 'pointer',
        fontWeight: '600'
      }}>
        View My Work
      </button>
    </section>
  )
}

export default Hero