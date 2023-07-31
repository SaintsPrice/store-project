import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from 'react';

function Carousel(props) {

    const [offset, setOffset] = useState(0)

    let pageWidth = window.innerWidth < 1100 ? window.innerWidth * .8 : 1100

    function handleArrowLeft() {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + pageWidth

            return Math.min(newOffset, 0)
        })
    }

    function handleArrowRight() {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - pageWidth
            
            const maxOffset = -((props.children.length - 1) * pageWidth)
            console.log(props.children.length)
            return Math.max(newOffset, maxOffset)
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