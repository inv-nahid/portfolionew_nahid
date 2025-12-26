import leaves from "../assets/leaves.jpg";

const Filler = () => {
    return (
        <div
            className="
        relative
        min-h-[220px] sm:min-h-[300px] lg:min-h-[380px]
        bg-cover bg-center
        flex justify-center items-center
        mt-10 sm:mt-15 mb-16 sm:mb-30
        px-4"
            style={{ backgroundImage: `url(${leaves})` }}
        >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/75"></div>

            {/* content */}
            <div className="relative flex flex-col items-center gap-4 sm:gap-8 text-center">
                <span className="text-xl sm:text-3xl hover:text-red-500 transition-all duration-300">
                    And I'm Just Getting Started ⌐■_■
                </span>

                <button className="
            text-base sm:text-xl
            px-5 sm:px-7
            py-2
            border-2 border-white
            hover:text-red-500 hover:bg-black/45 hover:border-red-500
            transition-all duration-300"
                >
                    BLOG
                </button>
            </div>
        </div>
    );
};

export default Filler;
