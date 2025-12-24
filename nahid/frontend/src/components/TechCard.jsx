const TechCard = ({ name, level, Icon }) => {
    return (
        <div className="group border border-white/20 p-6 px-7 flex flex-col items-center gap-4 hover:bg-white/5 transition-colors transition-transform duration-700 ease-out hover:scale-110">
            <Icon className="text-3xl text-white/70 group-hover:text-white transition-colors" />

            <div>
                <p className="text-sm flex justify-center">{name}</p>
                <p className="text-xs text-white/50 flex justify-center">{level}</p>
            </div>
        </div>
    )
}

export default TechCard
