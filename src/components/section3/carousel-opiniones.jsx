import React from 'react';
import Carousel from 'nuka-carousel';
import Img1 from './img/testimonials.png';
import Img2 from './img/testimonials2.png';

export default function CarouNuka() {
    return (
        <Carousel className="Carousel"
            defaultControlsConfig={{
                nextButtonText: 'Next',
                prevButtonText: 'Prev',
                pagingDotsStyle: { fill: 'grey' }
            }}
            autoplay={false}
            autoplayInterval={2000}
            wrapAround={true}
            withoutControls={false}
            transitionMode={"fade"}
            pauseOnHover={false}
            swiping={false}//Enable touch swipe/dragging
        //speed = {2000}
        >
            <img src={Img1} className="CarouselImg" alt='...' />
            <img src={Img2} className="CarouselImg" alt='...' />
        </Carousel>
    )
}
