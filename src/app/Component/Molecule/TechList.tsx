import { TechItem } from "../Atom/TechListItem";

const TechList = () => {
    return (
        <section>
            <div>
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