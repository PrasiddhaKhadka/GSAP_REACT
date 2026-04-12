import { useEffect, useRef } from 'react'
import gsap from 'gsap'
// import { useGSAP } from '@gsap/react';


function Hero() {
  const headingRef = useRef(null)

    useEffect(()=>{
        gsap.to(headingRef.current, {
            opacity: 1,
            x:200,
            duration: 5, // duration means how long the animation will take to complete
            delay: 1, // delay means will start the animation after 1 second
            ease: 'power2.out',
        })
    },[])

  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 ref={headingRef}>Hello, I'm a Creative Developer</h1>
    </section>
  )
}

export default Hero