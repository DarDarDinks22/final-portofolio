import Link from "next/link"
import Image from "next/image"
import { projectPropTypes } from "./MoleculePropTypes/projectPropTypes";
import { forwardRef } from "react"

export const Card = forwardRef<HTMLDivElement, projectPropTypes> (function Card({
    link,
    altName,
    imgURL, 
    title, 
    desc,
    tech
},  ref) {
    return (
        <Link   target="_blank"
                href={link ?? "/"}>
            <div    ref={ref}
                    className=" bg-[#1A1A1A] h-[35rem] w-[20rem] rounded overflow-hidden flex flex-col gap-4 items-start justify-start shadow-lg shadow-gray-800 flex-nowrap">
                {/* Description */}
                <div className=" gap-4 w-full h-full text-left hover:opacity-75">
                    <Image 
                        src={imgURL}
                        alt={altName}
                        width={500}
                        height={500}
                        className="p-2 w-full h-[12rem] rounded "/>
                    <div className="text-xl flex flex-col gap-2 p-4 flex-1 ">
                        <p className="font-extrabold">{title}</p>
                        <div className="text-base">
                            <p>{desc}</p>
                        </div>
                        <div className="text-sm m p-4 absolute bottom-1 left-1 ">
                            <p className="font-extrabold">Tech Used</p>
                            <div className="flex flex-wrap text-xs">
                                {tech.map ((item, index) => (
                                    <p key={index}>{item}&nbsp;</p>
                                ))}  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
});

Card.displayName = "Card";

export default Card;
