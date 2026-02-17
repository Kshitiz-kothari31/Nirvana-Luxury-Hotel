import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
    'https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/nirvana_images@main/images/www.jpeg',
    'https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/nirvana_images@main/images/wgw.jpeg',
    'https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/nirvana_images@main/images/wewfw.jpeg',
    'https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/nirvana_images@main/images/sgs.jpeg',
    'https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/nirvana_images@main/images/gwg.jpeg',
    'https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/nirvana_images@main/images/gggwg.jpeg'
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="section gallery" id="gallery">
            <div className="container">
                <div className="section-header text-center">
                    {/* <motion.span
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        PHOTOS
                    </motion.span> */}
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Our Gallery
                    </motion.h2>
                </div>

                <div className="gallery-grid">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            onClick={() => setSelectedImage(img)}
                        >
                            <img src={img} alt={`Gallery ${index + 1}`} />
                            <div className="gallery-overlay">
                                <span>View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedImage} alt="Full Screen" />
                            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                                <X size={32} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
