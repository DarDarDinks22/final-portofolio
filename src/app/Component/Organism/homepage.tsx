import Shapes from "../Atom/shapes"
import { Holo } from "../Atom/holo";
import HeroText from "../Molecule/heroText";

 const Homepage = () =>{
    return(
    <div className="">
        <Shapes/>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
        <HeroText/>
        </div>
    </div>
)}

export default Homepage;