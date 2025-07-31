import Card from "./Card";
import ProjectItems from "../Atom/Projects";

const Project = () => {
    return(
    <div className="">
        {ProjectItems.map((project, index) => (
            <Card 
                key={index}
                link={project.link}
                imgURL={project.imgURL}
                altName={project.altName}
                title={project.title}
                desc={project.desc}
        />
        ))}
    </div>
    )
}

export default Project