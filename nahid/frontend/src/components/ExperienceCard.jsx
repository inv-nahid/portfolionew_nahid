import CertificateButton from "./CertificateButton"

const ExperienceCard = ({
    id,
    role,
    company,
    duration,
    description,
    tech,
}) => {
    return (
        <div className="p-10 flex flex-col gap-6 border border-white/20 lg:py-20 transition-all duration-700 ease-out hover:scale-105 hover:border-red-700 ">
            {/* Index */}
            <span className="text-sm text-white/40">[{id}]</span>

            {/* Role */}
            <h3 className="text-2xl font-medium leading-tight">
                {role}
            </h3>

            {/* Company + Duration */}
            <div className="text-white/70 flex justify-between items-center">
                <div>
                    <p>{company}</p>
                    <p className="text-sm">{duration}</p>
                </div>
                <CertificateButton href="#">View Certificate</CertificateButton>

            </div>

            {/* Description */}
            <p className="text-white/70 leading-relaxed max-w-md">
                {description}
            </p>

            {/* Tech stack */}
            <p className="text-sm text-white/50 hover:text-red-500 transition-colors duration-500">
                {tech.join(" · ")}
            </p>
        </div>
    );
};

export default ExperienceCard;
