import TechCard from "./TechCard"

import { FaReact, FaNodeJs, FaJava, FaPython, FaGit } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiFigma, SiJavascript, SiExpress, SiMongodb, SiMysql, SiDocker, SiC, SiRedhat } from "react-icons/si";

const techStacks = [
    {
        category: "Frontend",
        items: [
            { name: "JavaScript", level: "Advanced", icon: SiJavascript },
            { name: "React", level: "Advanced", icon: FaReact },
            { name: "Tailwind", level: "Advanced", icon: SiTailwindcss },
            { name: "Next.js", level: "Intermediate", icon: SiNextdotjs },
            { name: "Figma", level: "Intermediate", icon: SiFigma },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", level: "Advanced", icon: FaNodeJs },
            { name: "Express", level: "Advanced", icon: SiExpress },
            { name: "MongoDB", level: "Intermediate", icon: SiMongodb },
            { name: "MySQL", level: "Advanced", icon: SiMysql },
            { name: "Docker", level: "Intermediate", icon: SiDocker },
        ],
    },
    {
        category: "Languages & Tools",
        items: [
            { name: "Java", level: "Advanced", icon: FaJava },
            { name: "Python", level: "Intermediate", icon: FaPython },
            { name: "C", level: "Intermediate", icon: SiC },
            { name: "Git", level: "Advanced", icon: FaGit },
            { name: "Red Hat", level: "Intermediate", icon: SiRedhat },
        ],
    },
]

const TechStack = () => {
    return (
        <div>
            <div className="">
                <h1 className="inline-block text-5xl font-['Fjalla_One'] hover:text-red-500 transition-colors duration-500 uppercase">
                    tech stack
                </h1>
                <p>
                    stuff i use to build cool things on the web.
                </p>
            </div>

            <section className="mt-20 space-y-7 flex flex-col justify-center items-center">
                {techStacks.map((stack) => (
                    <div
                        key={stack.category}
                        className="max-w-5xl mx-auto px-5"
                    >
                        {/* heading aligned to grid start */}
                        <h3 className="mb-3 text-lg font-semibold uppercase">
                            {stack.category}
                        </h3>

                        {/* grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12">
                            {stack.items.map((tech) => (
                                <TechCard
                                    key={tech.name}
                                    name={tech.name}
                                    level={tech.level}
                                    Icon={tech.icon}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};


export default TechStack
