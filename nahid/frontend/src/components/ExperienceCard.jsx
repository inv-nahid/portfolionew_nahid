import CertificateButton from "./CertificateButton"

const ExperienceCard = ({
    id,
    role,
    company,
    duration,
    description,
    tech,
    certificate,
}) => {
    return (
        <div
            className="
        p-5 sm:p-8 lg:py-20
        flex flex-col gap-4 sm:gap-6
        border border-white/20
        transition-all duration-500 ease-out
        hover:scale-105 hover:border-red-700"
        >
            <span className="text-xs sm:text-sm text-white/40">[{id}]</span>

            <h3 className="text-xl sm:text-2xl font-medium leading-tight">
                {role}
            </h3>

            <div className="text-white/70 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div>
                    <p className="text-sm sm:text-base">{company}</p>
                    <p className="text-xs sm:text-sm">{duration}</p>
                </div>
                <CertificateButton href={certificate || "#"}>View Certificate</CertificateButton>
            </div>

            <p className="text-white/70 leading-relaxed max-w-md text-sm sm:text-base">
                {description}
            </p>

            <p className="text-xs sm:text-sm text-white/50 hover:text-red-500 transition-colors duration-500">
                {tech.join(" · ")}
            </p>
        </div>
    );
};


export default ExperienceCard;
