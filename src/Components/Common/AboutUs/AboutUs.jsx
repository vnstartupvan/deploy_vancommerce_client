import React from 'react';
import { Link } from 'react-router-dom';
import '../AboutUs/AboutUs.css';

function AboutUs() {
    return (
        <div className='about-us-wrapper'>
            <div className="about-us-content">
                <h1 className="about-us-title">
                    Welcome to our store. Here is what we believe.
                </h1>
                <ul className="about-us-list">
                    <li className="about-us-item">
                        We believe in the weekend

                    </li>
                    <li className="about-us-item">
                        We believe that “short shorts” is a redundancy
                    </li>
                    <li className="about-us-item">
                        In fact, we believe that 4 inch inseam shorts, 5 inch inseam shorts, and 7 inch inseam shorts are just about all you need.
                    </li>
                    <li className="about-us-item">
                        We believe in swim trunks, swim shorts, bathing suits, swim suits or whatever the heck else you wanna call ‘em because we believe that if you’ve got a pair of those on, well, you must be doing something right
                    </li>
                    <li className="about-us-item">
                        We believe in the right your quads have to a life of freedom and sunshine
                    </li>
                    <li className="about-us-item">
                        We believe in comfort
                    </li>
                    <li className="about-us-item">
                        We believe in our fathers - they led the way; we are but revolutionaries standing on the shoulders of amazingly mustachio’d giants in proper length shorts
                    </li>
                    <li className="about-us-item">
                        We believe sweat shorts are the greatest innovation in lounging since hammock cup holders were invented in the early 1780s
                    </li>
                    <li className="about-us-item">
                        And we damn sure believe in Friday at Five
                    </li>
                </ul>
                <h4>
                    <Link className='collection-link' to={'/collections/mr-simple'}>Explore our collection: Mr Simple {'>'} </Link>
                </h4>
                <h4 className="team-text">
                    - Team Van Pham
                </h4>
            </div>
        </div>
    )
}

export default AboutUs