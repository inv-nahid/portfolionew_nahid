const PhotoCard = ({ src, fit = "cover", className = "" }) => {
    return (
        <div className={`border border-white/40 p-2 overflow-hidden ${className}`}>
            <img
                src={src}
                className={`w-full h-full object-${fit}`}
            />
        </div>
    );
};

export default PhotoCard;
