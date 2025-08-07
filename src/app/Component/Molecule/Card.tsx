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
        <Link href={link ?? "/"}>
            <div    ref={ref}
                    className=" bg-[#1A1A1A] h-[30rem] w-[20rem] rounded flex flex-col gap-4 items-start justify-start
                            hover:-translate-y-1 hover:scale-10 
                            hover:bg-stone-800">
                {/* IMAGE */}
                <div className="relative ">
                    <Image 
                    src={imgURL}
                    alt={altName}
                    fill
                    className="object-cover rounded"
                        />
                </div>
                {/* Description */}
                <div className="flex flex-col gap-4 w-full h-full text-left">
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