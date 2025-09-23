import Frame from "../Atom/Frame";
import Robot from "../Atom/Robot";
import HeroText from "../Molecule/HeroText";

 const Homepage = () =>{
    return(
        <section id="home" className="">
            <div className="flex h-screen w-full">
                <div className="flex justify-center items-center flex-1">
                    <HeroText />
                </div>
                <div className="hidden lg:flex lg:flex-1 flex justify-center items-center mt-16">
                    <Robot />
                </div>
                    <Frame />
            </div>
        </section>
)}

export default Homepage;
