import Shapes from "../Atom/Shapes"
import { Holo } from "../Atom/Holo";
import HeroText from "../Molecule/HeroText";

 const Homepage = () =>{
    return(
    <div>
        <div className="flex justify-center items-center px-24 text-3xl h-screen w-full ">
            <HeroText/>
            <Shapes/>
        </div>
    </div>
)}

export default Homepage;