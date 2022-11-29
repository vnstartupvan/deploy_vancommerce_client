import React from 'react';
import { Link } from 'react-router-dom';
import '../Logo/HeaderLogo.css';
function HeaderLogo(props) {
    return (
        <Link to={'/'} className='header_logo'>
            <img src="https://cdn.shopify.com/s/files/1/0077/0432/files/Logo_WHA_Web_2_1_272x.png?v=1637271998" alt="" />
        </Link>
    )
}

export default HeaderLogo;