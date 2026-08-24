/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { UtilityTopBar } from './components/UtilityTopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { PainPointsSection } from './components/PainPointsSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CostSection } from './components/CostSection';
import { ResidentialFocusSection } from './components/ResidentialFocusSection';
import { CommercialFocusSection } from './components/CommercialFocusSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { FAQSection } from './components/FAQSection';
import { LeadFormSection } from './components/LeadFormSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { EstimateModal } from './components/EstimateModal';

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState<boolean>(false);
  const [modalInitialContext, setModalInitialContext] = useState<string>('');

  const handleOpenEstimateModal = (context?: string) => {
    setModalInitialContext(context || '');
    setIsEstimateModalOpen(true);
  };

  const handleScrollToCostDisclaimer = () => {
    const costSection = document.getElementById('cost');
    if (costSection) {
      costSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1e293b] flex flex-col selection:bg-[#c2841e] selection:text-white">
      
      {/* 1. Utility Contact Top Bar (Desktop) */}
      <UtilityTopBar />

      {/* 2. Main Navigation (Sticky) */}
      <Navbar onOpenEstimateModal={() => handleOpenEstimateModal('Navbar CTA')} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 3. Dynamic Location-Personalized Hero Section */}
        <HeroSection
          onOpenEstimateModal={() => handleOpenEstimateModal('Hero Primary CTA')}
          onOpenCostDisclaimer={handleScrollToCostDisclaimer}
        />

        {/* 4. Verifiable Trust Bar Strip */}
        <TrustBar />

        {/* 5. Customer Pain Points & Clarity Section */}
        <PainPointsSection onOpenEstimateModal={() => handleOpenEstimateModal('Pain Points Section')} />

        {/* 6. About Jayam Builders & Heritage */}
        <AboutSection onOpenEstimateModal={() => handleOpenEstimateModal('About Section CTA')} />

        {/* 7. Comprehensive Services (6 Categories) */}
        <ServicesSection onOpenEstimateModal={(serviceTitle) => handleOpenEstimateModal(serviceTitle)} />

        {/* 8. Residential Construction Cost & Indicative Estimator (From ₹1,650/sq.ft*) */}
        <CostSection onOpenEstimateModal={(context) => handleOpenEstimateModal(context || 'Cost Section')} />

        {/* 9. Residential Construction Focus */}
        <ResidentialFocusSection onOpenEstimateModal={(context) => handleOpenEstimateModal(context || 'Residential Focus')} />

        {/* 10. Commercial & Institutional Construction (BOQ Basis) */}
        <CommercialFocusSection onOpenEstimateModal={(context) => handleOpenEstimateModal(context || 'Commercial BOQ')} />

        {/* 11. 8-Stage Building Process Timeline */}
        <ProcessTimeline onOpenEstimateModal={() => handleOpenEstimateModal('Process Timeline CTA')} />

        {/* 12. Portfolio / Proof Framework */}
        <PortfolioSection onOpenEstimateModal={(context) => handleOpenEstimateModal(context || 'Portfolio Section')} />

        {/* 13. Why Homeowners & Businesses Choose Jayam Builders */}
        <WhyChooseUs onOpenEstimateModal={() => handleOpenEstimateModal('Why Us Section')} />

        {/* 14. Tamil Nadu Statewide Coverage & City Explorer */}
        <ServiceAreaSection onOpenEstimateModal={(cityContext) => handleOpenEstimateModal(cityContext || 'Service Areas')} />

        {/* 15. Comprehensive FAQ & AEO Section */}
        <FAQSection onOpenEstimateModal={() => handleOpenEstimateModal('FAQ Section')} />

        {/* 16. Lead Generation & Project Enquiry Form */}
        <LeadFormSection />

        {/* 17. Contact Details, Google Map, Save vCard & Verified Payment Channels */}
        <ContactSection />

      </main>

      {/* 18. Comprehensive Footer */}
      <Footer />

      {/* 19. Sticky Mobile Conversion Bar */}
      <MobileBottomBar onOpenEstimateModal={() => handleOpenEstimateModal('Mobile Bottom Sticky Bar')} />

      {/* Universal Quick Estimate Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        initialContext={modalInitialContext}
      />

    </div>
  );
}
