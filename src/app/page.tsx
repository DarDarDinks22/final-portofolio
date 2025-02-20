import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavBar from "./Component/Organism/navbar";

config.autoAddCss = false;

export default function Home() {
  return (
    <NavBar/>
  );
}
