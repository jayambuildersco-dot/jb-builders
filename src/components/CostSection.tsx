import React, { useState } from 'react';
import { Calculator, AlertCircle, ArrowRight, MessageCircle, Check, Info } from 'lucide-react';
import { COMPANY_DATA, COST_BREAKDOWN_FACTORS } from '../data/companyData';
import { trackConversionEvent } from '../utils/analytics';

interface CostSectionProps {
  onOpenEstimateModal: (context?: string) => void;
}

export const CostSection: React.FC<CostSectionProps> = ({ onOpenEstimateModal }) => {
  const [builtUpAreaInput, setBuiltUpAreaInput] = useState<number>(1500);
  const [selectedQualityTier, setSelectedQualityTier] = useState<'standard' | 'premium' | 'luxury'>('standard');

  // Rates for indicative estimation calculation
  const tierMultipliers = {
    standard: 1650, // Official starting base rate
    premium: 1950,
    luxury: 2350
  };

  const calculatedBaseEstimate = Math.round(builtUpAreaInput * tierMultipliers[selectedQualityTier]);

  const handleCalculateChange = (val: number) => {
    setBuiltUpAreaInput(val);
    trackConversionEvent('cost_calculator_use', { area: val, tier: selectedQualityTier });
  };

  return (
    <section className="py-16 sm:py-24 bg-[#faf8f5] text-[#1e293b] border-t border-[#e2e8f0]" id="cost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c2841e]/10 text-[#b45309] border border-[#c2841e]/20">
            <span>Transparent Pricing Matrix</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] leading-tight">
            Residential Construction Cost in Tamil Nadu
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed">
            Clear, honest construction benchmarks backed by structural engineering and explicit brand specifications.
          </p>
        </div>

        {/* Hero Price Showcase Banner */}
        <div className="bg-[#0b1e36] text-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-[#1e3a5f] relative overflow-hidden mb-16">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#c2841e]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#93c5fd]">
                Starting Reference Benchmark
              </span>
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#f59e0b] tracking-tight">
                  From ₹1,650
                </span>
                <span className="text-xl sm:text-2xl text-[#e2e8f0] font-medium">
                  / sq.ft*
                </span>
              </div>
              <p className="text-sm font-semibold text-[#cbd5e1]">
                Based on built-up area. Conditions apply.
              </p>
              
              {/* Mandatory Prominent Disclaimer */}
              <div className="p-4 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-xs text-[#cbd5e1] leading-relaxed flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                <p>
                  <strong>*Conditions apply:</strong> Final construction cost varies depending on location, site conditions, soil type & foundation depth, structural requirements, total built-up area, architectural facade complexity, brand selections for cement, steel, tiles, sanitaryware, joinery, and interior finishing scope. Contact Jayam Builders for a customized, project-specific estimate.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onOpenEstimateModal('Cost Section Lead')}
                  className="bg-[#c2841e] hover:bg-[#b47818] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <span>Get a Project-Specific Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_DATA.whatsappRaw}?text=${encodeURIComponent('Hello Jayam Builders, I would like to discuss the ₹1,650/sq.ft residential construction package details.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversionEvent('whatsapp_click', { location: 'cost_banner' })}
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#34d399]" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Indicative Interactive Estimator */}
            <div className="lg:col-span-5 bg-[#071322] p-6 sm:p-7 rounded-2xl border border-[#1e293b] space-y-5">
              <div className="flex items-center justify-between border-b border-[#1e293b] pb-3">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#f59e0b]" />
                  <span className="font-display font-bold text-base text-white">
                    Indicative Cost Estimator
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8] bg-white/5 px-2 py-0.5 rounded">
                  Approx. Guide
                </span>
              </div>

              {/* Slider for Built-up Area */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <label className="text-[#cbd5e1] font-medium">Built-Up Area (sq.ft):</label>
                  <span className="font-bold text-[#f59e0b] text-sm">{builtUpAreaInput.toLocaleString()} sq.ft</span>
                </div>
                <input
                  type="range"
                  min="600"
                  max="6000"
                  step="50"
                  value={builtUpAreaInput}
                  onChange={(e) => handleCalculateChange(Number(e.target.value))}
                  className="w-full accent-[#c2841e] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#64748b]">
                  <span>600 sq.ft</span>
                  <span>3,000 sq.ft</span>
                  <span>6,000 sq.ft</span>
                </div>
              </div>

              {/* Specification Tier Selection */}
              <div className="space-y-2">
                <label className="text-xs text-[#cbd5e1] font-medium">Specification Level:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedQualityTier('standard')}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all ${
                      selectedQualityTier === 'standard'
                        ? 'bg-[#c2841e] text-white border-[#c2841e]'
                        : 'bg-white/5 text-[#cbd5e1] border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span>Standard</span>
                    <span className="block text-[10px] text-[#fde68a] font-normal">₹1,650/sq.ft*</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedQualityTier('premium')}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all ${
                      selectedQualityTier === 'premium'
                        ? 'bg-[#c2841e] text-white border-[#c2841e]'
                        : 'bg-white/5 text-[#cbd5e1] border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span>Premium</span>
                    <span className="block text-[10px] text-[#fde68a] font-normal">₹1,950/sq.ft*</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedQualityTier('luxury')}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all ${
                      selectedQualityTier === 'luxury'
                        ? 'bg-[#c2841e] text-white border-[#c2841e]'
                        : 'bg-white/5 text-[#cbd5e1] border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span>Luxury</span>
                    <span className="block text-[10px] text-[#fde68a] font-normal">₹2,350/sq.ft*</span>
                  </button>
                </div>
              </div>

              {/* Calculated Output Box */}
              <div className="p-4 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-center space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#93c5fd] font-semibold">
                  Estimated Indicative Budget:
                </span>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#f59e0b]">
                  ₹ {calculatedBaseEstimate.toLocaleString('en-IN')}
                </p>
                <p className="text-[11px] text-[#94a3b8]">
                  (Approx. ₹{(calculatedBaseEstimate / 100000).toFixed(2)} Lakhs)
                </p>
              </div>

              <div className="text-[10px] text-[#94a3b8] leading-tight flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 mt-0.5" />
                <span>
                  This calculation is purely indicative. Actual architectural drawings, soil report, and selected finishes determine the final contract quote.
                </span>
              </div>

              <button
                onClick={() => onOpenEstimateModal(`Estimator: ${builtUpAreaInput} sq.ft (${selectedQualityTier})`)}
                className="w-full bg-white text-[#0b1e36] hover:bg-[#cbd5e1] font-bold text-xs py-2.5 px-4 rounded-xl text-center transition-colors"
              >
                Send this Calculation for Verification
              </button>
            </div>
          </div>
        </div>

        {/* Why Construction Cost Varies: 6 Factors */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-[#0f172a]">
              What Determines Your Actual Construction Cost?
            </h3>
            <p className="text-sm text-[#64748b] mt-1">
              Transparent builders explain cost drivers upfront so there are no surprises during civil execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COST_BREAKDOWN_FACTORS.map((factor, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-2 hover:border-[#c2841e]/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#fef3c7] text-[#b45309] text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h4 className="font-display text-base font-bold text-[#0f172a]">
                    {factor.title}
                  </h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
