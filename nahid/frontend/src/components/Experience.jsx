import ExperienceCard from "./ExperienceCard"

const experiences = [
    {
        id: "01",
        role: "Java Full-Stack Bootcamp",
        company: "Globsyn Finishing School",
        duration: "Jan 2024 — Apr 2024",
        description:
            "Built responsive UI components, optimized the SpringBoot backend, and improved page performance across multiple views for a home-services website.",
        tech: ["SpringBoot", "React", "MySQL"],
        certificate: "https://drive.google.com/file/d/1LPe72QclBO0F3cyOYxwcZtUD4BlOg6hY/view?usp=drive_link",
    },
    {
        id: "02",
        role: "Machine Learning Intern",
        company: "Edunet Foundation",
        duration: "Jun 2025 — July 2025",
        description:
            "I completed a 6-week internship on Artificial Intelligence & Machine Learning in collaboration with the All India Council for Technical Education (AICTE) and implemented by Edunet Foundation.",
        tech: ["Linear Regression", "Flask", "Git"],
        certificate: "https://drive.google.com/file/d/129W2_epRx56Q8luRiIcqa5vrXaYFSESb/view?usp=drive_link",
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

