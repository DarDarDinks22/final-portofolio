import { TechItem } from "../Atom/TechListItem";
import {ScrollTrigger} from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const TechList = () => {

    const scrollRef = useRef<HTMLDivElement | null> (null);

    useGSAP (() => {
        if (!scrollRef.current) return; //TO DO ADD FALLBACK UI IF ITS NULL

        const techNames = gsap.utils.toArray<HTMLElement>(scrollRef.current.children);

        techNames.forEach((techName) => {
            gsap.to(techName, {
                //TO DO START ADDING ANIMATION TONIGHT
            })
        })
    },[])

    return (
        <section>
            <div className="">
                What I use
                {TechItem.map((tech, index) => (
                    <div    key={index}
                            className="text-9xl"
                            id="Tech"
                            ref={scrollRef}>
                                {tech}
                    </div>
                ))}
            </div>
        </section>
    )
};

export default TechList;