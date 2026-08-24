import React from 'react';
import { Briefcase, FileSpreadsheet, Building2, Check, ArrowRight, ShieldCheck, GraduationCap, Theater } from 'lucide-react';
import { trackConversionEvent } from '../utils/analytics';

interface CommercialFocusSectionProps {
  onOpenEstimateModal: (context?: string) => void;
}

export const CommercialFocusSection: React.FC<CommercialFocusSectionProps> = ({ onOpenEstimateModal }) => {
  const commercialOfferings = [
    {
      title: 'Commercial Complexes & Offices',
      desc: 'Optimized carpet area layouts, robust RCC structural grids, high floor-to-ceiling heights, and commercial facade finishes.',
      icon: Building2
    },
    {
      title: 'BOQ-Based Construction Contracts',
      desc: 'Strict item-rate execution governed by certified Bill of Quantities, site measurement books (MB), and milestone verification.',
      icon: FileSpreadsheet
    },
    {
      title: 'Educational Institutions & Campuses',
      desc: 'Durable school blocks, college lecture halls, science laboratories, and campus hostels engineered for high foot traffic and safety.',
      icon: GraduationCap
    },
    {
      title: 'Auditoriums & Multipurpose Halls',
      desc: 'Large column-free spans, structural steel trusses, acoustic treatment coordination, and stepped viewing gallery engineering.',
      icon: Theater
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0b1e36] text-white blueprint-grid-dark relative overflow-hidden" id="commercial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c2841e]/20 text-[#fcd34d] border border-[#c2841e]/30">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Commercial & Institutional Division</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Commercial Building Construction on BOQ Basis
          </h2>
          <p className="text-base text-[#cbd5e1] leading-relaxed">
            Delivering robust commercial structures, educational buildings, and column-free auditoriums with transparent itemized rate governance.
          </p>
        </div>

        {/* 4 Commercial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {commercialOfferings.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#122b4d]/80 rounded-2xl p-6 sm:p-8 border border-[#1e3a5f] hover:border-[#c2841e]/50 transition-all flex gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c2841e]/20 text-[#f59e0b] border border-[#c2841e]/30 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#cbd5e1] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Highlights Bar */}
        <div className="bg-[#071322] border border-[#1e293b] rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="font-display text-lg sm:text-xl font-bold text-white">
              Planning a Commercial or Institutional Project?
            </h4>
            <p className="text-xs sm:text-sm text-[#94a3b8]">
              We evaluate your architectural drawings, tender schedules, and site requirements to provide competitive BOQ item rates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                trackConversionEvent('service_click', { service: 'commercial_boq_cta' });
                onOpenEstimateModal('Commercial BOQ Construction');
              }}
              className="bg-[#c2841e] hover:bg-[#b47818] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <span>Discuss a Commercial Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
