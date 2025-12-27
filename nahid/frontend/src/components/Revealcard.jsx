import { useRef } from "react";

const RevealCard = ({ image }) => {
    const cardRef = useRef(null);

    const handleMove = (e) => {
        // Enable effect on touch devices
        //if (!cardRef.current || window.matchMedia("(hover: none)").matches) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        cardRef.current.style.setProperty("--x", `${x}px`);
        cardRef.current.style.setProperty("--y", `${y}px`);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMove}
            className="
        reveal-card
        relative overflow-hidden
        h-full
        cursor-none
        sm:cursor-none"
        >
            {/* COLOR IMAGE */}
            <img
                src={image}
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
            />

            {/* BLACK & WHITE MASK */}
            <img
                src={image}
                className="
            absolute inset-0 w-full h-full object-cover
            grayscale
            hidden sm:block
            [mask-image:radial-gradient(circle_180px_at_var(--x)_var(--y),transparent_0%,black_60%)]
            [mask-repeat:no-repeat]"
                alt=""
            />
        </div>
    );
};

export default RevealCard;
