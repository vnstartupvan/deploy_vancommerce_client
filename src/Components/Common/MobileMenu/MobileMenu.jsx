import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionToggleMenu } from '../../../Store/mainStore';
import '../MobileMenu/MobileMenu.css';
import MenuLinks from './MenuLinks/MenuLinks';

function MobileMenu() {
    const dispatch = useDispatch();
    const menuStatus = useSelector(state => state.mainStore.mobileMenuStatus);

    const toggleMobileMenu = () => {
        dispatch(actionToggleMenu())
    }
    return (
        <div className={`mobile-menu-wrapper ${menuStatus}`}>
            <div className="mobile-menu">
                <div className="mobile-menu-header">
                    <h2 className="mobile-memu-header-text">
                        Menu
                    </h2>
                    <button onClick={() => toggleMobileMenu()} className="mobile-menu-close-btn">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9194 13.0572C11.5097 13.6476 12.4669 13.6476 13.0572 13.0572C13.6476 12.4669 13.6476 11.5097 13.0572 10.9194L9.13785 7L13.0572 3.08061C13.6476 2.49026 13.6476 1.53311 13.0572 0.942763C12.4669 0.352412 11.5097 0.352413 10.9194 0.942763L7 4.86215L3.08061 0.942763C2.49026 0.352413 1.53311 0.352413 0.942762 0.942763C0.352412 1.53311 0.352413 2.49026 0.942763 3.08061L4.86215 7L0.942763 10.9194C0.352413 11.5097 0.352412 12.4669 0.942763 13.0572C1.53311 13.6476 2.49026 13.6476 3.08061 13.0572L7 9.13785L10.9194 13.0572Z" fill="#000A14"></path>
                        </svg>
                    </button>
                </div>
                <MenuLinks toggleEvent={toggleMobileMenu} />
            </div>
        </div >
    )
}

export default MobileMenu