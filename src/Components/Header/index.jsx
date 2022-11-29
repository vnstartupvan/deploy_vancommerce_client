import React from 'react'
import HeaderLogo from './Logo/HeaderLogo'
import HeaderMenu from './MainMenu/HeaderMenu'
import '../Header/header.css'
import PromoBar from './PromoBar/PromoBar'
import HeaderActions from './HeaderActions/HeaderActions';
import MenuIcon from '../../assests/icons/MenuIcon'


function Header() {
    return (
        <div className='header-wrapper'>
            <PromoBar />
            <section className="section-header">
                <header className="header">
                    <div className="menu">
                        <MenuIcon />
                    </div>
                    <HeaderLogo />
                    <HeaderMenu />
                    <HeaderActions />
                </header>
            </section>
        </div>
    )
}

export default Header