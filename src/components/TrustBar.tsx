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
      desc: 'Transparent Estimates'
    }
  ];

  return (
    <div className="bg-[#071322] border-y border-[#1e293b] py-6 text-white" id="trust-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 px-3 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-[#c2841e]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#c2841e]/15 border border-[#c2841e]/30 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white tracking-tight">{point.title}</p>
                  <p className="text-xs text-[#94a3b8]">{point.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
