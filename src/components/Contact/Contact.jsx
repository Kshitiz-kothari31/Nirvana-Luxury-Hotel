import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="section contact" id="contact">
            <div className="container contact-container">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">CONTACT US</span>
                    <h2 className="section-title">Get in Touch</h2>
                    <p>Ready to experience the best? Book your stay today or contact us for any inquiries.</p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="icon-box"><MapPin size={24} /></div>
                            <div>
                                <h4>Location</h4>
                                <p>Gopal Guest House, Rishikesh City</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon-box"><Mail size={24} /></div>
                            <div>
                                <h4>Email</h4>
                                <p>info@luxuryhotel.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon-box"><Phone size={24} /></div>
                            <div>
                                <h4>Contact us</h4>
                                <p>+19 9808028085</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="booking-form-wrapper"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3>Book Your Stay</h3>
                    <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Check In</label>
                                <input type="date" required />
                            </div>
                            <div className="form-group">
                                <label>Check Out</label>
                                <input type="date" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <select>
                                <option>Number of Guests</option>
                                <option>1 Person</option>
                                <option>2 People</option>
                                <option>3 People</option>
                                <option>4+ People</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-block">Confirm Booking</button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
