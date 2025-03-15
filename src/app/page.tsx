"use client"

import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavBar from "./Component/Organism/navbar";
import Shapes from "./Component/Atom/shapes";
import { Tektur } from "next/font/google";
import Homepage from "./Component/Organism/homepage";
config.autoAddCss = false;

const tektur = Tektur({subsets: ["latin"]})

export default function Home() {
  return (
    <>
    <div className={`${tektur.className} h-full w-full bg-black`}>
        <NavBar/>
        <Homepage/>
    </div>
    </>
  );
}
