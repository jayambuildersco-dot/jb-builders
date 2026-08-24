import React, { useState } from 'react';
import { MapPin, CheckCircle2, ArrowRight, Shield, Search } from 'lucide-react';
import { TAMIL_NADU_CITIES, COMPANY_DATA } from '../data/companyData';
import { trackConversionEvent } from '../utils/analytics';

interface ServiceAreaSectionProps {
  onOpenEstimateModal: (cityContext?: string) => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ onOpenEstimateModal }) => {
  const [selectedCity, setSelectedCity] = useState<string>('Madurai');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCities = TAMIL_NADU_CITIES.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCitySelect = (cityName: string) => {
    setSelectedCity(cityName);
    trackConversionEvent('service_click', { action: 'city_coverage_select', city: cityName });
  };

  return (
    <section className="py-16 sm:py-24 bg-[#faf8f5] text-[#1e293b] border-t border-[#e2e8f0]" id="service-areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c2841e]/10 text-[#b45309] border border-[#c2841e]/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>Statewide Regional Coverage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] leading-tight">
            Construction Services Across Tamil Nadu
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed">
            Jayam Builders is based in <strong>Madurai</strong> and serves residential and commercial construction requirements across Tamil Nadu depending on project scope and feasibility.
          </p>
        </div>

        {/* Interactive Coverage Hub */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#e2e8f0] shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive City Grid & Search */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#e2e8f0]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                  Supported Districts & Municipalities (21 Key Hubs)
                </span>
                
                {/* Search box */}
                <div className="relative w-full sm:w-60">
                  <Search className="w-3.5 h-3.5 text-[#94a3b8] absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search your city..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#f8fafc] border border-[#cbd5e1] rounded-lg focus:outline-none focus:border-[#c2841e]"
                  />
                </div>
              </div>

              {/* City Pill Grid */}
              <div className="flex flex-wrap gap-2 pt-2">
                {filteredCities.map((city) => (
                  <button
                    key={city.slug}
                    onClick={() => handleCitySelect(city.name)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      selectedCity === city.name
                        ? 'bg-[#0b1e36] text-white shadow-sm ring-2 ring-[#c2841e]'
                        : 'bg-[#f8fafc] text-[#334155] hover:bg-[#e2e8f0] border border-[#e2e8f0]'
                    }`}
                  >
                    <MapPin className={`w-3 h-3 ${selectedCity === city.name ? 'text-[#f59e0b]' : 'text-[#94a3b8]'}`} />
                    <span>{city.name}</span>
                    {city.isHQ && (
                      <span className="ml-1 text-[9px] bg-[#c2841e] text-white font-bold px-1.5 py-0.2 rounded">
                        HQ
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <p className="text-xs text-[#64748b] pt-2">
                *Don't see your specific panchayat or town? Jayam Builders executes projects throughout surrounding taluks and suburban layouts across Tamil Nadu.
              </p>
            </div>

            {/* Right: Selected City Project Availability Card */}
            <div className="lg:col-span-5 bg-[#071322] text-white p-6 sm:p-7 rounded-2xl border border-[#1e293b] space-y-5">
              <div className="space-y-1 border-b border-[#1e293b] pb-4">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#f59e0b]">
                  Location Feasibility Status
                </span>
                <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                  <span>{selectedCity}</span>
                  <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                </h3>
                <p className="text-xs text-[#cbd5e1]">
                  Available for Residential, Commercial & Architectural Services.
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#cbd5e1]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>2D House Plans & 3D Elevations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>Structural, Electrical & Plumbing Working Drawings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>Residential Turnkey Construction from ₹1,650/sq.ft*</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>Commercial & BOQ Construction Execution</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenEstimateModal(`Location inquiry for ${selectedCity}`)}
                  className="w-full bg-[#c2841e] hover:bg-[#b47818] text-white font-bold text-xs py-3 px-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                  id="service-area-check-btn"
                >
                  <span>Check Project Availability in {selectedCity}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
