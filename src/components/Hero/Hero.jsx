import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="overlay"></div>
                {/* Use a high-quality night/modern architecture image */}
                <img
                    src="https://i.pinimg.com/1200x/f3/40/cf/f340cff300c3cc33491f5b911455c164.jpg"
                    alt="Modern Luxury Hotel"
                    className="background-image"
                />
            </div>

            <div className="container hero-content-centered">
                <motion.div
                    className="watermark-text"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    StaysGo
                </motion.div>

                <div className="hero-main-text">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Find Your Perfect Stay<br />at the Best Price
                    </motion.h1>

                    <motion.div
                        className="search-bar-centered"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div className="input-group-centered">
                            <input type="text" placeholder="Search rooms" />
                            <button className="btn-search-centered">
                                Search
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
