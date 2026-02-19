import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        checkIn: '',
        checkOut: '',
        guests: '1 Person'
    });

    const handleBooking = (e) => {
        e.preventDefault();
        const { name, email, checkIn, checkOut, guests } = formData;

        const message = `Hello, I would like to book a stay at Gopal Guest House.
        
Name: ${name}
Email: ${email}
Check-In: ${checkIn}
Check-Out: ${checkOut}
Guests: ${guests}
`;

        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "919808028085"; // Added '91' for India
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        setFormData({
            name: '',
            email: '',
            checkIn: '',
            checkOut: '',
            guests: '1 Person'
        });
    };
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
                    {/* <span className="section-subtitle">CONTACT US</span> */}
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
                    <form className="booking-form" onSubmit={handleBooking}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Check In</label>
                                <input
                                    type="date"
                                    required
                                    value={formData.checkIn}
                                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Check Out</label>
                                <input
                                    type="date"
                                    required
                                    value={formData.checkOut}
                                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <select
                                value={formData.guests}
                                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                            >
                                <option value="1 Person">1 Person</option>
                                <option value="2 People">2 People</option>
                                <option value="3 People">3 People</option>
                                <option value="4+ People">4+ People</option>
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
