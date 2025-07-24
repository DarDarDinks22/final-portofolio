import { TechItem, techColorMap, techLinks } from "../Atom/TechListItem";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image";

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
      <div className="w-full h-dvh p-10 flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-4xl pb-10">What I use....</h2>
        <div ref={scrollRef} className="flex flex-col items-center gap-8">
          {TechItem.map((tech, index) => {
            const colorClass = techColorMap[tech];

              return (
                <div
                  key={`${tech}-${index}`}
                  className="tech-item text-9xl uppercase whitespace-nowrap flex items-center justify-center w-full"
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
        <div className="flex flex-col w-full p-10">
            <div className="text-center pb-10">Other technologies that i use...</div>
            <div className="flex flex-row justify-evenly">
              {techLinks.map((links, index) => {
                return (
                <div 
                  className="w-[128px] h-[128px] relative"
                  key={`${links}-${index}`}>
                  <Image
                  className="object-contain"
                    src={links}
                    alt="aaa"
                    fill
                    />
                </div>
                )
              })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default TechList;