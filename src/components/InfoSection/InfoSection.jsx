import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './InfoSection.css';

const InfoSection = () => {
    return (
        <section className="info-section">
            <div className="container info-container">
                <div className="info-left">
                    <motion.span
                        className="info-subtitle"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        DISCOVER
                    </motion.span>
                    <motion.h2
                        className="info-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Experience <span className="highlight">The Best</span><br />
                        Comfortable Stay
                    </motion.h2>
                </div>

                <div className="info-right">
                    <motion.a
                        href="#contact"
                        className="contact-link"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Contact Us
                        <span className="icon-circle">
                            <ArrowUpRight size={18} />
                        </span>
                    </motion.a>
                    <motion.a
                        href="#rooms"
                        className="btn info-btn"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        View Rooms
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
