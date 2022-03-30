import React from 'react';
import Carousel from 'nuka-carousel';
import './style.css'
import { Reviews1, Reviews2, Reviews3, Reviews4, Reviews5 } from './cardReviews';



export const Next = () => {
    return (
        <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="#FE9759" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 19L5 12L12 5" stroke="#FE9759" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    )
}


export const Prev = () => {
    return (
        <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="#FE9759" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="#FE9759" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
            slidesToShow='1'
            swiping={true}//Enable touch swipe/dragging
        //speed = {2000}
        >
            <Reviews1 />
            <Reviews2 />
            <Reviews3 />
            <Reviews4 />
            <Reviews5 />
        </Carousel>
    )
}
