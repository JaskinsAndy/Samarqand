'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
import { menuData } from '@/lib/data/menuData';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  const activeMenuData = menuData.find(cat => cat.id === activeCategory) || menuData[0];

  return (
    <section id="menu" className="relative min-h-screen bg-gradient-to-b from-black to-slate-950 py-20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(251 191 36) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2">
            <span className="text-sm font-medium text-amber-400">Our Menu</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Culinary
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Discover authentic Uzbek flavors passed down through generations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative overflow-hidden rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/50'
                  : 'border border-amber-500/30 bg-white/5 text-gray-300 hover:border-amber-500/50 hover:bg-white/10'
              }`}
            >
              <span className="relative z-10">{category.name}</span>
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        <motion.p
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center text-gray-400"
        >
          {activeMenuData.description}
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activeMenuData.items.map((item, index) => (
            <MenuItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-600/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-600/10 blur-3xl" />
    </section>
  );
};

export default MenuSection;
