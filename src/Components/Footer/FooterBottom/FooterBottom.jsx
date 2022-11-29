import React from 'react';
import { Link } from 'react-router-dom';
import '../FooterBottom/FooterBottom.css';

function FooterBottom() {
    return (
        <div className='footer-bottom'>
            <div className="footer-copyright">
                <p className='copyright-text'> © 2022 Van Pham Inc. - The Weekend Has Arrived - All Rights Reserved</p>
            </div>
            <div className="footer-tou">
                <Link className="footer-tou_link">
                    Terms of Use
                </Link>
                <Link className="footer-tou_link">
                    Privacy Policy
                </Link>
                <Link className="footer-tou_link">
                    Do Not Sell My Info
                </Link>
                <Link className="footer-tou_link">
                    Cookie Preferences
                </Link>
            </div>
        </div>
    )
}

export default FooterBottom