const ProjectCard = ({ category, title, duration, image }) => {
    return (
        <div
            className="
            grid
            grid-cols-1
            md:grid-cols-[40%_60%]
            border-b md:border-t
            border-white/20
            font-['Fjalla_One']
            "
        >
            {/* LEFT COLUMN */}
            <div
                className="
                md:border-r border-white/20
                p-6 sm:p-8 md:p-10
                flex flex-col
                "
            >
                <span className="text-xs sm:text-sm text-white/60 uppercase">
                    {category}
                </span>

                <h3 className="text-xl sm:text-2xl mt-3 md:mt-4">
                    {title}
                </h3>

                <div className="flex items-end justify-between mt-6 md:mt-auto">
                    <div className="flex flex-col gap-1 text-xs sm:text-sm text-white/50">
                        <span>DURATION</span>
                        <span>{duration}</span>
                    </div>

                    <div className="text-lg">
                        ↗
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div
                className="
                overflow-hidden
                h-[220px] sm:h-[280px] md:h-[360px]
                p-3 sm:p-4
                "
            >
                <img
                    src={image}
                    className="
                    w-full h-full
                    object-cover
                    transition-transform duration-700 ease-out
                    hover:scale-110
                    "
                />
            </div>
        </div>
    );
};

export default ProjectCard