import './InfiniteCarousel.css'

const InfiniteCarousel = () => {
    return (

        <div className='carousel'>

            <div className='groupcard'>
                <div className='card'><img src="" alt="" /></div>
                <div className='card'><img src="" alt="" /></div>
                <div className='card'><img src="" alt="" /></div>
                <div className='card'><img src="" alt="" /></div>
                <div className='card'><img src="" alt="" /></div>
                <div className='card'><img src="" alt="" /></div>
            </div>

            <div aria-hidden="true" className='groupcard'>
                <div className='card'><img src="" alt="" /></div>
                <div className='card'><img src="" alt="" /></div>
                <div className='card'><img src="" alt="" /></div>
                <div className='card'><img src="" alt="" /></div>
                <div className='card'><img src="" alt="" /></div>
                <div className='card'><img src="" alt="" /></div>
            </div>

        </div >

    )
}

export default InfiniteCarousel