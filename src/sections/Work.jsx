import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

function Work() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  useGSAP(() => {
    // Pin the title while cards animate in
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',        // when section top hits viewport top
      end: '+=500',            // pin for 500px of scroll distance
      pin: titleRef.current,   // THIS element gets pinned
      markers: true,
    })

    // Cards animate in with scrub while title is pinned
    gsap.from(cardsRef.current.children, {
      opacity: 0,
      y: 100,
      stagger: 0.2,            // each child animates 0.2s after the previous
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 70%',
        end: 'top 20%',
        scrub: 1,
        markers: true,
      }
    })
  }, [])

  return (
    <section ref={sectionRef} style={{
      minHeight: '100vh',
      padding: '100px 20px',
      maxWidth: '900px',
      margin: '0 auto',
    }}>

      {/* This title will get pinned */}
      <h2 ref={titleRef} style={{
        fontSize: '3rem',
        fontWeight: '700',
        marginBottom: '60px',
        textAlign: 'center'
      }}>
        My Work
      </h2>

      {/* These cards animate in while title is pinned */}
      <div ref={cardsRef} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>
        {['Project One', 'Project Two', 'Project Three'].map((project, i) => (
          <div key={i} style={{
            background: '#111',
            border: '1px solid #222',
            borderRadius: '12px',
            padding: '40px',
            fontSize: '1.2rem',
            fontWeight: '600'
          }}>
            {project}
          </div>
        ))}
      </div>

    </section>
  )
}

export default Work