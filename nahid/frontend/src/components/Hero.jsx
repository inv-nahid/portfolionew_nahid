import contour from "../assets/contour.png";
import img1 from "../assets/homeassist.png";
import img2 from "../assets/homeassist.png";
import img3 from "../assets/homeassist.png";
import img4 from "../assets/homeassist.png";

import RevealCard from "./Revealcard";

const Hero = () => {
    return (
        <section
            className="
    grid
    grid-cols-1
    md:grid-cols-2
    md:grid-rows-2
    min-h-screen
    border-b border-white/20
    mt-10 md:mt-13"
        >
            {/* 1️⃣ Name — always visible */}
            <div className="border-b border-white/20 flex items-end p-6 md:p-8 text-3xl sm:text-4xl md:text-5xl font-['Fjalla_One']">
                Nahid<br />Azad
            </div>

            {/* 2️⃣ Intent block — always visible (UNCHANGED) */}
            <div
                className="
        relative
        border-b md:border-l border-white/90
        bg-cover bg-center
        min-h-[240px]"
                style={{ backgroundImage: `url(${contour})` }}
            >
                <div className="absolute inset-0 bg-black/90"></div>

                <div className="relative flex items-end h-full p-6 md:p-8 text-lg sm:text-xl md:text-2xl">
                    <div className="flex flex-col">
                        <span className="font-['Fjalla_One'] py-2 leading-snug">
                            Every detail tells <br /> a story with
                        </span>
                        <span>INTENT</span>
                    </div>
                </div>
            </div>

            {/* 3️⃣ Description — hidden on mobile */}
            <div className="hidden md:block p-6 md:p-8 text-sm text-white/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

            {/* 4️⃣ Reveal grid — hidden on mobile */}
            <div
                className="
        hidden md:grid
        border-t md:border-t-0 md:border-l border-white/20
        grid-cols-2
        gap-5
        p-5"
            >
                {[img1, img2, img3, img4].map((img, i) => (
                    <RevealCard key={i} image={img} />
                ))}
            </div>
        </section>
    );
};

export default Hero;
