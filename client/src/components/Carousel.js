import headerImage1 from '../asset/68076731-d2fd-4d40-9c4b-7fbe7ec35d9e.jpg'
import headerImage2 from '../asset/c1250968-3a8b-45a3-bcd6-2be27781d145.jpg'
import headerImage3 from '../asset/e5cbafd7-e932-4439-a48f-690069f860af.jpg'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Children, useState } from 'react';

function Carousel(props) {

    const [offset, setOffset] = useState(0)

    let imageWidth = 1100

    function handleArrowLeft() {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + imageWidth

            return newOffset
        })
    }

    function handleArrowRight() {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - imageWidth

            return newOffset
        })
    }

    return (
        <div className='carousel'>
            <FaChevronLeft className='carousel__arrow' onClick={handleArrowLeft}/>
            <div className='carousel__window'>
                <div className='carousel__all-paiges' style={{transform: `translateX(${offset}px)`}}>
                    {props.children}
                </div>
            </div>
            <FaChevronRight className='carousel__arrow' onClick={handleArrowRight}/>
        </div>
    )
}

export default Carousel