'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Flame, Leaf } from 'lucide-react';
import type { MenuItem as MenuItemType } from '@/lib/data/menuData';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="overflow-hidden border-amber-500/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/20">
        {/* Image Container with 3D Effect */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
          />
          
          {/* Badges */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
            {item.popular && (
              <div className="rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                Popular
              </div>
            )}
            {item.vegetarian && (
              <div className="flex items-center gap-1 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                <Leaf className="h-3 w-3" />
                Veg
              </div>
            )}
            {item.spicy && (
              <div className="flex items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                <Flame className="h-3 w-3" />
                Spicy
              </div>
            )}
          </div>

          {/* Price Tag */}
          <div className="absolute bottom-4 right-4 z-20">
            <div className="rounded-lg bg-amber-600 px-4 py-2 font-bold text-white shadow-xl">
              {item.price}
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
            {item.name}
          </h3>
          <p className="text-sm leading-relaxed text-gray-300">
            {item.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MenuItem;
