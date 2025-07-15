import Frame from "../Atom/Frame";
import Robot from "../Atom/Robot";
import HeroText from "../Molecule/HeroText";

 const Homepage = () =>{
    return(
        <div className="flex justify-center items-center px-24 text-3xl h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-black]">
            <Frame/>
            <HeroText/>
            <Robot/>
        </div>
)}

export default Homepage;