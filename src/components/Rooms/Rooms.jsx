import { motion } from 'framer-motion';
import { Bed, Users, Square } from 'lucide-react';
import './Rooms.css';

const roomsData = [
    {
        id: 1,
        name: 'Luxury Suite',
        price: '$350',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        size: '50m²',
        guests: '2 Guests',
        beds: '1 King Bed'
    },
    {
        id: 2,
        name: 'Deluxe Room',
        price: '$250',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        size: '35m²',
        guests: '2 Guests',
        beds: '1 Queen Bed'
    },
    {
        id: 3,
        name: 'Family Suite',
        price: '$450',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        size: '65m²',
        guests: '4 Guests',
        beds: '2 Queen Beds'
    }
];

const Rooms = () => {
    return (
        <section className="section rooms" id="rooms">
            <div className="container">
                <div className="section-header text-center">
                    <motion.span
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        OUR ACCOMMODATIONS
                    </motion.span>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Luxurious Rooms
                    </motion.h2>
                </div>

                <div className="rooms-grid">
                    {roomsData.map((room, index) => (
                        <motion.div
                            key={room.id}
                            className="room-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <div className="room-image">
                                <img src={room.image} alt={room.name} />
                                <div className="price-tag">{room.price}<span>/night</span></div>
                            </div>
                            <div className="room-details">
                                <h3>{room.name}</h3>
                                <div className="room-meta">
                                    <span><Square size={16} /> {room.size}</span>
                                    <span><Users size={16} /> {room.guests}</span>
                                    <span><Bed size={16} /> {room.beds}</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.</p>
                                <a href="#contact" className="btn-link">Book Now &rarr;</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rooms;
