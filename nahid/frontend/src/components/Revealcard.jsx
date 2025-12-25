import { useRef } from "react";

const RevealCard = ({ image }) => {
    const cardRef = useRef(null);

    const handleMove = (e) => {
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
      "
        >
            {/* COLOR IMAGE */}
            <img
                src={image}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* BLACK & WHITE MASK */}
            <img
                src={image}
                className="
          absolute inset-0 w-full h-full object-cover
          grayscale
          [mask-image:radial-gradient(circle_120px_at_var(--x)_var(--y),transparent_0%,black_60%)]
          [mask-repeat:no-repeat]
        "
            />
        </div>
    );
};

export default RevealCard;
