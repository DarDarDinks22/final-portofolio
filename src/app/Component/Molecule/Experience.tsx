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
            className="w-full h-full px-24 flex flex-col items-center ">
            {/* toggle button */}
            <div className="text-7xl pb-4">My Experience</div>
            <div>
                <button className={`text-3xl mr-4 mb-4 px-4 transition-colors duration-300 ease-in-out rounded
                                    ${ isTech ? "bg-blue-600" : "bg-slate-900"}`}
                    onClick={() => setIsTech(true)}>
                        Tech Experience
                </button>
                <button className={`text-3xl mb-4 px-4 transition-colors duration-300 ease-in-out rounded
                                    ${ isTech ? "bg-slate-900" : "bg-blue-600"}`}
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