import { TechItem } from "../Atom/TechListItem";

const TechList = () => {
    return (
        <section>
            <div className="">
                What I use
                {TechItem.map((tech, index) => (
                    <div    key={index}
                            className="text-9xl">
                                {tech}
                    </div>
                ))}
            </div>
        </section>
    )
};

export default TechList;