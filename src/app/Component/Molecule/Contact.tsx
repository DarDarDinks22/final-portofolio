import Icon from "../Atom/Icon";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

      const contactRef = useRef<HTMLDivElement | null>(null);

        useGSAP (()=> {

            if (!contactRef.current) return;
            
            gsap.fromTo ( contactRef.current, 
            {y:-100, opacity:0} , 
            { y: 0, 
                opacity:1,
                duration:1,
                ease: "power3.out",
                scrollTrigger: {
                trigger: contactRef.current, 
                start: "top top", 
                toggleActions: "play none none reverse"
                }
            }
            )
        },[])

    const phoneNumber = "6281357836633"

    return (
        <section className="w-full h-screen flex justify-center items-center"
                id="contact"
                ref={contactRef}>
            <div className="text-center text-4xl">
                <p className="">Interested? You can contact me here!</p>
                <div className="flex justify-center gap-4 py-4">
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://github.com/DarDarDinks22`}> 
                            <Icon  iconType={faGithub}/>
                    </a>
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://wa.me/${phoneNumber}`}> 
                            <Icon  iconType={faWhatsapp}/>
                    </a>
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://mail.google.com/mail/?view=cm&to=darrenbusiness74@gmail.com&su=SUBJECT&body=BODY`}> 
                            <Icon  iconType={faEnvelope}/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact