import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/all";
import { expItems, techExpItems } from "./ItemsArray/ExpItem";

gsap.registerPlugin(ScrollTrigger);


const Experience = () => {

    const [isTech,setIsTech] = useState(true);
    
    const scrollRef = useRef<HTMLDivElement | null>(null);

    return (
        <div ref={scrollRef}
            className="">
            {/* toggle button */}
            <button className=""
                    onClick={() => setIsTech(true)}>
                        Tech Experience
            </button>
            <button className=""
                    onClick={() => setIsTech(false)}>
                        Non-Tech Experience
            </button>
            {/* conditional rendering */}
            <div className="flex">
                {isTech ? techExpItems.map((techExp,index)=>(
                <div>
                    <div className=""
                        key={`tech-${index}`}>
                            Tech Experience
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
                <div>
                    <div className=""
                        key={`nonTech-${index}`}>
                            Non-Tech Experience
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
    )
}

export default Experience;