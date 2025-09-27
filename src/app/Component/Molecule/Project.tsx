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
    const ghostRef = useRef<HTMLDivElement | null> (null);

    const handleMouseMove = (e: React.MouseEvent) => {
        gsap.to(ghostRef.current, {
            x: e.clientX + 20, 
            y: e.clientY + 20, 
            duration: 0.2, 
            ease: "power3.out"
        });
    };

    const handleMouseEnter = (imgURL : string) => {
        if (ghostRef.current) {
            ghostRef.current.style.backgroundImage = `url(${imgURL})`;
            ghostRef.current.style.opacity = "1";
        }
    }

    const handleMouseLeave = () => {
        if (ghostRef.current) {
            ghostRef.current.style.opacity = "0"
        }
    }

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
            className="relative text-center w-full h-2/4"
            onMouseMove={handleMouseMove}>
            <h1 className="pb-2 text-5xl">Check out my Project!</h1>
            <h2 className="pb-8">Click them to see the source code!</h2>
                <div
                    ref={ghostRef}
                    className="pointer-events-none fixed top-0 left-0 w-64 h-40 z-50 opacity-0 bg-cover bg-center bg-no-repeat rounded-xl border border-white/10 shadow-xl"
                    style={{
                    mixBlendMode: "screen",
                    transition: "opacity 0.2s ease",
                    }}
            />
                <div    className="flex flex-col flex-wrap gap-4 justify-center items-center" 
                        ref={scrollRef}>

                    {ProjectItems.map((project, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => handleMouseEnter(project.imgURL)}
                            onMouseLeave={handleMouseLeave}
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
