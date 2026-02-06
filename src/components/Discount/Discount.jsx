import React from 'react';
import { motion } from 'framer-motion';
import './Discount.css';

const Discount = () => {
    return (
        <section className="section discount-section">
            <div className="container">
                <motion.div
                    className="discount-banner"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="discount-content">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Let's Don't Miss The 50% Discount &<br />Explore the Beauty of the World
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            We have many special offers especially for you
                        </motion.p>

                        <motion.a
                            href="https://wa.me/919808028085?text=Hello!%20I%20am%20interested%20in%20booking%20a%20room."
                            target="_blank"
                            className="btn btn-discount"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book now
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Discount;
