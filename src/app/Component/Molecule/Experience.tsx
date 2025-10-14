import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/all";
import { expItems } from "./ItemsArray/ExpItem";


gsap.registerPlugin(ScrollTrigger);


const Experience = () => {

    
    const scrollRef = useRef<HTMLDivElement | null>(null);

    
    useGSAP (() => {
        gsap.fromTo (scrollRef.current, {
            x: 100, 
            opacity:0
        }, 
        {
            x:0, 
            opacity:1, 
            duration: 1, 
            ease:"power4.inOut", 
                scrollTrigger: {
                        trigger: scrollRef.current, 
                        start: "top 80%", 
                        end: "bottom center", 
                        toggleActions: "play none none reverse"
                    }, 
        })
    }
    ,[])

    return (
        <div ref={scrollRef}
            className="w-full h-full flex flex-col items-center md:px-2">
            <div className="text-3xl pb-4 md:text-7xl flex">My Experience</div>
            {/*Timeline*/}
            <div className="">
                {expItems.map ((exp, index) => {
                    const odd = index % 2 === 0;
                    return(
                    <div className={`flex h-40 w-full items-center relative ${odd ? "translateX-[-17em]":""}`} 
                        key= {`exp-${index}`}>
                    <div className="line absolute top-0 bottom-0 w-[0.2rem] bg-white ">
                        <div className="text-xs w-[10rem] md:w-screen text-base px-4 ">
                            <p className="text-sm md:text-lg">{exp.jobTitle}</p>
                            <p className="text-slate-500">{exp.place}</p>
                            <p className="text-slate-500">{exp.date}</p>
                        </div>
                    </div>
                    <div className="rounded bg-indigo-600 w-3 h-3 border-2 border-white"/>
                </div>
                )})}
                
            </div>
        </div>      
    )
}

export default Experience;
