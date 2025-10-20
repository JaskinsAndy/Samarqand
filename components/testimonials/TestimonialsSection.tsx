'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: 'Отзыв 1'
    },
    {
      rating: 5,
      text: 'Отзыв 2'
    },
    {
      rating: 5,
      text: 'Отзыв 3'
    }
  ];

  return (
    <section className="relative bg-slate-950 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2">
            <span className="text-sm font-medium text-amber-400">Gästebewertungen</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Was unsere
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Gäste sagen
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="mb-6 text-gray-300 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
