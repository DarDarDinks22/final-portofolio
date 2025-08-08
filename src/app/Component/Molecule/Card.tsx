import Link from "next/link"
import Image from "next/image"
import { projectPropTypes } from "./MoleculePropTypes/projectPropTypes"
import { forwardRef } from "react"

export const Card = forwardRef<HTMLDivElement, projectPropTypes> (function Card({
    link,
    altName,
    imgURL, 
    title, 
    desc
},  ref) {
    return (
        <Link   target="_blank"
                href={link ?? "/"}>
            <div    ref={ref}
                    className=" bg-[#1A1A1A] h-[20rem] w-[20rem] rounded flex flex-col gap-4 items-start justify-start">
                {/* Description */}
                <div className="flex flex-col gap-4 w-full h-full text-left">
                    <div className="text-xl flex flex-col gap-2 p-4 flex-1">
                        {title}
                        <div className="text-base">
                            {desc}
                        </div>
                        <div className="text-sm mt-auto">
                            Tech Used
                            <div className="">
                                Da tech
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