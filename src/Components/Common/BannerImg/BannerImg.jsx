import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./BannerImg.css";
import { isMobile } from "react-device-detect";


function Banner({ imgDesktop, imgMobile }) {
    // const ImageStyle = {
    //     backgroundImage: `url(${imgUrl})`,
    // }
    return (
        <div className="banner-wrapper">
            <Link to={'/collections/mr-simple'}>
                <div className="banner-bg" style={{backgroundImage:`url(${isMobile ? imgMobile : imgDesktop})`}}></div>
            </Link>
        </div>
    )
}

export default Banner