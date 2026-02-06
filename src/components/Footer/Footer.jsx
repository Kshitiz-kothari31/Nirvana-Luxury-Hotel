import { Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <div className="logo footer-logo">
                        <a href="#">Nirvana <span>Hotel</span></a>
                    </div>
                    <p>
                        Experience the art of hospitality. We are dedicated to providing
                        unparalleled service and comfort to make your stay unforgettable.
                    </p>
                    <div className="social-links">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#rooms">Rooms</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Dining</a></li>
                        <li><a href="#">Spa & Wellness</a></li>
                        <li><a href="#">Fitness Center</a></li>
                        <li><a href="#">Private Events</a></li>
                        <li><a href="#">Transportation</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Mail us for more info!</h4>
                    <p>Subscribe to our newsletter for latest updates and offers.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Email Address" />
                        <button type="submit">Mail</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Nirvana Hotel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
