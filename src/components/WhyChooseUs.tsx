import React from 'react';
import { Award, Layers, FileText, HeartHandshake, Building2, CheckSquare, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/companyData';
import { trackConversionEvent } from '../utils/analytics';

interface WhyChooseUsProps {
  onOpenEstimateModal: () => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Award,
  Layers,
  FileText,
  HeartHandshake,
  Building2,
  CheckSquare
};

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEstimateModal }) => {
  return (
    <section className="py-16 sm:py-24 bg-white text-[#1e293b] border-t border-[#e2e8f0]" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c2841e]/10 text-[#b45309] border border-[#c2841e]/20">
            <span>Verifiable Value & Integrity</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] leading-tight">
            Why Homeowners & Businesses Choose Jayam Builders
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed">
            Our reputation is built on 25+ years of disciplined civil engineering, transparent documentation, and authentic customer care.
          </p>
        </div>

        {/* 6 Core Strength Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = ICON_MAP[item.iconName] || Award;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#faf8f5] border border-[#e2e8f0] hover:border-[#c2841e]/50 hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0b1e36] text-[#f59e0b] flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0f172a] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-14 text-center bg-[#0b1e36] text-white p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <p className="text-xs uppercase font-bold tracking-widest text-[#f59e0b]">Ready to Experience the Difference?</p>
            <h3 className="font-display text-2xl font-bold">Consult Directly with Our Senior Civil Engineers</h3>
          </div>
          <button
            onClick={() => {
              trackConversionEvent('estimate_form_start', { source: 'why_us_cta' });
              onOpenEstimateModal();
            }}
            className="shrink-0 bg-[#c2841e] hover:bg-[#b47818] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow flex items-center gap-2"
          >
            <span>Request Construction Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
