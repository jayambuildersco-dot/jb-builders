import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQ_DATA, COMPANY_DATA } from '../data/companyData';
import { trackConversionEvent } from '../utils/analytics';

interface FAQSectionProps {
  onOpenEstimateModal: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenEstimateModal }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [faqFilter, setFaqFilter] = useState<'all' | 'cost' | 'services' | 'approvals' | 'coverage'>('all');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs =
    faqFilter === 'all' ? FAQ_DATA : FAQ_DATA.filter((item) => item.category === faqFilter);

  return (
    <section className="py-16 sm:py-24 bg-white text-[#1e293b] border-t border-[#e2e8f0]" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c2841e]/10 text-[#b45309] border border-[#c2841e]/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers for Homeowners & Clients</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed">
            Clear, factual answers regarding our residential pricing, architectural design deliverables, structural engineering drawings, and Tamil Nadu service coverage.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFaqFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              faqFilter === 'all' ? 'bg-[#0b1e36] text-white' : 'bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]'
            }`}
          >
            All Questions
          </button>
          <button
            onClick={() => setFaqFilter('cost')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              faqFilter === 'cost' ? 'bg-[#0b1e36] text-white' : 'bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]'
            }`}
          >
            Cost & Pricing
          </button>
          <button
            onClick={() => setFaqFilter('services')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              faqFilter === 'services' ? 'bg-[#0b1e36] text-white' : 'bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]'
            }`}
          >
            Services & Drawings
          </button>
          <button
            onClick={() => setFaqFilter('approvals')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              faqFilter === 'approvals' ? 'bg-[#0b1e36] text-white' : 'bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]'
            }`}
          >
            Approvals & Land
          </button>
          <button
            onClick={() => setFaqFilter('coverage')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              faqFilter === 'coverage' ? 'bg-[#0b1e36] text-white' : 'bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]'
            }`}
          >
            Service Locations
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-[#c2841e] bg-[#faf8f5] shadow-sm'
                    : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#0f172a]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#c2841e] text-white' : 'bg-[#f1f5f9] text-[#64748b]'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 space-y-3 border-t border-[#e2e8f0]/60 pt-4 animate-in fade-in duration-200">
                    <div className="p-3 bg-white rounded-xl border border-[#e2e8f0] text-xs font-bold text-[#b45309]">
                      {faq.shortAnswer}
                    </div>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {faq.fullAnswer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-display text-lg font-bold text-[#0f172a]">Still have an unanswered question?</h3>
            <p className="text-xs sm:text-sm text-[#64748b]">
              Connect directly with Jayam Builders over phone or WhatsApp for prompt clarification.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_DATA.whatsappRaw}?text=${encodeURIComponent('Hello Jayam Builders, I have a specific question about my construction project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversionEvent('whatsapp_click', { location: 'faq_box' })}
              className="bg-[#064e3b] text-[#34d399] hover:bg-[#065f46] font-bold text-xs px-4 py-2.5 rounded-xl border border-[#10b981]/30 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <button
              onClick={onOpenEstimateModal}
              className="bg-[#0b1e36] text-white hover:bg-[#122b4d] font-bold text-xs px-4 py-2.5 rounded-xl transition-colors shadow"
            >
              Request Estimate
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
