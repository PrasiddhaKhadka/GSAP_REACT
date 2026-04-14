import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";


const ProjectTitle = () => {

    const headingRef = useRef(null);
    const boxRef = useRef(null)

    useGSAP(()=>{
        const titleHeading = SplitText.create(headingRef.current,{
            type:'words'
        });

        gsap.from(titleHeading.words,{
            // opacity:0,
            // yPercent:30,
            duration:0.3,
            ease: "power1.inOut",
            stagger:0.02,
            scrollTrigger:{
                trigger:boxRef.current,
                start:'top 80%',
                end:'top 10%',
                scrub:true,
                markers:true
            }
        })

    },[])
  return (
    <div  ref={boxRef} className="projectTitle flex flex-col items-center justify-center h-full">
        
      <h1 ref={headingRef} className="font-semibold text-8xl">Projection Section</h1>         
      <p className="projectTitle-p">
        you're using class instead of className, and also your layout width
        (600%) won’t show effects unless the parent has proper height/overflow
        context.
      </p>
    </div>
  );
};

export default ProjectTitle;
