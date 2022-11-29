import React from 'react';
import AboutUs from '../Components/Common/AboutUs/AboutUs';
import Banner from '../Components/Common/BannerImg/BannerImg';
import ShoppingNav from '../Components/Common/ShoppingNav/ShoppingNav';
import Footer from '../Components/Footer/Footer';

function HomeTemplate() {
    window.scrollTo({top:0});
    return (
        <div style={{padding: '0 30px'}} className='home-template'>
            <div className="section-banner">
                <Banner imgMobile={'https://cdn.dynamicyield.com/api/8770101/images/20361552114c2__desktop_800x1000_falloutfitting.jpg'} imgDesktop={'https://cdn.dynamicyield.com/api/8770101/images/1dadc1eef3b3c__desktop_2000x700_falloutfitting.jpg'} />
                <ShoppingNav/>
                <AboutUs/>
            </div>
        </div>
    )
}

export default HomeTemplate