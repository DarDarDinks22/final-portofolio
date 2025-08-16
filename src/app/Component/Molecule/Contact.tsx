import Image from "next/image";

const Contact = () => {

    const phoneNumber = "6281357836633"

    return (
        <div className="">
            <div className="">
                <p className="">Interested? You can contact me here!</p>
                <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://wa.me/${phoneNumber}`}> 
                        <Image src={} alt="WhatsAppIcon"
                                className=""/>
                </a>
                <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://wa.me/${phoneNumber}`}> 
                        <Image src={} alt="WhatsAppIcon"
                                className=""/>
                </a>
                <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://wa.me/${phoneNumber}`}> 
                        <Image src={} alt="WhatsAppIcon"
                                className=""/>
                </a>
            </div>
        </div>
    );
}

export default Contact