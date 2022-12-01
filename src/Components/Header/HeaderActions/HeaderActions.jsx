import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import utils from '../../../Utils/utils';
import '../HeaderActions/HeaderActions.css';
import { toggleCart } from '../../../Store/cartStore';
import { actionLogout } from '../../../Store/userStore';
import SearchInput from '../../Common/SearchInput/SearchInput';

function HeaderActions() {
    const cartList = useSelector(state => state.cart.products);
    const cartQty = utils.getCartQty(cartList);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const iconStyle = {
        padding: '0 8px',
        fontSize: '24px',
        fontWeight: 'bold',
    }
    const submitSearch = (e) => {
        navigate({ pathname: '/search', search: e.target.value });
    }
    const cartEvent = () => {
        const template = utils.getCurrentPage();
        const templateWithCart = [
            'collection',
            'search'
        ];
        if (templateWithCart.includes(template)) {
            dispatch(toggleCart());
            return;
        }
        navigate('/cart');
    }
    const handleLogout = () => {
        dispatch(actionLogout());
        utils.refreshPage();

    }
    return (
        <div className='header-action-wrapper'>
            <SearchInput searchClass={'hide-on-mobile'}/>
            <div className="user-icon pos-rel">
                <UserOutlined style={iconStyle} />
                <div className="user-popup-wrapper pos-abs">
                    <div className="user-popup">
                        <h3>Welcome to our store</h3>
                        <p>Sign in to enjoy a personalized experience and collect redeemable points 🔥</p>
                        {!user && <div className="user-action-wrapper">
                            <div className="action-sign-in user-action">
                                <Link to={'/login'}>SIGN IN</Link>
                            </div>
                            <div className="action-sign-up user-action">
                                <Link to={'/register'}>SIGN UP</Link>
                            </div>
                        </div>}
                        {user && <div className="user-action-wrapper">
                            <h3>Hi {user.userInfo.name} :)</h3>
                            <div className="action-sign-in user-action">
                                <Link onClick={() => handleLogout()}>SIGN OUT</Link>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="cart-icon pos-rel">
                <ShoppingCartOutlined onClick={() => cartEvent()} style={iconStyle} />
                <span className="cart-icon-qty">{cartQty}</span>
            </div>
        </div>
    )
}

export default HeaderActions