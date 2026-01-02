import { useEffect, useState } from "react";

const fonts = [
    "font-['Metal']",
    "font-['Neonderthaw']",
    "font-['Doto']",
    "font-['Schoolbell']",
    "font-['Mrs_Saint_Delafield']",
];

const IntentFontChange = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % fonts.length);
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return (
        <span
            className={`${fonts[index]} transition-all duration-500`}
        >
            Intent
        </span>
    );
};

export default IntentFontChange;
