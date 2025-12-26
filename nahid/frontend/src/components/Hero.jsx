import contour from "../assets/contour.png"
import img1 from "../assets/homeassist.png";
import img2 from "../assets/homeassist.png";
import img3 from "../assets/homeassist.png";
import img4 from "../assets/homeassist.png";


import RevealCard from "./Revealcard"

const Hero = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-2 h-screen border-b border-white/20 mt-13">
            <div className="border-b border-white/20 flex items-end justify-start h-full p-8 text-5xl font-['Fjalla_One']">
                Nahid<br />Azad
            </div>
            <div className="relative border-l border-b border-white hover:border-red-700  bg-cover bg-center transition-all duration-700 ease-out hover:scale-110" style={{ backgroundImage: `url(${contour})` }}>
                <div className="absolute inset-0 bg-black/90"></div>
                <div className="relative flex items-end justify-start h-full p-8 text-2xl">
                    <div className="flex flex-col">
                        <span className="font-['Fjalla_One'] py-2 leading-snug">Every detail tells <br /> a story with</span>
                        <span className="">INTENT</span>
                    </div>
                </div>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="border-l border-white/20 grid grid-cols-2 p-5 gap-5 flex justify-center items-center ">
                {[img1, img2, img3, img4].map((img, i) => (
                    <RevealCard key={i} image={img} />
                ))}
            </div>
        </div>
    )
}

export default Hero

