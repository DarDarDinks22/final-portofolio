import Frame from "../Atom/Frame";
import Robot from "../Atom/Robot";
import HeroText from "../Molecule/HeroText";

 const Homepage = () =>{
    return(
        <div className="flex justify-center items-center px-24 text-3xl h-screen w-full">
            <Frame/>
            <HeroText/>
            <Robot/>
        </div>
)}

export default Homepage;