import Card from "./Card";
import ProjectItems from "../Atom/Projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {

    const scrollRef = useRef<HTMLDivElement | null> (null);

    useGSAP(() => {
        ProjectItems.forEach((project, index) => {

        })
    },[])

    return(
    <div className="">
        {ProjectItems.map((project, index) => (
            <Card 
                key={index}
                link={project.link}
                imgURL={project.imgURL}
                altName={project.altName}
                title={project.title}
                desc={project.desc}
        />
        ))}
    </div>
    )
}

export default Project