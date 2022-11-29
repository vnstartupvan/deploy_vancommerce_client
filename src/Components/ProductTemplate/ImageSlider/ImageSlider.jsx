import React from 'react';
import { useRef, useState } from 'react';

import '../ImageSlider/ImageSlider.css';

function ImageSlider({ data, image }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const imageRef = useRef()
    const slideIndex = useRef(1);
    const slideHeight = imageRef ? imageRef?.current?.clientHeight : 0;
    slideIndex.current = currentSlide;
    const slidePosition = {
        transform: `translateY(${slideIndex.current * -slideHeight}px)`
    };
    const images = data || [];
    if (images.length <= 0 && image) images.push(image)
    const renderSliderDocs = (images) => {
        return images.map((doc, index) => {
            return <div key={index} onClick={() => setCurrentSlide(index)} className={`slider-dot-item ${index === slideIndex.current ? 'active-dot' : ''} `}><img src={doc} alt="" /></div>
        })
    };
    const renderSliderItems = (images) => {
        return images.map((image, index) => {
            return <div ref={imageRef} key={index} className="slide-item"><img src={image} alt="" /></div>
        })
    }
    return (
        <div className='pt-image-slider'>
            <div className="slider-dots">
                {renderSliderDocs(images)}
            </div>
            <div className="slider-main">
                <div style={slidePosition} className="slider-list">
                    {renderSliderItems(images)}
                </div>
            </div>
        </div>
    )
}

export default ImageSlider