
import { faGithubSquare, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import Icon from "../Atom/Icon";
import Link from "next/link";


const NavBar = () => {
  return (
    <div className="flex justify-evenly p-4 text-large sticky top-0 font-semibold z-50">
      <Link href={"/"}>HOME</Link>
      <Link href={"/"}>PROJECT</Link>
      <Link href={"/"}>ABOUT</Link>
      <Link href={"/"}>CONTACT</Link>
    </div>
  );
};

export default NavBar;