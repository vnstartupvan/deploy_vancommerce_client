import React from 'react';
import { Link } from 'react-router-dom';
import '../ShoppingNav/ShoppingNav.css';

function ShoppingNav() {
    const data = [{
        title: 'Mr Simple',
        slug: 'mr-simple',
        img: 'https://cdn.shopify.com/s/files/1/0077/0432/files/Desktop_1024X1024_BlackFridayEarlyAccess_lounge_1800x.progressive.jpg?v=1666280679',
    },
    {
        title: 'Casual',
        slug: 'casual',
        img: 'https://cdn.shopify.com/s/files/1/0077/0432/files/Desktop_1024X1024_BlackFridayEarlyAccess_Casual_1800x.progressive.jpg?v=1666280718'
    },
    {
        title: 'Holiday',
        slug: 'holiday',
        img: 'https://cdn.shopify.com/s/files/1/0077/0432/files/Desktop_1024X1024_BlackFridayEarlyAccess_shirts_1800x.progressive.jpg?v=1666281116'
    },
    {
        title: 'Fashion',
        slug: 'fashion',
        img: 'https://cdn.shopify.com/s/files/1/0077/0432/files/Desktop_1024X1024_BlackFridayEarlyAccess_sport_1800x.progressive.jpg?v=1666280769'
    }
    ];
    const renderShoppingItem = () => {
        return data.map(item => {
            return <Link to={`collections/${item.slug}`} key={item.title} style={{ backgroundImage: `url(${item.img})` }} className="shopping-nav-item">
            </Link>
        })
    }
    return (
        <div className='shopping-nav-wrapper'>
            <div className="shopping-nav-list">
                {renderShoppingItem()}
            </div>
        </div>
    )
}

export default ShoppingNav