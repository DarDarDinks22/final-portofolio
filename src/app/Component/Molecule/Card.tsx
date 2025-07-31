import Link from "next/link"
import Image from "next/image"
import { projectPropTypes } from "./MoleculePropTypes/projectPropTypes"

 const Card: React.FC<projectPropTypes> = ({
    link,
    altName,
    imgURL, 
    title, 
    desc
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
                    {title}
                    <div className="">
                        {desc}
                    </div>
                </div>
            </div>
        </div>
    </Link>
    )
};

export default Card;