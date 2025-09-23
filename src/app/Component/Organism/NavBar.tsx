import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";



const NavBar = () => {

  const navRef = useRef<HTMLDivElement | null>(null);

  useGSAP (()=> {

    if (!navRef.current) return;
    
    gsap.fromTo ( navRef.current, 
      {y:-100, opacity:0} , 
      { y: 0, 
        opacity:1,
        duration:1,
        ease: "power3.out",
      }
    )
  },[])

  return (
    <div className="flex justify-evenly p-4 text-large fixed top-0 font-semibold z-50 w-full"
          ref={navRef}>
      <a href="#home">HOME</a>
      <a href="#project">PROJECT</a>
      <a href="#about">ABOUT</a>
      <a href="#contact">CONTACT</a>
    </div>
  );
};

export default NavBar;
