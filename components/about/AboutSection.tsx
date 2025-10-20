'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Exzellenz seit 2008',
      description: 'Seit über 15 Jahren bringen wir authentische usbekische Traditionen nach Wien'
    },
    {
      icon: Heart,
      title: 'Mit Liebe gemacht',
      description: 'Jedes Gericht mit Leidenschaft nach traditionellen Familienrezepten zubereitet'
    },
    {
      icon: Users,
      title: 'Familiengeführt',
      description: 'Eine warme, einladende Atmosphäre, die sich wie Zuhause anfühlt'
    },
    {
      icon: Sparkles,
      title: 'Frische Zutaten',
      description: 'Nur die feinsten, frischesten Zutaten in jedem Gericht'
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-black py-20">
      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2">
              <span className="text-sm font-medium text-amber-400">Unsere Geschichte</span>
            </div>

            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Ein Geschmack des
              <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                alten Samarqand
              </span>
            </h2>

            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Willkommen bei Samarqand, wo das reiche kulinarische Erbe Usbekistans auf das Herz Wiens trifft. Unser Restaurant ist mehr als nur ein Ort zum Essen – es ist eine Reise durch die alte Seidenstraße.
              </p>

              <p className="leading-relaxed">
                Gegründet im Jahr 2008 von der Familie Rahimov, bringen wir Ihnen authentische Rezepte, die über Generationen weitergegeben wurden. Jedes Gericht erzählt eine Geschichte der lebendigen Kultur Usbekistans, von den geschäftigen Basaren Taschkents bis zu den historischen Straßen Samarqands.
              </p>

              <p className="leading-relaxed">
                Unsere Köche, ausgebildet in traditionellen usbekischen Kochtechniken, verwenden nur die feinsten Zutaten, um die Aromen nachzubilden, die Familien seit Jahrhunderten erfreuen. Jede Mahlzeit wird mit derselben Sorgfalt und Aufmerksamkeit zubereitet, wie es in einem usbekischen Zuhause der Fall wäre.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-lg border border-amber-500/20 bg-white/5 p-4 text-center backdrop-blur-sm"
                  >
                    <Icon className="mx-auto mb-2 h-8 w-8 text-amber-500" />
                    <p className="text-xs font-semibold text-white">{feature.title}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800"
                alt="Restaurant Interior"
                className="h-full w-full object-cover"
              />
              
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="rounded-lg border border-white/20 bg-black/60 p-6 backdrop-blur-md">
                  <h3 className="mb-2 text-2xl font-bold text-white">Erleben Sie echte Gastfreundschaft</h3>
                  <p className="text-gray-300">
                    Besuchen Sie uns für ein unvergessliches kulinarisches Erlebnis, bei dem Tradition auf Herzlichkeit trifft
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
    </section>
  );
};

export default AboutSection;
