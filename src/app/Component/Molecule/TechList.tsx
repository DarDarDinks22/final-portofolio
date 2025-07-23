import { TechItem } from "../Atom/TechListItem";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const TechList = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!scrollRef.current) return;

    const techNames = gsap.utils.toArray<HTMLElement>(
      scrollRef.current.querySelectorAll(".tech-item")
    );

    techNames.forEach((techName, index) => {
      const fromX = index % 2 === 0 ? "-100vw" : "100vw";

      gsap.fromTo(
        techName,
        { x: fromX, opacity: 0 },
        {
          x: "0vw",
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: techName,
            start: "top bottom",
            end: "top center", 
            scrub: true, 
            markers: false, 
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);

  return (
    <section>
      <div className="w-full h-dvh p-10 flex items-center justify-center">
        <h2 className="text-4xl">What I use....</h2>
        <div ref={scrollRef} className="flex flex-col items-center">
          {TechItem.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="tech-item text-9xl uppercase"
            >
              {tech}{tech}{tech}{tech}{tech}{tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechList;