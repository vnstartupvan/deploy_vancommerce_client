import React from 'react';
import { Outlet } from "react-router-dom";
import MobileMenu from '../Components/Common/MobileMenu/MobileMenu';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header';

function DefaultLayout() {

    return (
        <div>
            <Header/>
            <main style={{marginTop: '108px'}}>
                <Outlet/>
            </main>
            <Footer/>
            <MobileMenu/>
        </div>
    )
}

export default DefaultLayout