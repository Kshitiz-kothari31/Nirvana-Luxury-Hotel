import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="logo">
                    <a href="#">Nirvana<span> Hotel</span></a>
                </div>

                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#rooms" onClick={() => setIsOpen(false)}>Rooms</a></li>
                    <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
                    <li><a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a></li>
                    <li><a href="#contact" className="btn-nav" onClick={() => setIsOpen(false)}>Book Now</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
