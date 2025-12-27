import PhotoCard from "./PhotoCard"
import me3 from "../assets/me3.jpeg";
import sgang1 from "../assets/sgang1.jpeg";
import sgang2 from "../assets/sgang2.jpeg";
import cgang1 from "../assets/cgang1.jpeg";
import cgang2 from "../assets/cgang2.jpeg";
import cgang3 from "../assets/cgang3.jpeg";
import catto1 from "../assets/catto1.jpeg";
import catto2 from "../assets/catto2.jpeg";


const Gallery = () => {
    return (
        <div className=" ">

            <div className="grid
          grid-cols-1
          sm:grid-cols-2
          gap-4 sm:gap-8
          auto-rows-[150px]
          sm:auto-rows-[190px]
          md:auto-rows-[230px]
          lg:auto-rows-[270px]"
            >
                <PhotoCard className="row-span-2" src={me3} />
                <PhotoCard className="row-span-2 " src={sgang1} />
                <PhotoCard src={cgang2} />
                <PhotoCard className="row-span-2" src={sgang2} />
                <PhotoCard className="row-span-2" src={cgang1} />
                <PhotoCard src={cgang3} />
                <PhotoCard className="row-span-1 " src={catto1} />
                <PhotoCard className="row-span-2" src={catto2} />
            </div>

        </div>

    )
}

export default Gallery