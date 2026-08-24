import React from 'react';
import { Award, Compass, ShieldCheck, HeartHandshake, ArrowRight, Check } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { trackConversionEvent } from '../utils/analytics';

interface AboutSectionProps {
  onOpenEstimateModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEstimateModal }) => {
  return (
    <section className="py-16 sm:py-24 bg-white text-[#1e293b] border-t border-[#f1f5f9]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual & Heritage Story */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e2e8f0]">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb180c5f7?auto=format&fit=crop&w=900&q=80"
                alt="Jayam Builders Civil Engineering and Construction Workmanship in Madurai, Tamil Nadu"
                className="w-full h-80 sm:h-96 lg:h-[480px] object-cover object-center"
                width="600"
                height="480"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e36]/90 via-transparent to-transparent" />
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-block px-3 py-1 bg-[#c2841e] text-white rounded-lg text-xs font-bold uppercase tracking-wider mb-2">
                  Established 1998
                </div>
                <p className="font-display text-xl font-bold">
                  25+ Years of Construction & Engineering Excellence
                </p>
                <p className="text-xs text-[#cbd5e1] mt-1">
                  Headquartered at Iyer Bungalow, New Natham Road, Madurai.
                </p>
              </div>
            </div>

            {/* Subtle floating quote card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#0b1e36] text-white p-5 rounded-2xl border border-[#c2841e]/40 shadow-2xl max-w-xs">
              <p className="text-xs font-semibold text-[#f59e0b] uppercase tracking-wider">Our Core Principle</p>
              <p className="text-sm font-bold mt-1 text-white italic">
                "We listen. We understand. We provide practical solutions."
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c2841e]/10 text-[#b45309] border border-[#c2841e]/20">
                <Award className="w-3.5 h-3.5" />
                <span>About Jayam Builders</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] leading-tight">
                Building Dreams with Quality & Trust Since 1998
              </h2>
            </div>

            <div className="space-y-4 text-base text-[#475569] leading-relaxed">
              <p>
                Founded in 1998 in Madurai, <strong>Jayam Builders</strong> is an established civil engineering, architectural building design, and construction company serving residential and commercial clients across Tamil Nadu. Over more than two and a half decades, we have maintained a steadfast commitment to engineering precision, structural longevity, and complete client satisfaction.
              </p>
              <p>
                We believe that every durable building begins with deep listening. Rather than offering one-size-fits-all templates, our civil engineers and architectural designers take the time to thoroughly understand your spatial preferences, family lifestyle, site orientation, and financial parameters before providing actionable solutions.
              </p>
              <p>
                Our core strength lies in our unified multi-disciplinary capability. By coordinating 2D planning, 3D photorealistic elevations, structural calculations, MEP drawings, government approvals, and turnkey civil execution within one experienced team, we eliminate friction and keep our clients informed at every stage.
              </p>
            </div>

            {/* Four Ethical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                <div className="w-6 h-6 rounded-md bg-[#10b981]/15 text-[#10b981] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0f172a]">Transparent Dealings</h4>
                  <p className="text-xs text-[#64748b] mt-0.5">Itemized BOQs, explicit material specs & milestone billing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                <div className="w-6 h-6 rounded-md bg-[#10b981]/15 text-[#10b981] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0f172a]">Technical Supervision</h4>
                  <p className="text-xs text-[#64748b] mt-0.5">Qualified civil engineers supervising critical RCC & finishes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                <div className="w-6 h-6 rounded-md bg-[#10b981]/15 text-[#10b981] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0f172a]">Ethical Business Policies</h4>
                  <p className="text-xs text-[#64748b] mt-0.5">Focusing on long-term relationships and honest engineering advice.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                <div className="w-6 h-6 rounded-md bg-[#10b981]/15 text-[#10b981] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0f172a]">Continuous Service Connection</h4>
                  <p className="text-xs text-[#64748b] mt-0.5">Staying connected from initial plot survey to key handover.</p>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  trackConversionEvent('estimate_form_start', { source: 'about_cta' });
                  onOpenEstimateModal();
                }}
                className="bg-[#0b1e36] hover:bg-[#122b4d] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors inline-flex items-center gap-2 shadow"
              >
                <span>Discuss Your Project with Jayam Builders</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_DATA.phoneRaw}`}
                className="text-sm font-semibold text-[#c2841e] hover:text-[#b45309] flex items-center gap-1.5"
              >
                <span>Direct Office Line: {COMPANY_DATA.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
