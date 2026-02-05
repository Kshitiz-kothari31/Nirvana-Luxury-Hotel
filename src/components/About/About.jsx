import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section className="section about" id="about">
            <div className="container about-container">
                <div className="about-image">
                    <div className="image-collage">
                        <motion.div 
                            className="collage-item item-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Mountain Landscape" />
                        </motion.div>
                        <motion.div 
                            className="collage-item item-2"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <img src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Tropical Beach" />
                        </motion.div>
                        <motion.div 
                            className="collage-item item-3"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Ocean View" />
                        </motion.div>
                    </div>
                </div>

                <div className="about-text">
                    <motion.span
                        className="section-subtitle"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        About —
                    </motion.span>

                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        We Recommend<br />Beautiful Destinations<br />Every Month
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Let's chose your dream destinations here we provide many destinations and we offer the
                        best destinations every week.
                    </motion.p>

                    <div className="stats-container">
                        <motion.div 
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <h3>2000+</h3>
                            <p>Our Explorers</p>
                        </motion.div>
                        <motion.div 
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                        >
                            <h3>100+</h3>
                            <p>Destinations</p>
                        </motion.div>
                        <motion.div 
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                        >
                            <h3>20+</h3>
                            <p>Years Experience</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
