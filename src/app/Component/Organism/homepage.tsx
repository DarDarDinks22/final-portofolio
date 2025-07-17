import Frame from "../Atom/Frame";
import Robot from "../Atom/Robot";
import HeroText from "../Molecule/HeroText";

const Homepage = () => {
  return (
    <div className="relative flex gap-2 h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-black p-8">
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