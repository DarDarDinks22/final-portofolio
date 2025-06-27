import { useRef, useEffect } from "react";

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
    const secondsSinceLastFrame = (currentTimestamp - previousTimeStamp.current) / 1000;
    previousTimeStamp.current = currentTimestamp;

    elapsedSeconds.current += secondsSinceLastFrame;

    const charactersToReveal = Math.floor(elapsedSeconds.current / secondsPerCharacterReveal);

    let animatedText = '';

    for (let i = 0; i < hiddenText.length; i++) {
      let character = '';

      if (i < charactersToReveal) {
        character = hiddenText[i];
      } else if (hiddenText[i] === ' ') {
        character = ' '; // preserve spaces
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
    <h1>
        Hi, My name is <span ref={h1Ref}></span> and im a Web Developer
    </h1>
  );
};

export default HeroText;