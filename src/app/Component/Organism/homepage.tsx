import Frame from "../Atom/Frame";
import Robot from "../Atom/Robot";
import HeroText from "../Molecule/HeroText";

const Homepage = () => {
  return (
    <div className="relative flex gap-2h-screen w-full h-screen bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      <div className="flex justify-center items-center w-1/2">
        <HeroText />
      </div>
      <div className="w-full">
        <Robot />
      </div>
        <Frame />
    </div>
  );
};

export default Homepage;