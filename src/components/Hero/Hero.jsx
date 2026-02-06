import { motion } from 'framer-motion';
import { Plane, MapPin, Calendar } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                {/* Left Content */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="subtitle"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <Plane size={20} className="subtitle-icon" />
                        <span>Explore the World —</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Discover The<br />Best Destinations<br />In The World
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Let's find you dream destinations here we will recommend you a
                        beautiful place and a cheap trip with your beloved family.
                    </motion.p>

                    <motion.div
                        className="search-bar"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <div className="input-group">
                            <div className="icon-wrapper">
                                <MapPin size={20} color="#ff7b29" />
                            </div>
                            <div className="input-content">
                                <label>Location</label>
                                <input type="text" placeholder="Where are you going?" />
                            </div>
                        </div>

                        <div className="divider"></div>

                        <div className="input-group">
                            <div className="icon-wrapper">
                                <Calendar size={20} color="#ff7b29" />
                            </div>
                            <div className="input-content">
                                <label>Select Date</label>
                                <input type="text" placeholder="03 August 2022" />
                            </div>
                        </div>

                        <a href="https://wa.me/919808028085?text=Hello!%20I%20am%20interested%20in%20booking%20a%20room." target="_blank" className="btn-search">
                            Book now
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Content - Images */}
                <div className="hero-images">
                    <motion.div
                        className="hero-collage"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Top Image (Balloon) */}
                        <div className="hero-img-wrapper img-1">
                            <img src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Hot Air Balloon" />
                        </div>

                        {/* Middle Right Image (Beach) */}
                        <div className="hero-img-wrapper img-2">
                            <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Maldives Beach" />
                        </div>

                        {/* Bottom Left Image (Forest/Adventure) */}
                        <div className="hero-img-wrapper img-3">
                            <img src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Mountain View" />
                        </div>

                        {/* Bottom Right Image (Hiker) */}
                        <div className="hero-img-wrapper img-4">
                            <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Hiker" />
                        </div>

                        {/* Floating Badge 1 (100+ Destinations) */}
                        <motion.div
                            className="floating-badge badge-destinations"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <strong>100+ Destinations</strong>
                            <p>More than 100 Travelers use this platform</p>
                        </motion.div>

                        {/* Floating Badge 2 (Verified) */}
                        <motion.div
                            className="floating-badge badge-verified"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <strong>100%</strong>
                            <p>Verified</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
