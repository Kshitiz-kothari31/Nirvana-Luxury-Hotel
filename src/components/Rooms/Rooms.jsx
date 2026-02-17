import { motion } from 'framer-motion';
import { Bed, Users, Square } from 'lucide-react';
import './Rooms.css';

const roomsData = [
    {
        id: 1,
        name: 'Luxury Suite',
        price: '$350',
        image: 'https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/nirvana_images@main/images/gwg.jpeg',
        size: '50m²',
        guests: '2 Guests',
        beds: '1 King Bed'
    },
    {
        id: 2,
        name: 'Deluxe Room',
        price: '$250',
        image: 'https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/nirvana_images@main/images/sgs.jpeg',
        size: '35m²',
        guests: '2 Guests',
        beds: '1 Queen Bed'
    },
    {
        id: 3,
        name: 'Family Suite',
        price: '$450',
        image: 'https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/nirvana_images@main/images/wfw.jpeg',
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
                    {/* <motion.span
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        OUR ACCOMMODATIONS
                    </motion.span> */}
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
                                <a href={`https://wa.me/919808028085?text=Hello! I am interested in booking the ${room.name}.`} target="_blank" className="btn-link">Book Now &rarr;</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rooms;
