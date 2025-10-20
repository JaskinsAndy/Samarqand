'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Mail, Phone, User } from 'lucide-react';

const ReservationSection = () => {
  return (
    <section id="reservations" className="relative bg-gradient-to-b from-black to-slate-950 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2">
            <span className="text-sm font-medium text-amber-400">Tisch Reservieren</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Reservieren Sie Ihr
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Erlebnis
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-2xl border border-amber-500/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-8 backdrop-blur-sm"
        >
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                  <User className="h-4 w-4" />
                  Vollständiger Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-700 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  placeholder="Max Mustermann"
                />
              </div>
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Phone className="h-4 w-4" />
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-gray-700 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  placeholder="+43 XXX XXX XXXX"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                <Mail className="h-4 w-4" />
                E-Mail-Adresse
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-700 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                placeholder="max@beispiel.at"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Calendar className="h-4 w-4" />
                  Datum
                </label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-700 bg-slate-900/50 px-4 py-3 text-white focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
              </div>
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Clock className="h-4 w-4" />
                  Uhrzeit
                </label>
                <input
                  type="time"
                  className="w-full rounded-lg border border-gray-700 bg-slate-900/50 px-4 py-3 text-white focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
              </div>
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Users className="h-4 w-4" />
                  Gäste
                </label>
                <select className="w-full rounded-lg border border-gray-700 bg-slate-900/50 px-4 py-3 text-white focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50">
                  <option>1 Gast</option>
                  <option>2 Gäste</option>
                  <option>3 Gäste</option>
                  <option>4 Gäste</option>
                  <option>5+ Gäste</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Besondere Wünsche
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-gray-700 bg-slate-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                placeholder="Haben Sie besondere Ernährungswünsche oder feiern Sie einen besonderen Anlass?"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-amber-600 text-white shadow-lg shadow-amber-600/30 transition-all hover:bg-amber-700 hover:shadow-xl hover:shadow-amber-600/40"
            >
              Tisch Reservieren
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationSection;
