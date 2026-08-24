import React from 'react';
import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/companyData';
import { trackConversionEvent } from '../utils/analytics';

interface ProcessTimelineProps {
  onOpenEstimateModal: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenEstimateModal }) => {
  return (
    <section className="py-16 sm:py-24 bg-white text-[#1e293b] border-t border-[#e2e8f0]" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c2841e]/10 text-[#b45309] border border-[#c2841e]/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Structured Engineering Lifecycle</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] leading-tight">
            From Idea to Construction — A Clearer Building Journey
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed">
            Our disciplined 8-stage methodology ensures clarity, structural integrity, regulatory compliance, and transparent progress at every phase.
          </p>
        </div>

        {/* 8-Step Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-[#faf8f5] rounded-2xl p-6 border border-[#e2e8f0] shadow-sm hover:shadow-md hover:border-[#c2841e]/50 transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-[#0b1e36] text-[#f59e0b] font-display font-extrabold text-sm flex items-center justify-center shadow-sm">
                    {String(step.stepNumber).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-wider">
                    Stage {step.stepNumber}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-base font-bold text-[#0f172a] group-hover:text-[#0b1e36] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#c2841e]">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#e2e8f0]">
                <div className="flex items-start gap-1.5 text-[11px] font-medium text-[#334155]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                  <span>{step.keyDeliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process disclaimer & CTA */}
        <div className="mt-12 text-center max-w-2xl mx-auto space-y-4">
          <p className="text-xs text-[#64748b]">
            *Note: Specific milestone timelines and sequential steps may be customized depending on project scale, structural complexity, and individual client requirements.
          </p>
          <button
            onClick={() => {
              trackConversionEvent('estimate_form_start', { source: 'process_timeline_bottom' });
              onOpenEstimateModal();
            }}
            className="bg-[#0b1e36] hover:bg-[#122b4d] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow inline-flex items-center gap-2"
          >
            <span>Start Stage 1 Discussion for Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
