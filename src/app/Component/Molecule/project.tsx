import Card from "./Card";
import ProjectItems from "./ItemsArray/ProjectsItems";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {

    const scrollRef = useRef<HTMLDivElement | null> (null);
    const itemRefs = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        itemRefs.current.forEach((el) => {
            if(!el) return;

            gsap.fromTo(
                el, {
                    y:100, 
                    opacity: 0, 
                }, 
                {
                    y:0, 
                    opacity:1, 
                    duration:0.8, 
                    ease: "power2.out", 
                    scrollTrigger: {
                        trigger: el, 
                        start: "top 80%", 
                        end: "bottom center", 
                        toggleActions: "play none none reverse"
                    }, 
                }
            )
        })
    },[])

    return(
    <div className="text-center w-full h-2/4">
        <p className="pb-8 text-5xl">Check out my Project!</p>
        <div    className="flex flex-wrap gap-4 justify-center"
                ref={scrollRef}>
            {ProjectItems.map((project, index) => (
                <Card 
                    key={index}
                    link={project.link}
                    imgURL={project.imgURL}
                    altName={project.altName}
                    title={project.title}
                    desc={project.desc}
                    ref = {(el) => {
                        if (el) itemRefs.current[index] = el ;
                    }}
            />
            ))}
        </div>
    </div>
    )
}

export default Project