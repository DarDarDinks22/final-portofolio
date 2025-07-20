import { TechItem } from "../Atom/TechListItem";
import {ScrollTrigger} from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const TechList = () => {

    const gsapScrollTrigger = () =>{
        const scrollRef = useRef();

        useGSAP (() => {

        },[])
    }

    return (
        <section>
            <div className="">
                What I use
                {TechItem.map((tech, index) => (
                    <div    key={index}
                            className="text-9xl">
                                {tech}
                    </div>
                ))}
            </div>
        </section>
    )
};

export default TechList;