import React from 'react';
import { HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { PAIN_POINTS_DATA } from '../data/companyData';
import { trackConversionEvent } from '../utils/analytics';

interface PainPointsSectionProps {
  onOpenEstimateModal: () => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onOpenEstimateModal }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#faf8f5] text-[#1e293b]" id="pain-points">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c2841e]/10 text-[#b45309] border border-[#c2841e]/20">
            <span>Homeowner Clarity & Guidance</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0f172a] leading-tight">
            Planning to Build a Home? The Biggest Questions Usually Come Before Construction Begins.
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed">
            Constructing a home is one of life’s most significant investments. Here is how our engineering-first, coordinated process eliminates uncertainty before work commences.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PAIN_POINTS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fef3c7] text-[#d97706] flex items-center justify-center shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0f172a] leading-snug">
                    "{item.question}"
                  </h3>
                </div>

                <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#f1f5f9] text-xs text-[#64748b]">
                  <span className="font-semibold text-[#475569]">Common Worry: </span>
                  {item.concern}
                </div>

                <div className="space-y-2 pt-2 border-t border-[#f1f5f9]">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#059669]">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                    <span>Jayam Builders Approach</span>
                  </div>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-[#f8fafc]">
                <button
                  onClick={() => {
                    trackConversionEvent('estimate_form_start', { source: `pain_point_${idx}` });
                    onOpenEstimateModal();
                  }}
                  className="text-xs font-semibold text-[#c2841e] hover:text-[#b45309] inline-flex items-center gap-1 group"
                >
                  <span>Discuss this with our engineers</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section bottom prompt */}
        <div className="mt-12 text-center bg-white p-6 sm:p-8 rounded-2xl border border-[#e2e8f0] shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display text-lg font-bold text-[#0f172a]">
              Have a specific question about your plot or budget?
            </h4>
            <p className="text-sm text-[#64748b]">
              Our civil engineers are available for direct, obligation-free site discussions.
            </p>
          </div>
          <button
            onClick={onOpenEstimateModal}
            className="shrink-0 bg-[#0b1e36] hover:bg-[#122b4d] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors shadow"
          >
            Ask Our Engineering Team
          </button>
        </div>

      </div>
    </section>
  );
};
