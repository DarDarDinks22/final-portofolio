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
        <section id="home">
            <div className="flex h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-black">
                <div className="flex justify-center items-center flex-1">
                    <HeroText />
                </div>
                <div className="flex-1 mt-16">
                    <Robot />
                </div>
                    <Frame />
            </div>
        </section>
)}

export default Homepage;