import React from 'react';
import { Phone, MessageCircle, Calculator } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { trackConversionEvent } from '../utils/analytics';

interface MobileBottomBarProps {
  onOpenEstimateModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenEstimateModal }) => {
  return (
    <aside
      aria-label="Quick Contact Actions"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#071322]/95 backdrop-blur-md border-t border-[#1e293b] px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl"
      id="mobile-bottom-bar"
    >
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call Action */}
        <a
          href={`tel:${COMPANY_DATA.phoneRaw}`}
          onClick={() => trackConversionEvent('call_click', { location: 'sticky_mobile_bottom' })}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#122b4d] text-white hover:bg-[#1e3a5f] active:scale-95 transition-all text-center min-h-[44px]"
          id="mobile-bottom-call-btn"
        >
          <Phone className="w-4 h-4 text-[#f59e0b] mb-0.5" />
          <span className="text-[11px] font-bold">Call Now</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={`https://wa.me/${COMPANY_DATA.whatsappRaw}?text=${encodeURIComponent('Hello Jayam Builders, I would like to get a construction estimate.')}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversionEvent('whatsapp_click', { location: 'sticky_mobile_bottom' })}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#064e3b] text-[#34d399] hover:bg-[#065f46] active:scale-95 transition-all text-center border border-[#10b981]/30 min-h-[44px]"
          id="mobile-bottom-whatsapp-btn"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Estimate Action */}
        <button
          onClick={() => {
            trackConversionEvent('estimate_form_start', { source: 'sticky_mobile_bottom' });
            onOpenEstimateModal();
          }}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#c2841e] to-[#d97706] text-white hover:from-[#b47818] active:scale-95 transition-all text-center shadow-sm min-h-[44px]"
          id="mobile-bottom-estimate-btn"
        >
          <Calculator className="w-4 h-4 mb-0.5 text-white" />
          <span className="text-[11px] font-bold">Get Estimate</span>
        </button>

      </div>
    </aside>
  );
};
