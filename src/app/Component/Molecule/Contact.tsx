import Image from "next/image";
import Icon from "../Atom/Icon";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

    const phoneNumber = "6281357836633"

    return (
        <section className="w-full h-full"
                id="contact">
            <div className="text-center text-4xl">
                <p className="">Interested? You can contact me here!</p>
                <div className="flex justify-center gap-4 py-4">
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://github.com/DarDarDinks22`}> 
                            <Icon  iconType={faGithub}/>
                    </a>
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://wa.me/${phoneNumber}`}> 
                            <Icon  iconType={faWhatsapp}/>
                    </a>
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://mail.google.com/mail/?view=cm&to=darrenbusiness74@gmail.com&su=SUBJECT&body=BODY`}> 
                            <Icon  iconType={faEnvelope}/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact