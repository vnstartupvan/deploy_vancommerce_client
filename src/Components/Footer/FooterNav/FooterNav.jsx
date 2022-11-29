import React from 'react';
import '../FooterNav/FooterNav.css';

function FooterNav() {
    const data = [
        {
            title: 'Shop at Chubbies',
            content: [
                'Swim Trunks',
                'Sport Shorts',
                'Casual Shorts',
                'Lounge Shorts',
                'Performance Polos',
                'Casual Shirts',
                'Sale',
                'Rewards',
                'Gift Cards',
            ],
        },
        {
            title: 'Chubbies Resources',
            content: [
                'Help Center',
                'FAQ',
                'Returns & Exchanges',
                'International Returns',
                'Shipping & Delivery',
                'Group Discounts',
                'Military Discount',
                'Size & Length Guide',
                'Contact Us',
            ],
        },
        {
            title: 'About Chubbies',
            content: [
                'About Us',
                'Reward Program',
                'Our Stores',
                'Foundation 43 by Chubbies',
                'Prospective Wholesalers',
                'Careers',
                'Influencer Program',
            ],
        },
    ];
    const renderContent = () => {
        return data.map(item => {
            return <div key={item.title} className="footer-nav-item-wrapper">
                <h4 className="footer-nav-title">
                    {item.title}
                </h4>
                <ul key={item.title} className="footer-nav-list">
                    {item.content.map(content => {
                        return <li key={content} className="footer-nav-item">
                            {content}
                        </li>
                    })}
                </ul>
            </div>

        })
    }
    return (
        <div className='footer-nav'>
            {renderContent()}
            <div className="footer-nav-contact-us">
                <h4 className="footer-nav-title">
                    Need Help?
                </h4>
                <span className="contact-us-info footer-nav-item">
                    We're here to help you with your order!
                </span>
                <div className="contact-us-btns">
                    <button className="phone-contact-btn contact-us-btn">
                        Text (+84) 1756-1950
                    </button>
                    <button className="chat-contact-btn contact-us-btn">
                        Live Chat
                    </button>
                </div>
                <div className="contact-us-hours">
                    Mon-Fri: 8am-5pm PST / Sat-Sun: 9am-1pm PST
                </div>
            </div>
        </div>
    )
}

export default FooterNav