import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/all";
import { expItems, techExpItems } from "./ItemsArray/ExpItem";

gsap.registerPlugin(ScrollTrigger);


const Experience = () => {

    const [isTech,setIsTech] = useState(true);
    
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
            {/* toggle button */}
            <div className="text-3xl pb-4 md:text-7xl flex">My Experience</div>
            <div className="px-4">
                <button className={`text-2xl mr-4 mb-4 px-4 transition-colors duration-300 ease-in-out rounded w-full
                                    ${ isTech ? "bg-blue-600" : "bg-slate-900"}
                                    md:text-4xl`}
                    onClick={() => setIsTech(true)}>
                        Tech Experience
                </button>
                <button className={`text-2xl mb-4 px-4 transition-colors duration-300 ease-in-out rounded w-full
                                    ${ isTech ? "bg-slate-900" : "bg-blue-600"} 
                                    md:text-4xl`}
                        onClick={() => setIsTech(false)}>
                            Non-Tech Experience
                </button>
            <div className="text-left max-w-2xl ">
                {isTech ? techExpItems.map((techExp,index)=>(
                <div key={`tech-${index}`}>
                    <div className="p-2">
                            placeholder
                            <div className="">
                                <div className="">
                                    <p>{techExp.jobTitle}</p>
                                    <p>{techExp.place}</p>
                                    <p>{techExp.date}</p>
                                </div>
                            </div>
                    </div>
                </div>
                ))
                : expItems.map((exp, index)=>(
                <div key={`nonTech-${index}`}>
                    <div className="p-2">
                            placeholder2
                            <div className="">
                                <div className="">
                                    <p>{exp.jobTitle}</p>
                                    <p>{exp.place}</p>
                                    <p>{exp.date}</p>
                                </div>
                            </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
            
            {/* conditional rendering */}
            
        </div>
    )
}

export default Experience;
