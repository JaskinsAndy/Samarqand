'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ImageGallery = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800', title: 'Traditioneller Plov' },
    { url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800', title: 'Unser Ambiente' },
    { url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800', title: 'Frische Zutaten' },
    { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', title: 'Kulinarisches Erlebnis' },
    { url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800', title: 'Grill-Perfektion' },
    { url: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800', title: 'Handgemachte Manti' }
  ];

  return (
    <section className="relative bg-black py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2">
            <span className="text-sm font-medium text-amber-400">Galerie</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Visuelle
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Köstlichkeiten
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-80 overflow-hidden rounded-xl"
            >
              <img
                src={image.url}
                alt={image.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
