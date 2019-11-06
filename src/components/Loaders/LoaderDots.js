import React from 'react';
import Lottie from 'react-lottie';
import animationData from "../../assets/animations/loader-dots.json";
import { connect } from 'react-redux';

function Loader({isLoading, expand}) {

    // if (!isLoading && document.querySelector(".loader")) {
    //     let loader = document.querySelector(".loader");
    //     loader.classList.add("fade");
    //     setTimeout(() => {loader.classList.add("inactive")}, 300);
    // }

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <div className={`loader  loader--dots ${expand && "loader--expand"}`}>
            <Lottie options={defaultOptions} height={100} width={100} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.appState.loading
    }
}

export default connect(mapStateToProps, null)(Loader)
