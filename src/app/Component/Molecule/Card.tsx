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
                    className=" bg-[#1A1A1A] h-[20rem] w-[80rem] rounded overflow-hidden flex flex-col gap-4 items-start justify-start shadow-lg shadow-gray-800">
                {/* Description */}
                <div className="flex gap-4 w-full h-full text-left ">
                    <Image 
                        src={imgURL}
                        alt={altName}
                        width={500}
                        height={500}
                        className="p-6 w-2/4 rounded shadow-lg shadow-gray-800"/>
                    <div className="text-xl flex flex-col gap-2 p-4 flex-1 shadow-lg shadow-gray-800">
                        <p className="font-extrabold">{title}</p>
                        <div className="text-base">
                            <p>{desc}</p>
                        </div>
                        <div className="text-sm mt-auto">
                            <p className="font-extrabold">Tech Used</p>
                            <div className="">
                                {tech.map ((item, index) => (
                                    <Image src={item}
                                        alt="Project Tech"
                                        key={index}
                                        width={32}
                                        height={32}
                                        className=""/>
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
