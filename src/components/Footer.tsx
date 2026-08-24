import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { COMPANY_DATA, TAMIL_NADU_CITIES } from '../data/companyData';
import { trackConversionEvent } from '../utils/analytics';

export const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false);
  const [showTermsModal, setShowTermsModal] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071322] text-[#94a3b8] border-t border-[#1e293b] pt-16 pb-24 sm:pb-16" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1e293b]">
          
          {/* Column 1: Brand & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/95 p-1.5 rounded-lg border border-[#c2841e]/30 shadow-sm inline-block">
                <img
                  src={COMPANY_DATA.logoUrl}
                  alt="Jayam Builders Logo"
                  className="h-9 w-auto object-contain"
                  width="130"
                  height="44"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white block">JAYAM BUILDERS</span>
                <span className="text-[10px] uppercase font-bold text-[#c2841e] tracking-wider">Civil Engineers & Builders</span>
              </div>
            </div>

            <p className="text-xs text-[#cbd5e1] leading-relaxed">
              Established in 1998 in Madurai. Providing 25+ years of trusted civil engineering, 2D/3D architectural building design, residential turnkey construction, and commercial BOQ execution across Tamil Nadu.
            </p>

            <div className="p-3 bg-[#0b1e36] rounded-xl border border-[#1e293b] space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#f59e0b]">
                Residential Construction
              </span>
              <p className="text-xs text-white font-medium">
                From ₹1,650/sq.ft* of built-up area (Conditions apply)
              </p>
            </div>
          </div>

          {/* Column 2: Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">2D Concept & House Plans</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">3D Exterior Elevation & Views</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Structural & MEP Engineering Drawings</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Turnkey Residential House Construction</a></li>
              <li><a href="#commercial" className="hover:text-white transition-colors">Commercial Construction on BOQ Basis</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Building Plan Approval & Liaison</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Interior Design & Decoration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Auditorium & Educational Construction</a></li>
            </ul>
          </div>

          {/* Column 3: Tamil Nadu Hubs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Service Areas
            </h4>
            <ul className="space-y-1.5 text-xs">
              {TAMIL_NADU_CITIES.slice(0, 8).map((city) => (
                <li key={city.slug}>
                  <a href="#service-areas" className="hover:text-white transition-colors">
                    {city.name}
                  </a>
                </li>
              ))}
              <li><a href="#service-areas" className="text-[#f59e0b] hover:underline font-semibold">+ 13 More Hubs</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Entity (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Head Office (NAP)
            </h4>
            <div className="space-y-2.5 text-xs text-[#cbd5e1]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c2841e] shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.address.fullFormatted}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c2841e] shrink-0" />
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  onClick={() => trackConversionEvent('call_click', { location: 'footer' })}
                  className="font-bold text-white hover:text-[#f59e0b] transition-colors"
                >
                  {COMPANY_DATA.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#34d399] shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_DATA.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversionEvent('whatsapp_click', { location: 'footer' })}
                  className="hover:text-[#34d399] transition-colors"
                >
                  WhatsApp: +91 80565 64798
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c2841e] shrink-0" />
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  onClick={() => trackConversionEvent('email_click', { location: 'footer' })}
                  className="hover:text-white transition-colors truncate"
                >
                  {COMPANY_DATA.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <p>
            © 1998 – {new Date().getFullYear()} <strong>Jayam Builders</strong>. All rights reserved. Civil Engineers & Builders.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-[#cbd5e1] underline-offset-2 hover:underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setShowTermsModal(true)}
              className="hover:text-[#cbd5e1] underline-offset-2 hover:underline"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <a href="/sitemap.xml" className="hover:text-[#cbd5e1] underline-offset-2 hover:underline">
              Sitemap
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 bg-[#122b4d] text-[#cbd5e1] hover:text-white rounded-md flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white text-[#1e293b] rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl">
            <h3 className="font-display text-xl font-bold text-[#0f172a]">Privacy Policy</h3>
            <div className="text-xs text-[#475569] space-y-2 leading-relaxed max-h-72 overflow-y-auto pr-2">
              <p>Jayam Builders values your privacy. When you request a construction estimate or submit an inquiry, we collect only the necessary contact and project details (such as name, phone number, location, and building requirements).</p>
              <p>Your details are used solely to communicate regarding your construction enquiry, prepare scope estimates, and coordinate site visits. We do not sell, trade, or share your personal data with third-party telemarketers.</p>
              <p>If you wish to update or delete your enquiry information, you can contact us directly at {COMPANY_DATA.email}.</p>
            </div>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="w-full bg-[#0b1e36] text-white font-bold text-xs py-2.5 rounded-xl"
            >
              Close Privacy Policy
            </button>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white text-[#1e293b] rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl">
            <h3 className="font-display text-xl font-bold text-[#0f172a]">Terms & Conditions</h3>
            <div className="text-xs text-[#475569] space-y-2 leading-relaxed max-h-72 overflow-y-auto pr-2">
              <p>All pricing references, including the starting rate of ₹1,650/sq.ft of built-up area, are indicative baselines subject to specific architectural blueprints, soil conditions, structural calculations, and chosen material specifications.</p>
              <p>Formal construction commitments and milestone schedules are governed by signed physical agreements and certified BOQs between Jayam Builders and the client.</p>
              <p>Drawings, 3D renderings, and conceptual layouts remain the intellectual property of Jayam Builders until formal contract signoff.</p>
            </div>
            <button
              onClick={() => setShowTermsModal(false)}
              className="w-full bg-[#0b1e36] text-white font-bold text-xs py-2.5 rounded-xl"
            >
              Close Terms & Conditions
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
