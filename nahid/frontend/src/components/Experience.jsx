import ExperienceCard from "./ExperienceCard"

const experiences = [
    {
        id: "01",
        role: "Java Full-Stack Bootcamp",
        company: "Globsyn Finishing School",
        duration: "Jan 2024 — Apr 2024",
        description:
            "Built responsive UI components, collaborated with designers, and improved page performance across multiple views.",
        tech: ["SpringBoot", "React", "MySQL"],
    },
    {
        id: "02",
        role: "Machine Learning Intern",
        company: "Edunet Foundation",
        duration: "Jun 2025 — July 2025",
        description:
            "Worked on internal tools, implemented reusable components, and contributed to feature development in an agile setup.",
        tech: ["Linear Regression", "Flask", "Git"],
    }
]

const Experience = () => {
    return (
        <section className="pt-16 sm:pt-24 pb-8 px-3 sm:px-6">
            <h1 className="inline-block text-3xl sm:text-5xl font-['Fjalla_One'] hover:text-red-500 transition-colors duration-500 mb-6">
                EXPERIENCE
            </h1>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {experiences.map((exp, index) => (
                    <ExperienceCard
                        key={index}
                        {...exp}
                    />
                ))}
            </div>
        </section>
    );
};


export default Experience