import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from  'react-icons/fa';
import Payment from "../../assets/payments.png";
const Footer = () => {
    return( 
    <footer className="footer">
    <div className="footer-content">
        <div className="col">
            <div className="title">About</div>
            <div className="text">
            While we're firm believers in the idea that any bike that you 
            take adventures on can be an adventure bike, for our purposes 
            we're sticking to bikes in our All The Adventure Bikes series  
            manufacturers file categories.</div>
        </div>
        <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
                <FaLocationArrow/>
                <div className="text">
                    Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha,
                    Kerala, 688006
                </div>
            </div>
            <div className="c-item">
                <FaMobileAlt/>
                <div className="text">Phone: 0123 456</div>
            </div>
            <div className="c-item">
                <FaEnvelope/>
                <div className="text">Email: shop.freak@abc.com</div>
            </div>
        </div>
        <div className="col">
            <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">Wireless Earbuds</span>
            <span className="text">Home Theatre</span>
            <span className="text">Projectors</span>
        </div>
        <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms & Conditions</span>
            <span className="text">Contact Us</span>
        </div>
    </div>
    <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                SHOPFREAK 2024 CREATED BY SKM. PREMIUM E-COMMERCE
                SOLUTIONS.
            </div>
            <img src={Payment}/>
        </div>
    </div>
    </footer>
    );
};

export default Footer;
