import Dice from "../Img/Dice.jpg";
import Me from "../Img/Me.jpg";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    
      const aboutRef = useRef<HTMLDivElement | null>(null);
    
      useGSAP (()=> {
    
        if (!aboutRef.current) return;
        
        gsap.fromTo ( aboutRef.current, 
          {y:-100, opacity:0} , 
          { y: 0, 
            opacity:1,
            duration:1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: aboutRef.current, 
              start: "top center", 
              toggleActions: "play none none reverse"
            }
          }
        )
      },[])

    return (
        <section className="relative min-h-screen w-full text-[#7a7a7a]" id="about"
                ref={aboutRef}>
            <Image  
                src={Dice}
                alt="My DND Dice!"
                width={256}
                height={256}
                loading="lazy"
                className="hidden md:block absolute top-16 left-8 rounded-xl drop-shadow-[0_0_3px_#39FF14] z-10"
            />
            <Image  
                src={Me}
                alt="Portrait of me"
                width={256}
                height={256}
                loading="lazy"
                className="hidden md:block absolute bottom-16 right-8 rounded-xl drop-shadow-[0_0_3px_#39FF14] z-10"
            />

            {/* Text Content */}
            <div className="relative z-20 max-w-4xl mx-auto px-4 py-24 md:py-24 text-2xl">
              <div className="text-4xl pb-4 text-white md:text-7xl">About Me</div>
                <p>Hi, you can call me <span className="text-white underline">Darren!</span></p>
                <p className="py-4">
                    I&apos;ve had a bit of a zigzag career path—from running the show as a <span className="text-white underline">front desk agent</span>, 
                    to sweating it out in kitchens as a <span className="text-white underline">cook</span>, 
                    and now diving headfirst into <span className="text-white underline">web development</span>. 
                    Turns out, I just love making stuff, whether its a great user experience, a killer plate of pasta, or a weird little resin dungeons and dragon dice.
                </p>
                <p className="pb-4">
                    Coding scratches that same itch for me: mixing creativity with problem-solving, and (usually) ending up with something cool. 
                    When I&apos;m not glued to my computer, I&apos;ll probably be trying to make a new dish or trying out a new restaurant. I also recently got into 
                    <span className="text-white underline"> 3D modeling</span>.
                </p>
                <p className="pb-4">
                    I&apos;m all about the messy, rewarding process of building things 
                    <span className="text-white underline decoration-dashed"> soo let us build stuff together!</span> 
                </p>     
            </div>
        </section>
    )
}

export default About;
