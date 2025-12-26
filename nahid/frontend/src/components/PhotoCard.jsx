const PhotoCard = ({ src, fit = "cover", className = "" }) => {
    return (
        <div className={`border border-white/30 overflow-hidden ${className}`}>
            <img
                src={src}
                className={`w-full h-full object-${fit}`}
            />
        </div>
    );
};

export default PhotoCard;
