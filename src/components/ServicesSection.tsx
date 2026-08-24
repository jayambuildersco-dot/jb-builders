import React, { useState } from 'react';
import {
  Compass,
  Building,
  Layout,
  Eye,
  Video,
  ShieldCheck,
  Zap,
  Droplets,
  Home,
  Briefcase,
  FileSpreadsheet,
  FileCheck,
  Users,
  MapPin,
  CheckCircle,
  Sparkles,
  Palette,
  Wrench,
  GraduationCap,
  Theater,
  ArrowRight,
  Check,
  SlidersHorizontal
} from 'lucide-react';
import { SERVICE_GROUPS } from '../data/companyData';
import { ServiceItem } from '../types';
import { trackConversionEvent } from '../utils/analytics';

interface ServicesSectionProps {
  onOpenEstimateModal: (preselectedService?: string) => void;
}

// Icon mapping helper
const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Compass,
  Building,
  Layout,
  Eye,
  Video,
  ShieldCheck,
  Zap,
  Droplets,
  Home,
  Briefcase,
  FileSpreadsheet,
  FileCheck,
  Users,
  MapPin,
  CheckCircle,
  Sparkles,
  Palette,
  Wrench,
  GraduationCap,
  Theater
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEstimateModal }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services (24)' },
    { id: 'design', label: 'Design & Planning' },
    { id: 'engineering', label: 'Engineering Drawings' },
    { id: 'construction', label: 'Construction' },
    { id: 'approvals', label: 'Approvals & Liaison' },
    { id: 'interiors', label: 'Interiors & Renovation' },
    { id: 'institutional', label: 'Institutional & Auditoriums' }
  ];

  const allServices: ServiceItem[] = SERVICE_GROUPS.flatMap((group) => group.items);

  const filteredServices =
    activeCategoryId === 'all'
      ? allServices
      : allServices.filter((s) => s.category === activeCategoryId);

  const handleDiscussService = (serviceTitle: string) => {
    trackConversionEvent('service_click', { service: serviceTitle });
    onOpenEstimateModal(serviceTitle);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#f8fafc] text-[#1e293b]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c2841e]/10 text-[#b45309] border border-[#c2841e]/20">
            <span>Comprehensive Solutions Under One Roof</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] leading-tight">
            Complete Construction & Architectural Services
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed">
            From initial 2D space planning and structural engineering to municipal approvals, turnkey civil construction, and interior finishing.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategoryId === cat.id
                  ? 'bg-[#0b1e36] text-white shadow-md'
                  : 'bg-white text-[#475569] hover:bg-[#e2e8f0] border border-[#cbd5e1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Building;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm hover:shadow-md hover:border-[#c2841e]/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#0b1e36]/5 text-[#0b1e36] group-hover:bg-[#c2841e] group-hover:text-white transition-colors flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b] bg-[#f1f5f9] px-2.5 py-1 rounded-md">
                      {service.categoryLabel}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-lg font-bold text-[#0f172a] group-hover:text-[#0b1e36] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    {service.highlight && (
                      <span className="inline-block px-2 py-0.5 text-xs font-extrabold bg-[#fef3c7] text-[#b45309] rounded">
                        {service.highlight}
                      </span>
                    )}
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Key deliverables checklist */}
                  <div className="pt-3 border-t border-[#f1f5f9] space-y-1.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">Key Inclusions:</p>
                    {service.deliverables.slice(0, 3).map((deliv, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#334155]">
                        <Check className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="pt-5 mt-4 border-t border-[#f1f5f9] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedServiceForDetail(service)}
                    className="text-xs text-[#64748b] hover:text-[#0f172a] font-medium"
                  >
                    View details
                  </button>
                  <button
                    onClick={() => handleDiscussService(service.title)}
                    className="text-xs font-bold text-[#c2841e] hover:text-[#b45309] inline-flex items-center gap-1.5"
                  >
                    <span>Discuss Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-14 p-8 rounded-2xl bg-[#0b1e36] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-2xl font-bold">Need a Custom Combination of Services?</h3>
            <p className="text-sm text-[#cbd5e1] max-w-xl">
              Whether you need only 3D elevation drawings, municipal plan approval liaison, or complete turnkey construction, we tailor our scope precisely to your needs.
            </p>
          </div>
          <button
            onClick={() => onOpenEstimateModal()}
            className="shrink-0 bg-[#c2841e] hover:bg-[#b47818] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center gap-2"
          >
            <span>Request Custom Scope Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedServiceForDetail && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-[#e2e8f0] relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#c2841e]">
                  {selectedServiceForDetail.categoryLabel}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#0f172a] mt-1">
                  {selectedServiceForDetail.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedServiceForDetail(null)}
                className="text-[#94a3b8] hover:text-[#0f172a] p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#475569] leading-relaxed">
              {selectedServiceForDetail.fullDesc}
            </p>

            <div className="space-y-2.5 bg-[#f8fafc] p-4 rounded-xl border border-[#e2e8f0]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                Deliverables & Specifications:
              </h4>
              <ul className="space-y-1.5">
                {selectedServiceForDetail.deliverables.map((item, idx) => (
                  <li key={idx} className="text-xs text-[#334155] flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  const title = selectedServiceForDetail.title;
                  setSelectedServiceForDetail(null);
                  handleDiscussService(title);
                }}
                className="flex-1 bg-[#0b1e36] hover:bg-[#122b4d] text-white font-semibold text-sm py-3 px-4 rounded-xl text-center"
              >
                Enquire for this Service
              </button>
              <button
                onClick={() => setSelectedServiceForDetail(null)}
                className="px-4 py-3 border border-[#cbd5e1] text-[#475569] font-medium text-sm rounded-xl hover:bg-[#f1f5f9]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
