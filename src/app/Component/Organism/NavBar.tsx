import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { FaBars, FaTimes, } from "react-icons/fa"



const NavBar = () => {

  const navRef = useRef<HTMLDivElement | null>(null);

  const [open, setIsOpen] = useState(false);

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
  console.log (open)

  return (
    <nav ref={navRef}
        className="fixed z-50">
      <button className="flex flex-col w-[4rem] p-2 fixed z-20 md:hidden"  
              onClick={() => setIsOpen(!open)}
              aria-label="Navigation Bar">
          {open ? <FaTimes size={28}/> : <FaBars size={28} /> }
      </button>
      <div className={`md:flex justify-evenly p-4 text-large sticky top-0 z-10 font-semibold w-screen ${open ? "flex flex-col gap-4 pt-12 bg-zinc-900 text-2xl" : "hidden"}`}>
        <a href="#home">HOME</a>
        <a href="#project">PROJECT</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
  );
};

export default NavBar;
