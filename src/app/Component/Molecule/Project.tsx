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
    },{scope: scrollRef})

    return(
    <section id="project">
        <div 
            className="relative text-center w-full h-2/4">
            <h1 className="pb-2 text-5xl">Check out my Project!</h1>
            <h2 className="pb-8">Click them to see the source code!</h2>
                <div    className="flex  flex-wrap gap-4 justify-center items-center" 
                        ref={scrollRef}>

                    {ProjectItems.map((project, index) => (
                        <div
                            key={index}
                        >
                        <Card 
                            key={index}
                            link={project.link}
                            imgURL={project.imgURL}
                            altName={project.altName}
                            title={project.title}
                            desc={project.desc}
                            tech={project.tech}
                            ref = {(el) => {
                                if (el) itemRefs.current[index] = el ;
                            }}
                    />
                    </div>
                    ))}
                </div>
        </div>
    </section>
    )
}

export default Project
