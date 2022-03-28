import React from 'react';
import Carousel from 'nuka-carousel';
import Img1 from './img/testimonials.png';
import Img2 from './img/testimonials2.png';
import './style.css'



export const Next = () => {
    return (
        <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="#FE9759" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 19L5 12L12 5" stroke="#FE9759" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </>
    )
}


export const Prev = () => {
    return (
        <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="#FE9759" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="#FE9759" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </>
    )
}






export default function CarouNuka() {
    return (
        <Carousel className="carousel"
            defaultControlsConfig={{
                nextButtonText: <Prev/>,
                prevButtonText: <Next/>,
                nextButtonStyle: {background: "transparent"},
                prevButtonStyle: {background: "transparent"},
                pagingDotsStyle: { fill: 'grey', padding: '5px', }
            }}
            autoplay={false}
            autoplayInterval={2000}
            wrapAround={true}
            withoutControls={false}
            transitionMode={"fade"}
            pauseOnHover={false}
            swiping={true}//Enable touch swipe/dragging
        //speed = {2000}
        >
            <img src={Img1} className="carouselImg" alt='...' />
            <img src={Img2} className="carouselImg" alt='...' />
        </Carousel>
    )
}
