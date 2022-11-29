import React from 'react';
import '../Footer/Footer.css'
import FooterBottom from './FooterBottom/FooterBottom';
import FooterNav from './FooterNav/FooterNav';
import FooterSubcribe from './FooterSubcribe/FooterSubcribe';

function Footer() {
    return (
        <footer className="footer">
            <FooterSubcribe/>
            <FooterNav/>
            <FooterBottom/>
        </footer>
    )
}

export default Footer