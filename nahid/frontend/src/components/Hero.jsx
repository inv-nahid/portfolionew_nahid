import contour from "../assets/contour.png";
import img1 from "../assets/me3.jpeg";
import img2 from "../assets/me3.jpeg";
import img3 from "../assets/me3.jpeg";
import img4 from "../assets/me3.jpeg";
import IntentFontChange from "./IntentFontChange";

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
            <div className="border-b border-white/20 flex items-end p-6 md:p-8
            text-5xl sm:text-4xl md:text-5xl
            font-['Fjalla_One']">
                Nahid<br />Azad
            </div>

            <div
                className="
        relative
        border-b md:border-l border-white/90
        bg-cover bg-center 
        transition-all duration-700 ease-out 
        hover:scale-110 hover:border-red-600 
        min-h-[240px]"
                style={{ backgroundImage: `url(${contour})` }}
            >
                <div className="absolute inset-0 bg-black/90"></div>

                <div className="relative flex h-full p-6 md:p-8
                items-center justify-center
                md:items-end md:justify-start
                text-3xl sm:text-xl md:text-2xl
                text-center md:text-left"
                >
                    <div className="flex flex-col">
                        <span className="font-['Fjalla_One'] py-2 leading-snug">
                            Every Detail Tells <br /> A Story With
                        </span>
                        <span>
                            <IntentFontChange />
                        </span>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8 text-sm text-white/70 text-justify [hyphens:auto]">
                I build things for the web and care about getting the details right. I don’t chase trends. I focus on making the ideas work, look intentional, and feel solid when someone actually uses them. I’m still learning, but I take what I build seriously.
            </div>


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
