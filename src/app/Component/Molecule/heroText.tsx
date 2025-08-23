import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Ball from "../Atom/WireBox";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const HeroText = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const previousTimeStamp = useRef<number>(0); 
  const elapsedSeconds = useRef<number>(0); 
  const secondsPerCharacterReveal = 0.1;
  const hiddenText = 'Darren Jonathan';
  const requestRef = useRef<number | null>(null);

  const animationLoop = (currentTimestamp: number) => {
    if (!previousTimeStamp.current) previousTimeStamp.current = currentTimestamp;
      const secondsSinceLastFrame = (currentTimestamp - previousTimeStamp.current) / 750;
      previousTimeStamp.current = currentTimestamp;

      elapsedSeconds.current += secondsSinceLastFrame;

      const charactersToReveal = Math.floor(elapsedSeconds.current / secondsPerCharacterReveal);

      let animatedText = '';

    for (let i = 0; i < hiddenText.length; i++) {
      let character = '';

      if (i < charactersToReveal) {
        character = hiddenText[i];
      } else if (hiddenText[i] === ' ') {
        character = ' '; 
      } else {
        character = alphabet[Math.floor(Math.random() * alphabet.length)];
      }

      animatedText += character;
    }

    if (h1Ref.current) {
      h1Ref.current.innerText = animatedText;
    }

    if (charactersToReveal < hiddenText.length) {
      requestRef.current = requestAnimationFrame(animationLoop);
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animationLoop);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    
    <h1 className="text-2xl md:tracking-widest font-extrabold text-center text-2xl">
        <p>Hi, My name is</p> 
        <p>
          <span ref={h1Ref} className="text-3xl md:text-7xl drop-shadow-[0_0_20px_#0ff] animate-pulse"></span> 
        </p>
        <p>and im a Web Developer</p>
        <p className="md:text-xl font-thin text-[#c0fffe] underline">Come check me out!</p>
    </h1>
  );
};

export default HeroText;