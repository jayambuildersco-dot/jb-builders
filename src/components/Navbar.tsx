import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { trackConversionEvent } from '../utils/analytics';

interface NavbarProps {
  onOpenEstimateModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimateModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Cost', href: '#cost' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Service Areas', href: '#service-areas' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (name: string) => {
    setMobileMenuOpen(false);
    trackConversionEvent('service_click', { action: 'nav_navigate', item: name });
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0b1e36]/95 backdrop-blur-md shadow-md border-b border-[#1e293b]'
          : 'bg-[#0b1e36] border-b border-[#132c4a]'
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tagline */}
          <a
            href="#home"
            className="flex items-center gap-3.5 group"
            onClick={() => handleNavClick('Home')}
            id="brand-logo-link"
          >
            <div className="relative bg-white/95 p-1.5 rounded-lg border border-[#c2841e]/30 shadow-sm group-hover:border-[#c2841e] transition-colors">
              <img
                src={COMPANY_DATA.logoUrl}
                alt="Jayam Builders Official Logo - Civil Engineers & Builders Tamil Nadu"
                className="h-10 w-auto object-contain"
                width="140"
                height="48"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-[#eab308] transition-colors">
                JAYAM BUILDERS
              </span>
              <span className="text-[11px] font-medium tracking-wider text-[#94a3b8] uppercase">
                Est. 1998 • Civil Engineers
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className="px-3 py-2 text-sm font-medium text-[#cbd5e1] hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_DATA.whatsappRaw}?text=${encodeURIComponent('Hi Jayam Builders, I would like to discuss my construction plan.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversionEvent('whatsapp_click', { location: 'navbar' })}
              className="p-2.5 text-[#34d399] hover:bg-[#071322] border border-[#10b981]/30 hover:border-[#10b981] rounded-lg transition-colors flex items-center justify-center"
              title="Chat on WhatsApp"
              id="navbar-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => {
                trackConversionEvent('estimate_form_start', { source: 'navbar_cta' });
                onOpenEstimateModal();
              }}
              className="bg-gradient-to-r from-[#c2841e] to-[#d97706] hover:from-[#b47818] hover:to-[#c2841e] text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2"
              id="navbar-estimate-cta"
            >
              <span>Request an Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#cbd5e1] hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#071322] border-b border-[#1e293b] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className="px-3 py-2.5 text-base font-medium text-[#cbd5e1] hover:text-white hover:bg-white/5 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#1e293b] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                trackConversionEvent('estimate_form_start', { source: 'mobile_drawer' });
                onOpenEstimateModal();
              }}
              className="w-full bg-[#c2841e] hover:bg-[#b47818] text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-center"
            >
              <span>Request Construction Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${COMPANY_DATA.phoneRaw}`}
                onClick={() => trackConversionEvent('call_click', { location: 'mobile_drawer' })}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#1e293b] text-white rounded-lg text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-[#c2841e]" />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_DATA.whatsappRaw}?text=${encodeURIComponent('Hello Jayam Builders, I would like to get a quote.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversionEvent('whatsapp_click', { location: 'mobile_drawer' })}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#064e3b] text-[#34d399] rounded-lg text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
