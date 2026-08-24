import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, MapPin, Sparkles, Building2, CheckCircle2, ChevronRight } from 'lucide-react';
import { COMPANY_DATA, TAMIL_NADU_CITIES } from '../data/companyData';
import { findNearestTamilNaduCity } from '../utils/geolocation';
import { trackConversionEvent } from '../utils/analytics';

interface HeroSectionProps {
  onOpenEstimateModal: () => void;
  onOpenCostDisclaimer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEstimateModal, onOpenCostDisclaimer }) => {
  // Default static location value is always "Tamil Nadu" for SEO & zero layout shift
  const [detectedCity, setDetectedCity] = useState<string>('Tamil Nadu');
  const [locationStatus, setLocationStatus] = useState<'idle' | 'detected' | 'manual'>('idle');
  const [isCitySelectorOpen, setIsCitySelectorOpen] = useState<boolean>(false);

  useEffect(() => {
    // Attempt non-blocking browser geolocation if supported
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const matched = findNearestTamilNaduCity(position.coords.latitude, position.coords.longitude);
          if (matched) {
            setDetectedCity(matched.name);
            setLocationStatus('detected');
          }
        },
        (error) => {
          // Gracefully retain "Tamil Nadu" without error popup
          console.debug('Geolocation fallback used default Tamil Nadu:', error.message);
        },
        { timeout: 8000, maximumAge: 600000 }
      );
    }
  }, []);

  const handleSelectCity = (cityName: string) => {
    setDetectedCity(cityName);
    setLocationStatus('manual');
    setIsCitySelectorOpen(false);
  };

  return (
    <section className="relative bg-[#0b1e36] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden blueprint-grid-dark" id="home">
      {/* Background Architectural Ambient Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1e36]/80 via-[#0b1e36]/90 to-[#0b1e36] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#c2841e]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#1e3a5f]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content & Conversion Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow & Dynamic Location Indicator */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#c2841e]/20 text-[#fcd34d] border border-[#c2841e]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#fbbf24]" />
                <span>Established 1998 • Civil Engineers & Builders</span>
              </span>

              {/* Location Badge with Interactive Selector */}
              <div className="relative inline-block">
                <button
                  onClick={() => setIsCitySelectorOpen(!isCitySelectorOpen)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 hover:bg-white/15 text-[#cbd5e1] border border-white/10 transition-colors"
                  title="Click to change your Tamil Nadu city"
                  id="hero-city-selector-btn"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Serving {detectedCity}</span>
                  <ChevronRight className="w-3 h-3 text-[#94a3b8]" />
                </button>

                {/* City Selector Dropdown */}
                {isCitySelectorOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-[#071322] border border-[#1e293b] rounded-xl shadow-2xl z-50 p-2 max-h-60 overflow-y-auto">
                    <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#94a3b8] border-b border-[#1e293b]">
                      Select Tamil Nadu City
                    </div>
                    <button
                      onClick={() => handleSelectCity('Tamil Nadu')}
                      className="w-full text-left px-3 py-1.5 text-xs text-white hover:bg-white/10 rounded flex items-center justify-between"
                    >
                      <span>Statewide (Tamil Nadu)</span>
                      {detectedCity === 'Tamil Nadu' && <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />}
                    </button>
                    {TAMIL_NADU_CITIES.map((city) => (
                      <button
                        key={city.name}
                        onClick={() => handleSelectCity(city.name)}
                        className="w-full text-left px-3 py-1.5 text-xs text-[#cbd5e1] hover:bg-white/10 hover:text-white rounded flex items-center justify-between"
                      >
                        <span>{city.name}</span>
                        {detectedCity === city.name && <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Dynamic Personalized H1 */}
            <div className="space-y-3">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]" id="hero-main-h1">
                Best Construction Company in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#fcd34d]">
                  {detectedCity}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#cbd5e1] leading-relaxed max-w-2xl">
                Jayam Builders provides architectural planning, engineering drawings, residential construction, commercial construction, approvals, and interior solutions from one experienced team.
              </p>
            </div>

            {/* Pricing Highlight Card with Disclaimer */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#122b4d]/80 border border-[#1e3a5f] shadow-inner space-y-2">
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#93c5fd]">
                  Residential Construction:
                </span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#f59e0b]">
                  From ₹1,650/sq.ft*
                </span>
                <span className="text-xs text-[#cbd5e1]">of built-up area</span>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                *Conditions apply. Final construction cost varies depending on location, site conditions, structural requirements, built-up area, design complexity, specifications, materials, finishing selections, and project scope.{' '}
                <button
                  onClick={onOpenCostDisclaimer}
                  className="text-[#38bdf8] hover:underline font-medium"
                >
                  View full cost factors
                </button>
              </p>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <button
                onClick={() => {
                  trackConversionEvent('estimate_form_start', { source: 'hero_primary_cta' });
                  onOpenEstimateModal();
                }}
                className="bg-gradient-to-r from-[#c2841e] to-[#d97706] hover:from-[#b47818] hover:to-[#c2841e] text-white font-semibold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-[#c2841e]/20 hover:shadow-xl transition-all flex items-center justify-center gap-2.5"
                id="hero-request-estimate-btn"
              >
                <span>Request Construction Estimate</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_DATA.whatsappRaw}?text=${encodeURIComponent('Hello Jayam Builders, I am looking for a construction estimate in ' + detectedCity + '.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversionEvent('whatsapp_click', { location: 'hero_secondary_cta' })}
                className="bg-[#064e3b] hover:bg-[#065f46] text-[#34d399] border border-[#10b981]/40 font-semibold text-base px-5 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_DATA.phoneRaw}`}
                onClick={() => trackConversionEvent('call_click', { location: 'hero_call_cta' })}
                className="bg-white/5 hover:bg-white/10 text-[#e2e8f0] border border-white/10 font-semibold text-sm px-4 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                id="hero-call-btn"
              >
                <Phone className="w-4 h-4 text-[#c2841e]" />
                <span>Call {COMPANY_DATA.phone}</span>
              </a>
            </div>

            {/* Verifiable Compact Trust Indicators */}
            <div className="pt-4 border-t border-[#1e293b] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#cbd5e1]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10b981] shrink-0" />
                <span className="font-medium">Established 1998</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                <span className="font-medium">25+ Yrs Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#10b981] shrink-0" />
                <span className="font-medium">Residential & Commercial</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#10b981] shrink-0" />
                <span className="font-medium">Design to Handover</span>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Photography Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer frame container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-[#122b4d]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Contemporary premium residential house construction by Jayam Builders in Tamil Nadu"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  width="600"
                  height="460"
                  fetchPriority="high"
                />
                
                {/* Floating Architectural Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0b1e36]/90 backdrop-blur-md p-4 rounded-xl border border-white/15 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#93c5fd] font-semibold">
                        Integrated Execution
                      </p>
                      <p className="text-sm font-bold text-white">
                        Architecture • Structural Drawings • Civil Work
                      </p>
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-bold bg-[#c2841e] text-white rounded-md">
                      Est. 1998
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Mini Stat Pill */}
              <div className="absolute -top-4 -left-4 bg-[#071322] border border-[#c2841e]/50 text-white px-4 py-2 rounded-xl shadow-xl hidden sm:flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping" />
                <span className="text-xs font-semibold">Madurai HQ • Statewide Delivery</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
