'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, UtensilsCrossed, Menu, X } from 'lucide-react';

const SamarqandHero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Samarqand"
          className="h-full w-full object-cover object-[50%_30%] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 md:from-black/70 md:via-black/60 md:to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent md:from-black/50 md:via-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="h-7 w-7 sm:h-8 sm:w-8 text-amber-500" />
            <span className="text-xl sm:text-2xl font-bold text-white">Samarqand</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            <a href="/speisekarte" className="text-sm font-medium text-white/90 transition-colors hover:text-white min-h-[44px] flex items-center">
              Speisekarte
            </a>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-white/90 transition-colors hover:text-white min-h-[44px] flex items-center">
              Ueber Uns
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-white/90 transition-colors hover:text-white min-h-[44px] flex items-center">
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[64px] left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-amber-500/20 z-50">
            <div className="flex flex-col px-4 py-4 space-y-2">
              <a
                href="/speisekarte"
                className="text-base font-medium text-white/90 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Speisekarte
              </a>
              <button
                onClick={() => scrollToSection('about')}
                className="text-base font-medium text-white/90 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors min-h-[44px] flex items-center text-left"
              >
                Ueber Uns
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-base font-medium text-white/90 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors min-h-[44px] flex items-center text-left"
              >
                Kontakt
              </button>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="flex flex-1 items-start justify-center px-4 pt-16 pb-12 sm:items-center sm:px-6 sm:py-8 md:px-12 lg:px-20">
          <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl space-y-5 sm:space-y-8">
            {/* Badge */}
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-2 sm:mx-0 sm:px-4 backdrop-blur-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
              <span className="text-xs sm:text-sm font-medium text-amber-200">Authentische Usbekische Kueche</span>
            </div>

            {/* Heading */}
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white">
                Erleben Sie die
                <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Aromen von Samarqand
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-balance text-base sm:text-lg md:text-xl text-white/80 leading-relaxed sm:mx-0">
                Begeben Sie sich auf eine Reise entlang der alten Seidenstrasse mit unseren traditionellen Gerichten, mit Leidenschaft zubereitet und mit der Herzlichkeit usbekischer Gastfreundschaft serviert.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4 sm:justify-start">
              <a href="/speisekarte" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto bg-amber-600 text-white shadow-lg shadow-amber-600/30 transition-all hover:bg-amber-700 hover:shadow-xl hover:shadow-amber-600/40 min-h-[48px] text-base sm:text-sm px-6 sm:px-8"
                >
                  Speisekarte ansehen
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button
                onClick={() => scrollToSection('reservations')}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white min-h-[48px] text-base sm:text-sm px-6 sm:px-8"
              >
                Tisch Reservieren
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 pt-6 sm:justify-start sm:gap-8 sm:pt-8">
              <div className="flex-1 min-w-[100px] space-y-1 text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">2+</div>
                <div className="text-xs sm:text-sm text-white/70">Jahre Exzellenz</div>
              </div>
              <div className="flex-1 min-w-[100px] space-y-1 text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
                <div className="text-xs sm:text-sm text-white/70">Traditionelle Gerichte</div>
              </div>
              <div className="flex-1 min-w-[100px] space-y-1 text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">4000+</div>
                <div className="text-xs sm:text-sm text-white/70">Zufriedene Gaeste</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden sm:flex justify-center pb-8">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/60">Scrollen zum Erkunden</span>
            <div className="h-12 w-6 rounded-full border-2 border-white/30">
              <div className="mx-auto mt-2 h-2 w-2 animate-bounce rounded-full bg-white/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute left-0 top-1/2 z-0 h-64 w-64 sm:h-96 sm:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-64 w-64 sm:h-96 sm:w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-amber-800/20 blur-3xl" />
    </div>
  );
};

export default SamarqandHero;
