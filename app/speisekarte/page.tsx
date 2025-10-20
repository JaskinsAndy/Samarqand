'use client';

import React, { useState } from 'react';
import { germanMenuData } from '@/lib/data/germanMenuData';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, UtensilsCrossed, Leaf, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SpeisekartePage = () => {
  const [activeCategory, setActiveCategory] = useState(germanMenuData[0].id);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-amber-500/20 bg-black/90 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Zurück zur Startseite
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-bold text-white">Samarqand</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-amber-500/20 bg-gradient-to-r from-black to-slate-900 py-16">
        <div className="container mx-auto px-6 text-center md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2">
              <span className="text-sm font-medium text-amber-400">Unsere Speisekarte</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
              Kulinarische Reise nach
              <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Samarqand
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Entdecken Sie die authentischen Aromen der usbekischen Küche,
              sorgfältig zubereitet mit traditionellen Rezepten und frischen Zutaten
            </p>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-600/10 blur-3xl" />
      </div>

      {/* Category Navigation */}
      <div className="sticky top-[88px] z-40 border-b border-amber-500/20 bg-black/95 backdrop-blur-lg">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {germanMenuData.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                    : 'border border-amber-500/30 bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="container mx-auto px-6 py-12 md:px-12 lg:px-20">
        {germanMenuData.map((category, categoryIndex) => (
          <motion.section
            key={category.id}
            id={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="mb-8">
              <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                {category.name}
              </h2>
              <p className="text-gray-400">{category.description}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="group relative overflow-hidden border border-amber-500/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 transition-all hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/20">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Badges */}
                      <div className="absolute left-3 top-3 flex gap-2">
                        {item.popular && (
                          <div className="flex items-center gap-1 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                            <Star className="h-3 w-3" />
                            Beliebt
                          </div>
                        )}
                        {item.vegetarian && (
                          <div className="flex items-center gap-1 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                            <Leaf className="h-3 w-3" />
                            Vegetarisch
                          </div>
                        )}
                      </div>

                      {/* Price Badge */}
                      <div className="absolute bottom-3 right-3 rounded-full bg-black/80 px-4 py-2 backdrop-blur-sm">
                        <span className="text-lg font-bold text-amber-400">{item.price}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="mb-2 text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="border-t border-amber-500/20 bg-gradient-to-r from-slate-900 to-black py-12">
        <div className="container mx-auto px-6 text-center md:px-12 lg:px-20">
          <h3 className="mb-4 text-2xl font-bold text-white">
            Bereit für ein unvergessliches kulinarisches Erlebnis?
          </h3>
          <p className="mb-6 text-gray-400">
            Reservieren Sie jetzt Ihren Tisch und genießen Sie die Aromen von Samarqand
          </p>
          <Link href="/#reservations">
            <Button
              size="lg"
              className="bg-amber-600 text-white shadow-lg shadow-amber-600/30 transition-all hover:bg-amber-700 hover:shadow-xl hover:shadow-amber-600/40"
            >
              Tisch Reservieren
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpeisekartePage;
