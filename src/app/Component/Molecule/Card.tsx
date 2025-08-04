import Link from "next/link"
import Image from "next/image"
import { projectPropTypes } from "./MoleculePropTypes/projectPropTypes"
import { forwardRef } from "react"

 const Card = forwardRef<HTMLDivElement, projectPropTypes> (({
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
});

Card.displayName = "Card";

export default Card;