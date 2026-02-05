import { motion } from 'framer-motion';
import { Wifi, Utensils, Dumbbell, Waves, Car, Sparkles } from 'lucide-react';
import './Services.css';

const servicesData = [
    { icon: <Wifi size={40} />, title: 'Free Wifi', desc: 'High-speed internet access throughout the hotel.' },
    { icon: <Utensils size={40} />, title: 'Restaurant', desc: 'Gourmet dining experience with top chefs.' },
    { icon: <Waves size={40} />, title: 'Swimming Pool', desc: 'Relax in our temperature-controlled pool.' },
    { icon: <Dumbbell size={40} />, title: 'Fitness Center', desc: 'State-of-the-art gym equipment for you.' },
    { icon: <Sparkles size={40} />, title: 'Spa & Wellness', desc: 'Rejuvenate your body and mind at our spa.' },
    { icon: <Car size={40} />, title: 'Free Parking', desc: 'Secure and complimentary parking space.' }
];

const Services = () => {
    return (
        <section className="section services" id="services">
            <div className="container">
                <div className="section-header text-center">
                    <motion.span
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        OUR SERVICES
                    </motion.span>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Explore Our Amenities
                    </motion.h2>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
