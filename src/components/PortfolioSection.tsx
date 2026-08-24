import React, { useState } from 'react';
import { Camera, MapPin, Maximize2, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/companyData';
import { PortfolioItem } from '../types';
import { trackConversionEvent } from '../utils/analytics';

interface PortfolioSectionProps {
  onOpenEstimateModal: (context?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenEstimateModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'architecture', label: 'Architecture & 3D' },
    { id: 'interiors', label: 'Interiors' },
    { id: 'renovation', label: 'Renovation' },
    { id: 'institutional', label: 'Institutional' }
  ];

  const filteredItems =
    activeCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const handleProjectClick = (item: PortfolioItem) => {
    trackConversionEvent('project_view', { project_title: item.title, category: item.category });
    setSelectedProject(item);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#faf8f5] text-[#1e293b] border-t border-[#e2e8f0]" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c2841e]/10 text-[#b45309] border border-[#c2841e]/20">
            <Camera className="w-3.5 h-3.5" />
            <span>Demonstrated Execution & Design</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] leading-tight">
            Our Work & Architectural Portfolio
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed">
            A sample showcase of residential houses, commercial buildings, institutional facilities, and 3D architectural elevations executed across Tamil Nadu.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0b1e36] text-white shadow-md'
                  : 'bg-white text-[#475569] hover:bg-[#e2e8f0] border border-[#cbd5e1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-[#0b1e36]">
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    width="600"
                    height="320"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0b1e36]/90 backdrop-blur-md text-white px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider">
                    {item.categoryLabel}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#10b981] text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    {item.status}
                  </div>
                  <button
                    onClick={() => handleProjectClick(item)}
                    className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-[#0f172a] p-2 rounded-lg shadow opacity-0 group-hover:opacity-100 transition-opacity"
                    title="View project case study"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#c2841e] font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.locality}, {item.city}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0f172a] group-hover:text-[#0b1e36] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-[#64748b] pt-1">
                    <span className="font-medium bg-[#f1f5f9] px-2.5 py-1 rounded-md">
                      Area: <strong className="text-[#0f172a]">{item.builtUpArea}</strong>
                    </span>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                    <strong className="text-[#334155]">Scope:</strong> {item.scope}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-2 border-t border-[#f8fafc] flex items-center justify-between">
                <button
                  onClick={() => handleProjectClick(item)}
                  className="text-xs font-bold text-[#0b1e36] hover:text-[#c2841e] inline-flex items-center gap-1"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenEstimateModal(`Similar to: ${item.title}`)}
                  className="text-xs font-semibold text-[#c2841e] hover:underline"
                >
                  Build Similar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm max-w-3xl mx-auto space-y-2">
          <p className="text-xs text-[#64748b]">
            *Detailed structural drawing packages, BOQ summaries, and sample floor plans can be presented in person at our Madurai office or during your initial consultation.
          </p>
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-[#e2e8f0] relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between border-b border-[#e2e8f0] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#c2841e]">
                  {selectedProject.categoryLabel} • {selectedProject.status}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#0f172a] mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-[#64748b] flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#c2841e]" />
                  {selectedProject.locality}, {selectedProject.city} • Built-Up Area: {selectedProject.builtUpArea}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-[#94a3b8] hover:text-[#0f172a] p-1 rounded-lg text-lg"
              >
                ✕
              </button>
            </div>

            <div className="rounded-xl overflow-hidden h-64 bg-[#0b1e36]">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-[#334155]">
              <div className="bg-[#f8fafc] p-4 rounded-xl border border-[#e2e8f0]">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0f172a]">Project Scope</h4>
                <p className="text-xs text-[#475569] mt-1">{selectedProject.scope}</p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#b45309]">Design & Structural Challenge</h4>
                <p className="text-xs text-[#475569] leading-relaxed">{selectedProject.designChallenge}</p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#059669]">Jayam Builders Engineering Solution</h4>
                <p className="text-xs text-[#475569] leading-relaxed">{selectedProject.solution}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#e2e8f0]">
              <button
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  onOpenEstimateModal(`Project Inquiry: ${title}`);
                }}
                className="flex-1 bg-[#0b1e36] hover:bg-[#122b4d] text-white font-semibold text-sm py-3 px-4 rounded-xl text-center shadow"
              >
                Request Estimate for Similar Project
              </button>
              <button
                onClick={() => setSelectedProject(null)}
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
