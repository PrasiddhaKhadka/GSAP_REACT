import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ProjectTitle from "../components/ProjectTitle";
import Card from "../components/ProjectCard";

const cards = [
  { title: "Card One", description: "First project", color: "bg-red-500" },
  { title: "Card Two", description: "Second project", color: "bg-blue-500" },
  { title: "Card Three", description: "Third project", color: "bg-green-500" },
  { title: "Card Four", description: "Fourth project", color: "bg-purple-500" },
  { title: "Card Four", description: "Fourth project", color: "bg-purple-500" },
  { title: "Card Four", description: "Fourth project", color: "bg-purple-500" },
  { title: "Card Four", description: "Fourth project", color: "bg-purple-500" },
];

const Learn = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    const section = sectionRef.current;

    // track.scrollWidth ->  how wide ALL your content is (eg: 5000)
    // window.innerWidth ->  how wide the screen is.  (eg: 1440)
    // 5000 - 1440 = 3560px → that's how far we need to slide the content left so the last card reaches the screen.
    const totalScroll = track.scrollWidth - window.innerWidth;
    console.log(totalScroll);

    gsap.to(track, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden w-screen h-screen">
      <div
        ref={trackRef}
        className="flex h-full"
        style={{ width: "max-content" }}
      >
        {/* Title panel — 2/3 of viewport */}
        <div className="shrink-0 w-[66vw] h-screen flex justify-center items-center">
          <ProjectTitle />
        </div>

        {cards.map((data, index) => (
          <div
            key={index}
            className={`shrink-0 w-[66vw] h-screen flex items-center justify-center ${index % 2 === 0 ? "bg-gray-800" : "bg-white"}`}
          >
            <Card
              title={data.title}
              color={data.color}
              description={data.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Learn;
