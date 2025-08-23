import Frame from "../Atom/Frame";
import Robot from "../Atom/Robot";
import HeroText from "../Molecule/HeroText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

 const Homepage = () =>{
    return(
        <section id="home" className="bg-neutral-950">
            <div className="flex h-screen w-full">
                <div className="flex justify-center items-center flex-1">
                    <HeroText />
                </div>
                <div className="hidden md:flex md:flex-1 flex justify-center items-center mt-16">
                    <Robot />
                </div>
                    <Frame />
            </div>
        </section>
)}

export default Homepage;