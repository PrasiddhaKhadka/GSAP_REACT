import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'   // ✅ single Card component
import ProjectTitle from '../components/ProjectTitle'
import Card from '../components/ProjectCard'
// gsap.registerPlugin(ScrollTrigger)             // ✅ uncommented

const cards = [
  { title: "Card One",   description: "First project",  color: "bg-red-500"   },
  { title: "Card Two",   description: "Second project", color: "bg-blue-500"  },
  { title: "Card Three", description: "Third project",  color: "bg-green-500" },
  { title: "Card Four",  description: "Fourth project", color: "bg-purple-500"},
]

const Project = () => {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useGSAP(() => {
    const track = trackRef.current
    const section = sectionRef.current

    const totalScroll = track.scrollWidth - window.innerWidth

    gsap.to(track, {
      x: -totalScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalScroll}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })
  }, [])

  return (
    <section ref={sectionRef} className="overflow-hidden w-screen h-screen">
      <div
        ref={trackRef}
        className="flex h-full"
        style={{ width: 'max-content' }}
      >
        {/* Title panel */}
        <div className="flex-shrink-0 w-screen h-screen flex items-center justify-center">
          <ProjectTitle />
        </div>

        {/* ✅ Each card is its own full-screen panel, no extra wrapper */}
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-screen h-screen flex items-center justify-center bg-gray-900"
          >
            <Card {...card} />
          </div>
        ))}

      </div>
    </section>
  )
}

export default Project