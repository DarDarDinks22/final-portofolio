import { TechItem, techColorMap, techLinks } from "./ItemsArray/TechListItem";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const TechList = () => {
  const horizontalRef = useRef<HTMLDivElement | null>(null);
  const verticalRef = useRef<HTMLDivElement | null>(null);

  const itemRefs = useRef<HTMLElement[]>([]);
  const techLinksRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    itemRefs.current.forEach((techName, index) => {
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

      techLinksRef.current.forEach((itemLinks) => {
      if (!itemLinks) return;
      gsap.fromTo(
        itemLinks,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: itemLinks,
            start: "top 80%",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
}, {scope: horizontalRef});



  return (
    <section className="overflow-x-hidden">
      <div className="w-full p-10 flex flex-col items-center justify-center">
        <h2 className="text-4xl pb-10">What I use....</h2>
        {/* Horizontal TechLinks */}
        <div 
            ref={horizontalRef} 
            className="flex flex-col items-center gap-8">
          {TechItem.map((tech, index) => {
            const colorClass = techColorMap[tech];

            return (
              <div
                key={`${tech}-${index}`}
                ref={(el) => {
                  if (el) itemRefs.current[index] = el;
                }}
                className="tech-item text-6xl uppercase whitespace-nowrap flex items-center justify-center w-full md:text-9xl"
              >
                <span className="text-gray-500 opacity-20 blur-[0.3px]">
                  {Array(10).fill(tech).join(" ")}
                </span>

                <span className={`${colorClass} mx-8 font-bold drop-shadow`}>
                  {tech}
                </span>

                <span className="text-gray-500 opacity-20 blur-[0.3px]">
                  {Array(10).fill(tech).join(" ")}
                </span>
              </div>
            );
          })}
        </div>
          {/* Vertical TechList */}
        <div 
              className="flex flex-col w-full md:p-10"
              ref={verticalRef}>
          <div className="text-center pb-10">Other technologies that I use...</div>
          <div className="flex flex-row justify-evenly flex-wrap">
            {techLinks.map((links, index) => {
              return (
                <div  className="w-[5rem] h-[5rem] relative flex-shrink-0 m-2 md:w-[10rem] h-[10rem]" 
                      style={{ animationName: "scroll" }}
                      key={`${links}-${index}`}
                      ref={(el) => {
                            if (el) techLinksRef.current[index] = el;
                          }}>
                  <Image
                    className="object-contain"
                    src={links}
                    alt="technology"
                    fill
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechList;
