import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Download, CreditCard, ChevronDown, ChevronUp, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { generateAndDownloadVCard } from '../utils/vcard';
import { trackConversionEvent } from '../utils/analytics';

export const ContactSection: React.FC = () => {
  const [showPaymentInfo, setShowPaymentInfo] = useState<boolean>(false);

  const handleSaveContact = () => {
    trackConversionEvent('vcard_download');
    generateAndDownloadVCard();
  };

  return (
    <section className="py-16 sm:py-24 bg-[#faf8f5] text-[#1e293b] border-t border-[#e2e8f0]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c2841e]/10 text-[#b45309] border border-[#c2841e]/20">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Connectivity</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] leading-tight">
            Start Your Construction Conversation
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed">
            Reach out directly to Jayam Builders. Visit our Madurai office or connect via phone, WhatsApp, or email to discuss your building project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Action Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Office Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e2e8f0] shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#c2841e]">Headquarters</span>
                <h3 className="font-display text-2xl font-bold text-[#0f172a] mt-1">{COMPANY_DATA.name}</h3>
                <p className="text-xs text-[#64748b] mt-0.5">Civil Engineers & Builders • Established 1998</p>
              </div>

              <div className="space-y-4 text-sm text-[#334155]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0b1e36]/5 text-[#0b1e36] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#c2841e]" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold uppercase tracking-wider text-[#0f172a]">Office Address</strong>
                    <p className="text-sm text-[#475569] mt-0.5">{COMPANY_DATA.address.fullFormatted}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0b1e36]/5 text-[#0b1e36] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#c2841e]" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold uppercase tracking-wider text-[#0f172a]">Direct Phone</strong>
                    <a
                      href={`tel:${COMPANY_DATA.phoneRaw}`}
                      onClick={() => trackConversionEvent('call_click', { location: 'contact_section' })}
                      className="text-base font-bold text-[#0b1e36] hover:text-[#c2841e] transition-colors"
                    >
                      {COMPANY_DATA.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0b1e36]/5 text-[#0b1e36] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#c2841e]" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold uppercase tracking-wider text-[#0f172a]">Official Email</strong>
                    <a
                      href={`mailto:${COMPANY_DATA.email}`}
                      onClick={() => trackConversionEvent('email_click', { location: 'contact_section' })}
                      className="text-sm font-medium text-[#475569] hover:text-[#0b1e36] transition-colors"
                    >
                      {COMPANY_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0b1e36]/5 text-[#0b1e36] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#c2841e]" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold uppercase tracking-wider text-[#0f172a]">Working Hours</strong>
                    <p className="text-xs text-[#475569] mt-0.5">Monday to Saturday: 9:00 AM – 7:30 PM (Sunday by appointment)</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons Grid */}
              <div className="pt-4 border-t border-[#f1f5f9] grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  onClick={() => trackConversionEvent('call_click', { location: 'contact_grid' })}
                  className="bg-[#0b1e36] hover:bg-[#122b4d] text-white py-2.5 px-3 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_DATA.whatsappRaw}?text=${encodeURIComponent('Hello Jayam Builders, I would like to schedule a site meeting.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversionEvent('whatsapp_click', { location: 'contact_grid' })}
                  className="bg-[#064e3b] hover:bg-[#065f46] text-[#34d399] py-2.5 px-3 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors border border-[#10b981]/30"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={COMPANY_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversionEvent('directions_click', { location: 'contact_grid' })}
                  className="bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a] py-2.5 px-3 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors border border-[#cbd5e1]"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#c2841e]" />
                  <span>Directions</span>
                </a>

                <button
                  onClick={handleSaveContact}
                  className="bg-[#f8fafc] hover:bg-[#f1f5f9] text-[#334155] py-2.5 px-3 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors border border-[#e2e8f0]"
                  title="Download vCard file (.vcf) to save in phone contacts"
                >
                  <Download className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span>Save Contact</span>
                </button>
              </div>
            </div>

            {/* Expandable Payment Information (Section 34) */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5 space-y-3">
              <button
                onClick={() => setShowPaymentInfo(!showPaymentInfo)}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-2.5">
                  <CreditCard className="w-4 h-4 text-[#c2841e]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                    Verified Payment Information
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#64748b]">
                  <span>{showPaymentInfo ? 'Hide Details' : 'View Verified Channels'}</span>
                  {showPaymentInfo ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </div>
              </button>

              {showPaymentInfo && (
                <div className="pt-3 border-t border-[#f1f5f9] space-y-3 animate-in fade-in duration-150">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-2.5 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                      <span className="text-[10px] uppercase font-bold text-[#64748b]">Paytm</span>
                      <p className="font-bold text-[#0f172a] mt-0.5">{COMPANY_DATA.paymentContacts.paytm}</p>
                    </div>
                    <div className="p-2.5 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                      <span className="text-[10px] uppercase font-bold text-[#64748b]">PhonePe</span>
                      <p className="font-bold text-[#0f172a] mt-0.5">{COMPANY_DATA.paymentContacts.phonepe}</p>
                    </div>
                    <div className="p-2.5 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                      <span className="text-[10px] uppercase font-bold text-[#64748b]">Google Pay</span>
                      <p className="font-bold text-[#0f172a] mt-0.5">{COMPANY_DATA.paymentContacts.gpay}</p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#fef2f2] rounded-xl border border-[#fecaca] text-[11px] text-[#991b1b] flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#ef4444] shrink-0 mt-0.5" />
                    <span>
                      <strong>Important Safety Advisory:</strong> Please confirm project invoice and payment details directly with Jayam Builders via verified phone ({COMPANY_DATA.phone}) before transferring funds.
                    </span>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Directions Frame */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-[#e2e8f0] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#c2841e]">Madurai Location</span>
                <h4 className="font-display text-lg font-bold text-[#0f172a]">Find Our Office</h4>
              </div>
              <a
                href={COMPANY_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversionEvent('directions_click', { location: 'map_header' })}
                className="text-xs font-bold text-[#2563eb] hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <MapPin className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#cbd5e1] h-72 sm:h-80 bg-[#f1f5f9] relative">
              <iframe
                title="Jayam Builders Office Location in Madurai, Tamil Nadu"
                src="https://maps.google.com/maps?q=Iyer+Bungalow+New+Natham+Road+Madurai+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <p className="text-xs text-[#64748b] leading-relaxed">
              Located conveniently on New Natham Road at Iyer Bungalow, Madurai. Free client parking and conference space for architectural reviews.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
