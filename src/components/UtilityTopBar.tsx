import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { trackConversionEvent } from '../utils/analytics';

export const UtilityTopBar: React.FC = () => {
  return (
    <div className="bg-[#071322] text-[#94a3b8] text-xs border-b border-[#1e293b] hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-[#cbd5e1]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span className="font-medium text-[#e2e8f0]">Civil Engineers & Builders</span>
            <span className="text-[#64748b]">|</span>
            <span>Est. 1998 • Madurai, Tamil Nadu</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-[#94a3b8]">
            <Clock className="w-3.5 h-3.5 text-[#c2841e]" />
            <span>Mon – Sat: 9:00 AM – 7:30 PM</span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`tel:${COMPANY_DATA.phoneRaw}`}
            onClick={() => trackConversionEvent('call_click', { location: 'top_bar' })}
            className="flex items-center gap-1.5 hover:text-[#e2e8f0] transition-colors"
            id="topbar-call-link"
          >
            <Phone className="w-3.5 h-3.5 text-[#c2841e]" />
            <span className="font-semibold text-white">{COMPANY_DATA.phone}</span>
          </a>

          <a
            href={`https://wa.me/${COMPANY_DATA.whatsappRaw}?text=${encodeURIComponent('Hello Jayam Builders, I would like to enquire about construction / architectural services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversionEvent('whatsapp_click', { location: 'top_bar' })}
            className="flex items-center gap-1.5 text-[#34d399] hover:text-[#6ee7b7] font-medium transition-colors"
            id="topbar-whatsapp-link"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href={COMPANY_DATA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversionEvent('directions_click', { location: 'top_bar' })}
            className="flex items-center gap-1.5 hover:text-[#e2e8f0] transition-colors"
            id="topbar-directions-link"
          >
            <MapPin className="w-3.5 h-3.5 text-[#c2841e]" />
            <span>Directions</span>
          </a>

          <a
            href={`mailto:${COMPANY_DATA.email}`}
            onClick={() => trackConversionEvent('email_click', { location: 'top_bar' })}
            className="flex items-center gap-1.5 hover:text-[#e2e8f0] transition-colors"
            id="topbar-email-link"
          >
            <Mail className="w-3.5 h-3.5 text-[#c2841e]" />
            <span>{COMPANY_DATA.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
