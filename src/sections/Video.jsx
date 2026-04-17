import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const VideoScroll = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const video = videoRef.current;

    // Ensure metadata is loaded to get the correct duration
    video.onloadedmetadata = () => {
      gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000", // Adjust scroll distance
          scrub: true,   // Sync animation with scroll bar
          pin: true,     // Keep video fixed while scrolling
        },
      });
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ height: "100vh" }}>
      <video ref={videoRef} src="/your-video.mp4" muted playsInline />
    </div>
  );
};


export default VideoScroll