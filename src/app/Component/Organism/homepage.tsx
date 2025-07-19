import Frame from "../Atom/Frame";
import Robot from "../Atom/Robot";
import HeroText from "../Molecule/HeroText";

 const Homepage = () =>{
    return(
        <div className="flex h-dvh w-full bg-gradient-to-b from-black via-zinc-900 to-black -mt-16">
        <div className="flex justify-center items-center flex-1">
            <HeroText />
        </div>
        <div className="flex-1 mt-16">
            <Robot />
        </div>
            <Frame />
        </div>
)}

export default Homepage;