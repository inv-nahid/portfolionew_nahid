import { useEffect, useState } from "react";

const fonts = [
    "font-['Fjalla_One']",
    "font-serif",
    "font-mono",
    "font-sans",
    "font-['Playfair_Display']",
];

const IntentFontChange = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % fonts.length);
        }, 900);

        return () => clearInterval(id);
    }, []);

    return (
        <span
            className={`${fonts[index]} transition-all duration-500`}
        >
            INTENT
        </span>
    );
};

export default IntentFontChange;
