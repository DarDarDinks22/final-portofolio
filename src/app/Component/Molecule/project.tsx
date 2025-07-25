import Link from "next/link"
import Image from "next/image"
import { projectPropTypes } from "./MoleculePropTypes/projectPropTypes"

 const Project: React.FC<projectPropTypes> = ({
    children,
    link,
    altName,
    imgURL, 

}) =>{
    <Link href={link}>
        <div className="">
            <Image 
                src=""
                alt=""
                    />
            <div className="">
                <div className="">
                    Hello im the title
                </div>
                <div className="">
                    Hello im the tech used
                </div>
            </div>
        </div>
    </Link>
}

export default Project;