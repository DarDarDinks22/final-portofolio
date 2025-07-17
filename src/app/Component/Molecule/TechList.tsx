import { TechItem } from "../Atom/TechListItem";

const TechList = () => {
    return (
        <section>
            <div className="">
                What I use
                {TechItem.map((tech, index) => (
                    <div    key={index}
                            className="">
                                {tech}
                    </div>
                ))}
            </div>
        </section>
    )
};

export default TechList;