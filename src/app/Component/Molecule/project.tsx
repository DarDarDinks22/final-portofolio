import Link from "next/link"
import Image from "next/image"
import { projectPropTypes } from "./MoleculePropTypes/projectPropTypes"

 const Project: React.FC<projectPropTypes> = ({
    children,
    link,
    altName,
    imgURL, 

}) =>{
    return (
    <Link href={link ?? "/"}>
        <div className="">
            <Image 
                src={imgURL}
                alt={altName}
                    />
            <div className="">
                <div className="">
                    {children}
                </div>
                <div className="">
                    {children}
                </div>
            </div>
        </div>
    </Link>
    )
};

export default Project;