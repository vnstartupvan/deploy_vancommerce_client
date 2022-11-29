import React from 'react';
import { Outlet } from "react-router-dom";
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
        </div>
    )
}

export default DefaultLayout