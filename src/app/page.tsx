"use client"

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavBar from "./Component/Organism/NavBar";
import { Tektur } from "next/font/google";
import Homepage from "./Component/Organism/Homepage";
import Project from "./Component/Molecule/Project";
import About from "./Component/Molecule/About";
import TechList from "./Component/Molecule/TechList";
import Contact from "./Component/Molecule/Contact";
config.autoAddCss = false;

const tektur = Tektur({subsets: ["latin"]})

const Home = () => {
  return (
    <div className={`${tektur.className} h-90vw w-full overflow-visible bg-black flex flex-col gap-[15vw]`}>
        <NavBar/>
        <Homepage/>
        <TechList/>
        <Project/>
        <About/>
        <Contact/>
    </div>
  );
}

export default Home;