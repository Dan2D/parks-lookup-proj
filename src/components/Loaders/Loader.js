import React from 'react';
import Lottie from 'react-lottie';
import animationData from "../../assets/animations/campfire.json";

function Loader({isLoading, type}) {

    if (!isLoading) {
        let loader = document.querySelector(".loader");
        loader.classList.add("fade");
        setTimeout(() => {loader.classList.add("inactive")}, 700);
    }

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <div className={`loader`}>
            <Lottie options={defaultOptions} height={400} width={400} />
        </div>
    )
}

export default Loader


