"use client"

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavBar from "./Component/Organism/NavBar";
import { Tektur } from "next/font/google";
import Homepage from "./Component/Organism/Homepage";
import { Canvas } from "@react-three/fiber";
import Ball from "./Component/Atom/WireBox";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import About from "./Component/Molecule/About";
config.autoAddCss = false;

const tektur = Tektur({subsets: ["latin"]})

const Home = () => {
  return (
    <div className={`${tektur.className} h-90vw w-full overflow-visible bg-[#0d0d0d] m-auto`}>
        <NavBar/>
        <Homepage/>
        <About/>
    </div>
  );
}

export default Home;