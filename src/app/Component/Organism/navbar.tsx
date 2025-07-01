
import { faGithubSquare, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import Icon from "../Atom/icon";
import Link from "next/link";


const NavBar = () =>{
    return (
    <div className="flex justify-evenly m-auto p-4 text-xl sticky top-0 bg-[#1A1E4D] font-semibold">
        <Link href={"/"}>HOME</Link>
        <Link href={"/"}>ABOUT</Link>
        <Link href={"/"}>PROJECT</Link>
        <Link href={"/"}>CONTACT</Link>
    </div>
)}

export default NavBar;