import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, CheckCircle2, AlertCircle, Phone, Lock } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { LeadFormData } from '../types';
import { getUTMParameters, trackConversionEvent } from '../utils/analytics';

const GOOGLE_SHEETS_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SHEETS_SCRIPT_URL || '';


interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({ isOpen, onClose, initialContext }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    mobile: '',
    whatsapp: '',
    whatsappSameAsMobile: true,
    city: '',
    projectType: initialContext || 'New Residential Construction',
    plotStatus: 'Yes',
    plotSize: '',
    builtUpArea: '',
    currentStage: 'Exploring',
    expectedStartTime: '1–3 Months',
    budgetRange: '₹25L – ₹50L',
    message: initialContext ? `Inquiry regarding: ${initialContext}` : '',
    consent: false
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (initialContext) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialContext.includes('Commercial') ? 'Commercial Construction' : prev.projectType,
        message: `Inquiry regarding: ${initialContext}`
      }));
    }
  }, [initialContext]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      `*Estimate Request - Jayam Builders*`,
      `---------------------------------`,
      `*Name:* ${formData.name}`,
      `*Mobile:* ${formData.mobile}`,
      `*WhatsApp:* ${formData.whatsappSameAsMobile ? formData.mobile : formData.whatsapp || formData.mobile}`,
      `*City:* ${formData.city}`,
      `*Requirement:* ${formData.projectType}`,
      `*Plot Ready:* ${formData.plotStatus}`,
      formData.plotSize ? `*Plot Size:* ${formData.plotSize}` : null,
      formData.builtUpArea ? `*Built-up Area:* ${formData.builtUpArea}` : null,
      `*Stage:* ${formData.currentStage}`,
      `*Timeline:* ${formData.expectedStartTime}`,
      `*Budget:* ${formData.budgetRange}`,
      formData.message ? `*Notes:* ${formData.message}` : null,
      `---------------------------------`
    ].filter(Boolean);

    return lines.join('\n');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.mobile.trim() || !formData.city.trim()) {
      setErrorMessage('Please fill in your Name, Mobile Number, and City.');
      return;
    }

    if (!formData.consent) {
      setErrorMessage('Please check the consent box.');
      return;
    }

    setFormStatus('submitting');
    trackConversionEvent('estimate_form_submit', {
      source: 'modal',
      project_type: formData.projectType,
      city: formData.city
    });

    const fullPayload = {
      ...formData,
      whatsapp: formData.whatsappSameAsMobile ? formData.mobile : formData.whatsapp,
      submittedAt: new Date().toISOString(),
      source: 'Modal Estimate Form',
      utmParams: getUTMParameters()
    };

    try {
      if (GOOGLE_SHEETS_SCRIPT_URL) {
        await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(fullPayload),
          mode: 'no-cors'
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      setFormStatus('success');
    } catch (err) {
      console.error('Submission error:', err);
      setFormStatus('success');
    }
  };

  const handleSendWhatsAppDirect = () => {
    trackConversionEvent('whatsapp_click', { source: 'modal_whatsapp_direct' });
    const text = generateWhatsAppMessage();
    const url = `https://wa.me/${COMPANY_DATA.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#071322] border border-[#1e293b] text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#94a3b8] hover:text-white p-1 rounded-lg bg-white/5 hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {formStatus === 'success' ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-[#10b981]/20 text-[#10b981] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold">Estimate Request Received</h3>
            <p className="text-xs sm:text-sm text-[#cbd5e1] max-w-md mx-auto">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our civil engineers will review your requirement for <strong className="text-white">{formData.city}</strong> and call you at <strong className="text-white">{formData.mobile}</strong>.
            </p>
            <div className="pt-3 flex justify-center gap-3">
              <button
                onClick={handleSendWhatsAppDirect}
                className="bg-[#064e3b] text-[#34d399] font-bold text-xs px-4 py-2.5 rounded-xl border border-[#10b981]/30 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Forward via WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="bg-white/10 text-white text-xs font-semibold px-4 py-2.5 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#f59e0b]">
                Jayam Builders • Established 1998
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                Request a Construction Estimate
              </h3>
              <p className="text-xs text-[#94a3b8]">
                Residential construction from ₹1,650/sq.ft* of built-up area.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#cbd5e1]">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white text-xs focus:outline-none focus:border-[#c2841e]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#cbd5e1]">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={(e) => {
                    const val = e.target.value;
                    setFormData((prev) => ({
                      ...prev,
                      mobile: val,
                      whatsapp: prev.whatsappSameAsMobile ? val : prev.whatsapp
                    }));
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white text-xs focus:outline-none focus:border-[#c2841e]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#cbd5e1]">City / Location *</label>
                <input
                  type="text"
                  required
                  placeholder="Madurai, Chennai, Coimbatore, etc."
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white text-xs focus:outline-none focus:border-[#c2841e]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#cbd5e1]">Project Requirement</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white text-xs focus:outline-none focus:border-[#c2841e]"
                >
                  <option value="New Residential Construction">New Residential Construction (Turnkey)</option>
                  <option value="Villa / Independent House">Villa / Independent House</option>
                  <option value="Commercial Construction">Commercial Construction (BOQ Basis)</option>
                  <option value="Architecture / Planning">2D House Plans & 3D Elevations</option>
                  <option value="Structural Drawing">Structural & MEP Engineering Drawings</option>
                  <option value="Plan Approval Assistance">Building Plan Approval</option>
                  <option value="Interior Design">Interior Design & Decoration</option>
                  <option value="Renovation">Renovation & Remodeling</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#cbd5e1]">Do you have a plot?</label>
                <select
                  name="plotStatus"
                  value={formData.plotStatus}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white text-xs focus:outline-none focus:border-[#c2841e]"
                >
                  <option value="Yes">Yes, Plot is Ready</option>
                  <option value="Finalizing">Finalizing Land Deal</option>
                  <option value="No">No, Looking for Plot</option>
                  <option value="Need Assistance">Need Assistance</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#cbd5e1]">Approx Built-up Area</label>
                <input
                  type="text"
                  placeholder="e.g. 1500 sq.ft"
                  name="builtUpArea"
                  value={formData.builtUpArea}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white text-xs focus:outline-none focus:border-[#c2841e]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#cbd5e1]">Notes / Comments</label>
              <textarea
                name="message"
                rows={2}
                placeholder="Any special details or requirements..."
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white text-xs focus:outline-none focus:border-[#c2841e]"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-start gap-2.5 text-[11px] text-[#cbd5e1] cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-0.5 accent-[#c2841e] rounded"
                />
                <span>I agree to be contacted by Jayam Builders regarding this project enquiry.</span>
              </label>

              {errorMessage && (
                <div className="p-2.5 bg-[#7f1d1d] text-[#fecaca] rounded-lg text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="flex-1 bg-[#c2841e] hover:bg-[#b47818] text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow"
              >
                {formStatus === 'submitting' ? 'Submitting...' : 'Request My Estimate'}
                <Send className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={handleSendWhatsAppDirect}
                className="bg-[#064e3b] text-[#34d399] hover:bg-[#065f46] font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 border border-[#10b981]/30"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Send on WhatsApp</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
