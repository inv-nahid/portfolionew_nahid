import leaves from "../assets/leaves.jpg";

const Filler = () => {
    return (
        <div
            className="relative min-h-[300px]  bg-cover bg-center flex justify-center items-center mb-30 mt-15"
            style={{ backgroundImage: `url(${leaves})` }}
        >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/75"></div>

            {/* content */}
            <div className="relative flex flex-col items-center gap-8">
                <span className="text-3xl hover:text-red-500 transition-all duration-300">
                    And I'm Just Getting Started ⌐■_■
                </span>

                <button className="text-xl text-white px-7 py-2 border-2 border-white hover:text-red-500 hover:bg-black/45 hover:border-red-500 transition-all duration-300 cursor-pointer">
                    BLOG
                </button>
            </div>
        </div>
    );
};

export default Filler;
