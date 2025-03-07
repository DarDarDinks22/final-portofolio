"use client"

import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavBar from "./Component/Organism/navbar";
import Shapes from "./Component/Atom/shapes";
config.autoAddCss = false;

export default function Home() {
  return (
    <>
    <div className="h-screen w-full">
      <Shapes/>
    </div>
    <div>asfhoashdoiasu</div>
    </>
  );
}
