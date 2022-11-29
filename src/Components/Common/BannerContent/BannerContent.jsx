import React from 'react';
import { Link } from 'react-router-dom';
import "./BannerImg.css"

function BannerContent({ title, subtitle, btnText, img }) {
    const ImageStyle = {
        backgroundImage: `url(${img})`,
    }
    return (
        <div className="banner-wrapper">
            <Link to={'/collections/mr-simple'}>
                <div className="banner-bg" style={ImageStyle}></div>
                <div className="banner-content">
                    <h1 className="banner-title">
                        {title}
                    </h1>
                    <h2 className="subtitle">
                        {subtitle}
                    </h2>
                    <p className="banner-button">
                        {btnText}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default BannerContent;