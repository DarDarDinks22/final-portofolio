"use client"

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavBar from "./Component/Organism/NavBar";
import { Tektur } from "next/font/google";
import Homepage from "./Component/Organism/homepage";
import Project from "./Component/Molecule/Project";
import About from "./Component/Molecule/About";
import TechList from "./Component/Molecule/TechList";
import Contact from "./Component/Molecule/Contact";
import Experience from "./Component/Molecule/Experience";
config.autoAddCss = false;

const tektur = Tektur({subsets: ["latin"]})

const Home = () => {
  return (
    <main className={`${tektur.className} w-full bg-neutral-950 text-white`}>
      <NavBar />
      <div className="flex flex-col gap-[15vw]">
        <Homepage />
        <TechList />
        <Project />
        <Experience/>
        <About />
        <Contact />
      </div>
    </main>
  );
};

export default Home;