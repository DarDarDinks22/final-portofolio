import Dice from "../Img/Dice.jpg";
import Me from "../Img/Me.jpg";
import Image from "next/image";
import WireBox from "../Atom/WireBox";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useMemo } from 'react';

const About = () => {

    return (
        <section className="relative min-h-screen w-full overflow-hidden text-[#7a7a7a]" id="about">
            <Image  
                src={Dice}
                alt="My DND Dice!"
                width={256}
                height={256}
                className="absolute top-16 left-8 rounded-xl drop-shadow-[0_0_3px_#39FF14] z-10"
                priority
            />
            <Image  
                src={Me}
                alt="Portrait of me"
                width={256}
                height={256}
                className="absolute bottom-16 right-8 rounded-xl drop-shadow-[0_0_3px_#39FF14] z-10"
                priority
            />

            {/* Text Content */}
            <div className="relative z-20 text-2xl max-w-4xl mx-auto p-24">
                <p>Hi, you can call me <span className="text-white underline">Darren!</span></p>
                <p className="py-4">
                    I've had a bit of a zigzag career path—from running the show as a <span className="text-white underline">front desk manager</span>, 
                    to sweating it out in kitchens as a <span className="text-white underline">cook</span>, 
                    and now diving headfirst into <span className="text-white underline">web development</span>. 
                    Turns out, I just love making stuff, whether it's a great user experience, a killer plate of pasta, or a weird little resin dungeons and dragon dice.
                </p>
                <p className="pb-4">
                    Coding scratches that same itch for me: mixing creativity with problem-solving, and (usually) ending up with something cool. 
                    When I'm not glued to my computer, I'll probably be trying to make a new dish or trying out a new restaurant. I also recently got into 3D modeling.
                </p>
                <p className="pb-4">
                    I'm all about the messy, rewarding process of building things <span className="text-white underline decoration-dashed">soo let us build stuff together!</span> 
                </p>     
            </div>
        </section>
    )
}

export default About;