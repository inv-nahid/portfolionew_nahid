import ProjectCard from "./ProjectCard"
import texts from "../assets/texts.png"
import limitless from "../assets/limitless.png"
import homeassist from "../assets/homeassist.png"

const projects = [
    {
        category: "Real-time Communication · Interface Design",
        title: "Texts",
        duration: "2 Months",
        image: texts
    },
    {
        category: "Product Design",
        title: "Limitless",
        duration: "1 Month",
        image: limitless
    },
    {
        category: "Service Design",
        title: "HomeAssist",
        duration: "1 Month",
        image: homeassist
    }
]

export const Projects = () => {
    return (
        <section className="pt-30 pb-7 ">
            <h2 className="inline-block text-5xl font-['Fjalla_One'] hover:text-red-500 transition-colors duration-500 mb-3">
                PROJECTS
            </h2>

            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    category={project.category}
                    title={project.title}
                    duration={project.duration}
                    image={project.image}
                />
            ))}
        </section>
    )
}
