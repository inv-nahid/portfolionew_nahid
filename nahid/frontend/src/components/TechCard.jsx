const TechCard = ({ name, level, Icon }) => {
    return (
        <div
            className="
        group
        border border-white/20
        p-4 sm:p-6
        flex flex-col items-center gap-3
        hover:bg-white/5
        transition-all duration-500 ease-out
        hover:scale-110"
        >
            <Icon className="text-2xl sm:text-3xl text-white/70 group-hover:text-white transition-colors" />

            <div className="text-center">
                <p className="text-xs sm:text-sm">{name}</p>
                <p className="text-[10px] sm:text-xs text-white/50">{level}</p>
            </div>
        </div>
    );
};

export default TechCard;
