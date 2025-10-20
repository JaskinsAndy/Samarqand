'use client';

import React from 'react';
import { UtensilsCrossed, Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-black border-t border-amber-500/20">
      <div className="container mx-auto px-6 py-12 md:px-12 lg:px-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <UtensilsCrossed className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold text-white">Samarqand</span>
            </div>
            <p className="mb-4 text-gray-400">
              Seit 2008 bringen wir authentische usbekische Küche ins Herz von Wien.
            </p>
            <div className="flex gap-4">
              <a href="#" className="rounded-full bg-amber-600/20 p-2 text-amber-500 transition-colors hover:bg-amber-600 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/samarkand.wien/?hl=en" target="_blank" rel="noopener noreferrer" className="rounded-full bg-amber-600/20 p-2 text-amber-500 transition-colors hover:bg-amber-600 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:info@samarqand-vienna.at" className="rounded-full bg-amber-600/20 p-2 text-amber-500 transition-colors hover:bg-amber-600 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li><a href="/speisekarte" className="text-gray-400 transition-colors hover:text-amber-500">Speisekarte</a></li>
              <li><a href="#about" className="text-gray-400 transition-colors hover:text-amber-500">Über Uns</a></li>
              <li><a href="#reservations" className="text-gray-400 transition-colors hover:text-amber-500">Reservierungen</a></li>
              <li><a href="#contact" className="text-gray-400 transition-colors hover:text-amber-500">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Öffnungszeiten</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Montag - Sonntag</li>
              <li className="text-amber-500">11:00 - 23:00</li>
              <li className="text-sm">Küche schließt um 22:30</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Standort</h3>
            <p className="text-gray-400">
              Schüttelstraße 5<br />
              1020 Wien<br />
              Österreich
            </p>
            <p className="mt-4 text-gray-400">
              <a href="tel:+436609077777" className="hover:text-amber-500">
                +43 660 907 7777
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 Samarqand Restaurant Wien. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
