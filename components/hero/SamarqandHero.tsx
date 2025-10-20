'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, UtensilsCrossed } from 'lucide-react';

const SamarqandHero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Samarqand"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="h-8 w-8 text-amber-500" />
            <span className="text-2xl font-bold text-white">Samarqand</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="/speisekarte" className="text-sm font-medium text-white/90 transition-colors hover:text-white">
              Speisekarte
            </a>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-white/90 transition-colors hover:text-white">
              Über Uns
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-white/90 transition-colors hover:text-white">
              Kontakt
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-1 items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
              <span className="text-sm font-medium text-amber-200">Authentische Usbekische Küche</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                Erleben Sie die
                <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Aromen von Samarqand
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-white/80 md:text-xl">
                Begeben Sie sich auf eine Reise entlang der alten Seidenstraße mit unseren traditionellen Gerichten, mit Leidenschaft zubereitet und mit der Herzlichkeit usbekischer Gastfreundschaft serviert.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="/speisekarte">
                <Button
                  size="lg"
                  className="group bg-amber-600 text-white shadow-lg shadow-amber-600/30 transition-all hover:bg-amber-700 hover:shadow-xl hover:shadow-amber-600/40"
                >
                  Speisekarte ansehen
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button
                onClick={() => scrollToSection('reservations')}
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
              >
                Tisch Reservieren
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">2+</div>
                <div className="text-sm text-white/70">Jahre Exzellenz</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-white/70">Traditionelle Gerichte</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">4000+</div>
                <div className="text-sm text-white/70">Zufriedene Gäste</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pb-8">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/60">Scrollen zum Erkunden</span>
            <div className="h-12 w-6 rounded-full border-2 border-white/30">
              <div className="mx-auto mt-2 h-2 w-2 animate-bounce rounded-full bg-white/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute left-0 top-1/2 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-amber-800/20 blur-3xl" />
    </div>
  );
};

export default SamarqandHero;
