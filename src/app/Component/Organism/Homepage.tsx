import { useRef } from "react";
import Frame from "../Atom/Frame";
import Robot from "../Atom/Robot";
import HeroText from "../Molecule/HeroText";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);



 const Homepage = () =>{
    const homeRef = useRef<HTMLDivElement | null> (null);

    useGSAP(() => {

        if (!homeRef.current) return;

        gsap.fromTo(homeRef.current, 
            {y:-100, opacity:0},
            {y:0, 
            opacity:1, 
            duration:1, 
            ease: "power2.out",
            scrollTrigger:{
                trigger: homeRef.current, 
                start: "top 85%", 
                end: "bottom 80% ",
                toggleActions: "play reverse play reverse",
                }}  
        )
    })
    
    return(
        <section id="home" className="" ref={homeRef}>
            <div className="flex h-screen w-screen">
                <div className="flex justify-center items-center flex-1">
                    <HeroText />
                </div>
                <div className="hidden lg:flex lg:flex-1 flex justify-center items-center mt-16">
                    <Robot />
                </div>
                    <Frame />
            </div>
        </section>
)}

export default Homepage;
