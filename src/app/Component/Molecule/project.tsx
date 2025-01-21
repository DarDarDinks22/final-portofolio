import Link from "next/link"
import { projectPropTypes } from "./MoleculePropTypes/projectPropTypes"

export const project: React.FC<projectPropTypes> = ({
    children,
    link,
    altName,
    imgURL, 

}) =>{
    <Link href={link}>
        <div className="">
            <img src={imgURL} alt={altName}/>
            <div className="">
                {/* <Icon/> */}
                <p className="">{children}</p>
                <p className="">{children}</p>
            </div>
        </div>
    </Link>
}