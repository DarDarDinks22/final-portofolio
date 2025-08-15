import Link from "next/link";

const Contact = () => {

    const phoneNumber = "6281357836633"

    return (
        <div className="">
            <a 
                target="_blank"
                rel="noopener noreferrer"
                href={`https://wa.me/${phoneNumber}`}> 
            </a>
        </div>
    );
}

export default Contact