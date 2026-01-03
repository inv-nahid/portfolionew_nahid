import contour from "../assets/contour.png";
import img1 from "../assets/reveal1.jpg";
import img2 from "../assets/reveal2.jpeg";
import img3 from "../assets/reveal3.jpeg";
import img4 from "../assets/reveal4.jpg";
import IntentFontChange from "./IntentFontChange";
import ShinyText from './ShinyText';
import DecryptedText from './DecryptedText';
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
    mt-10 md:mt-1"
        >
            <div className="border-b border-white/20 flex items-end justify-center md:justify-start p-6 md:p-8 pb-13 md:pb-6
            text-5xl sm:text-5xl md:text-6xl
            font-['Fjalla_One']">
                <DecryptedText
                    text="Nahid Azad"
                    speed={110}
                />
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
                text-3xl 
                text-center md:text-left"
                >
                    <div className="flex flex-col">
                        <span className="font-['Fjalla_One'] py-2 leading-snug">
                            Every Detail Tells <br /> A Story With
                        </span>
                        <span className="text-4xl hover:text-red-700 transition-all ease-out hover:scale-110 duration-700">
                            <IntentFontChange />
                        </span>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8 pb-16 md:pb-8 text-sm flex justify-center md:justify-start lg:justify-self-start lg:w-3/4 text-white/70 text-justify [hyphens:auto]">
                <ShinyText
                    text="I build things for the web and care about getting the details right. I don't chase trends. I focus on making the ideas work, look intentional, and feel solid when someone actually uses them. I'm still learning, but I take what I build seriously."
                    speed={2}
                    delay={0}
                    color="#b5b5b5"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                />
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
