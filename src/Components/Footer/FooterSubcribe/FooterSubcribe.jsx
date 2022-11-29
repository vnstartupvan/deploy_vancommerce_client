import React from 'react';
import '../FooterSubcribe/FooterSubcribe.css';
function FooterSubcribe() {
    return (
        <div className='footer-subcribe-wrapper'>
            <div className="subscribe__message-block">
                <span className='subcribe-message'>THE WEEKEND AWAITS</span>
                <h6 className='subcribe-tittle'>Sign up now to get alerts for new product drops and rad promotions</h6>
            </div>
            <div className="subscribe__signup-block">
                <form action="">
                    <input type="text" placeholder='Enter your email address' />
                    <button>Subcribe</button>
                </form>
            </div>
        </div>
    )
}

export default FooterSubcribe