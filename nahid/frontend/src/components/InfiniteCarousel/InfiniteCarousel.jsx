import './InfiniteCarousel.css'
import kolkata1 from "../../assets/kolkata1.jpg";
import kolkata2 from "../../assets/kolkata2.jpg";
import kolkata3 from "../../assets/kolkata3.jpg";
import kolkata4 from "../../assets/kolkata4.jpg";
import kolkata5 from "../../assets/kolkata5.jpg";
import kolkata6 from "../../assets/kolkata6.jpg";
import me1 from "../../assets/me1.jpeg";
import me2 from "../../assets/me2.jpeg";

const images = [
    kolkata1,
    kolkata2,
    kolkata3,
    me1,
    kolkata4,
    kolkata5,
    kolkata6,
    me2,
]

const InfiniteCarousel = () => {
    return (

        <div className='carousel max-w-3xl md:max-w-4xl lg:max-w-4xl mx-auto'>

            <div className='groupcard'>
                {images.map((img, idx) => (
                    <div className="card" key={`img-1-${idx}`}>
                        <img src={img} alt="" />
                    </div>
                ))}
            </div>

            <div aria-hidden="true" className='groupcard'>
                {images.map((img, idx) => (
                    <div className="card" key={`img-1-${idx}`}>
                        <img src={img} alt="" />
                    </div>
                ))}
            </div>

        </div >

    )
}

export default InfiniteCarousel