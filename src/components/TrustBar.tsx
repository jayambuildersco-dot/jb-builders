import React from 'react';
import { ShieldCheck, Award, HardHat, MapPin, CheckCircle } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustPoints = [
    {
      icon: Award,
      title: 'Established 1998',
      desc: '25+ Years of Trust'
    },
    {
      icon: HardHat,
      title: 'Civil Engineers & Builders',
      desc: 'Technical Rigor'
    },
    {
      icon: MapPin,
      title: 'Madurai Based',
      desc: 'Iyer Bungalow Office'
    },
    {
      icon: ShieldCheck,
      title: 'Tamil Nadu Coverage',
      desc: 'Residential & Commercial'
    },
    {
      icon: CheckCircle,
      title: 'From ₹1,650/sq.ft*',
      desc: 'Transparent Estimates',
      isFeatured: true
    }
  ];

  return (
    <section className="bg-[#071322] border-y border-[#1e293b] py-4 sm:py-5 text-white" id="trust-bar" aria-label="Key Trust Credentials">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Responsive Grid: 2 columns on mobile with 5th featured card spanning 2 cols, 5 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 sm:gap-3.5 lg:gap-4 items-stretch">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            const isLastOnMobile = point.isFeatured;

            return (
              <div
                key={index}
                className={`flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl border transition-all duration-200 ${
                  isLastOnMobile
                    ? 'col-span-2 md:col-span-1 bg-gradient-to-r from-[#c2841e]/15 via-[#0b1e36] to-[#c2841e]/15 border-[#c2841e]/40 shadow-sm'
                    : 'bg-white/[0.03] border-white/10 hover:border-[#c2841e]/40 hover:bg-white/[0.05]'
                }`}
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isLastOnMobile
                      ? 'bg-[#c2841e]/25 border border-[#c2841e]/50 text-[#fcd34d]'
                      : 'bg-[#0b1e36] border border-[#1e3a5f] text-[#f59e0b]'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <p className="text-xs sm:text-sm font-bold text-white tracking-tight truncate sm:whitespace-normal">
                      {point.title}
                    </p>
                    {isLastOnMobile && (
                      <span className="md:hidden text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#c2841e] text-white uppercase tracking-wider">
                        Starting
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] sm:text-xs text-[#94a3b8] truncate sm:whitespace-normal mt-0.5">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

