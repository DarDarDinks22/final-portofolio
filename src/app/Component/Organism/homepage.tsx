import Robot from "../Atom/Robot";
import HeroText from "../Molecule/heroText";

 const Homepage = () =>{
    return(
    <div>
        <div className="flex justify-center items-center px-24 text-3xl h-screen w-full">
            <HeroText/>
            <Robot/>
        </div>
    </div>
)}

export default Homepage;