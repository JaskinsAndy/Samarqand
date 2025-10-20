'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Standort',
      details: 'Schüttelstraße 5\n1020 Wien, Österreich'
    },
    {
      icon: Phone,
      title: 'Telefon',
      details: '+43 660 907 7777'
    },
    {
      icon: Mail,
      title: 'E-Mail',
      details: 'info@samarqand-vienna.at\nreservierungen@samarqand-vienna.at'
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten',
      details: 'Mo-So: 11:00 - 23:00\nKüche schließt um 22:30'
    }
  ];

  return (
    <section id="contact" className="relative bg-black py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2">
            <span className="text-sm font-medium text-amber-400">Kontakt</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Besuchen Sie
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Samarqand
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-amber-500/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-6 text-center backdrop-blur-sm"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-600/20">
                  <Icon className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{info.title}</h3>
                <p className="whitespace-pre-line text-sm text-gray-300">{info.details}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="overflow-hidden rounded-2xl border border-amber-500/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.8947!2d16.3954!3d48.2177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07b3d3d3d3d3%3A0x3d3d3d3d3d3d3d3d!2sSch%C3%BCttelstra%C3%9Fe%205%2C%201020%20Wien%2C%20Austria!5e0!3m2!1sen!2sat!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
