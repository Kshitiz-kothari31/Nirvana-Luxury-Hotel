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
                            <img src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/nirvana_images@main/images/gggwg.jpeg" alt="Mountain Landscape" />
                        </motion.div>
                        <motion.div
                            className="collage-item item-2"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <img src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/nirvana_images@main/images/wgw.jpeg" alt="Tropical Beach" />
                        </motion.div>
                        <motion.div
                            className="collage-item item-3"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <img src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/nirvana_images@main/images/wewfw.jpeg" alt="Ocean View" />
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
                        About us —
                    </motion.span>

                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Your Spiritual <br /> Home in the <br />Heart of Rishikesh
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Experience the serenity of the World Capital of Yoga. Our guest house offers a calm sanctuary where traditional Indian hospitality meets modern comfort. Whether you're here to deepen your practice at our Yoga Hall or simply to find peace by the Ganges, we provide the perfect space for your soul to rest.
                    </motion.p>

                    <div className="stats-container">
                        <motion.div
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <h3>⭐⭐⭐⭐⭐</h3>
                            <p>Our Rating</p>
                        </motion.div>
                        <motion.div
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                        >
                            <h3>Nutritious</h3>
                            <p>dining area</p>
                        </motion.div>
                        <motion.div
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                        >
                            <h3>Meditation</h3>
                            <p>& Yoga Hall</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
