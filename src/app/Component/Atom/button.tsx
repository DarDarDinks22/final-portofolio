import Link from "next/link"
import { buttonPropTypes } from "./AtomPropTypes/buttonPropType"

export const button: React.FC<buttonPropTypes> = ({
    buttonId, 
    link, 
    lab,
    children, 
}) => {
    <Link href={link} className="">
        <label htmlFor={lab}>
            {children}
        </label>
        <input type="button" id={buttonId}/>
    </Link>
}