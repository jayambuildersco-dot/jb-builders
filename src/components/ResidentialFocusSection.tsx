import React from 'react';
import { Home, CheckCircle2, ArrowRight, ShieldCheck, Ruler, Sparkles } from 'lucide-react';
import { trackConversionEvent } from '../utils/analytics';

interface ResidentialFocusSectionProps {
  onOpenEstimateModal: (context?: string) => void;
}

export const ResidentialFocusSection: React.FC<ResidentialFocusSectionProps> = ({ onOpenEstimateModal }) => {
  const residentialHighlights = [
    {
      title: 'First-Time Home Builders',
      desc: 'Step-by-step guidance from plot orientation and setback calculations to floor planning and milestone budgeting.'
    },
    {
      title: 'Families with an Existing Plot',
      desc: 'Optimized architectural house plans tailored to your land dimensions, natural breeze direction, and Vaastu preferences.'
    },
    {
      title: 'Comparing Estimates & Quality',
      desc: 'Detailed itemized BOQs with explicit cement, steel, tile, and plumbing brand specifications for absolute transparency.'
    },
    {
      title: 'Single Coordinated Team',
      desc: 'No finger-pointing between architects, structural engineers, and contractors. We take complete turnkey responsibility.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-[#1e293b] border-t border-[#e2e8f0]" id="residential">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c2841e]/10 text-[#b45309] border border-[#c2841e]/20">
                <Home className="w-3.5 h-3.5" />
                <span>Residential Construction Excellence</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] leading-tight">
                Crafting Enduring Residential Homes & Villas Across Tamil Nadu
              </h2>
            </div>

            <p className="text-base text-[#475569] leading-relaxed">
              As an established residential construction company in Tamil Nadu with over 25 years of on-site civil engineering practice, Jayam Builders designs and constructs customized independent houses, contemporary villas, and multi-storey residences. We balance architectural beauty with durable structural engineering.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {residentialHighlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                    <h3 className="text-sm font-bold text-[#0f172a]">{item.title}</h3>
                  </div>
                  <p className="text-xs text-[#64748b] leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenEstimateModal('Residential House Construction')}
                className="bg-[#0b1e36] hover:bg-[#122b4d] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow flex items-center gap-2"
              >
                <span>Discuss Residential Construction</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-[#64748b]">
                Starting from <strong className="text-[#0f172a]">₹1,650/sq.ft*</strong> of built-up area
              </span>
            </div>

          </div>

          {/* Right Column: Imagery Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#e2e8f0]">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80"
                alt="Architectural residential villa and independent house construction by Jayam Builders in Tamil Nadu"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                width="600"
                height="460"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#071322] text-white p-4 rounded-xl border border-[#c2841e]/50 shadow-xl hidden sm:flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#10b981]" />
              <div>
                <p className="text-xs font-bold">IS-Code Structural Standards</p>
                <p className="text-[11px] text-[#cbd5e1]">Engineered for seismic & soil safety</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
