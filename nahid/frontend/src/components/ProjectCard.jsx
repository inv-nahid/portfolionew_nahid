
const ProjectCard = ({ category, title, duration, image }) => {
    return (
        <div className="grid grid-cols-[40%_60%] border-b border-t min-h-[360px] border-white/20 font-['Fjalla_One']">

            {/*LEFT COLUMN*/}
            <div className="border-r border-white/20 p-10 flex flex-col">
                <span className="text-sm text-white/60 uppercase">
                    {category}
                </span>
                <h3 className="text-2xl mt-4 ">
                    {title}
                </h3>
                <div className="flex items-end justify-between h-full">
                    <div className="flex flex-col gap-2 text-sm text-white/50 mt-2 ">
                        <span>DURATION</span>
                        <span>{duration}</span>
                    </div>
                    <div className="mt-auto">
                        ↗
                    </div>
                </div>
            </div>

            {/*RIGHT COLUMN*/}
            <div className="overflow-hidden h-[360px] p-4">
                <img
                    src={image}
                    className=" h-full w-full object-cover flex items-center justify-center transition-transform duration-700 ease-out hover:scale-110"
                />
            </div>

        </div>
    )
}

export default ProjectCard
