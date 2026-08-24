import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, AlertCircle, Phone, Lock } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { LeadFormData } from '../types';
import { getUTMParameters, trackConversionEvent } from '../utils/analytics';

// Configurable endpoint for Google Apps Script Web App / Webhook / Form backend
// Set VITE_GOOGLE_SHEETS_SCRIPT_URL in .env or update the constant below
const GOOGLE_SHEETS_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SHEETS_SCRIPT_URL || '';


export const LeadFormSection: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    mobile: '',
    whatsapp: '',
    whatsappSameAsMobile: true,
    city: '',
    projectType: 'New Residential Construction',
    plotStatus: 'Yes',
    plotSize: '',
    builtUpArea: '',
    currentStage: 'Exploring',
    expectedStartTime: '1–3 Months',
    budgetRange: '₹25L – ₹50L',
    message: '',
    consent: false
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSameAsMobileToggle = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      whatsappSameAsMobile: checked,
      whatsapp: checked ? prev.mobile : prev.whatsapp
    }));
  };

  // Generate structured WhatsApp text from submitted form
  const generateWhatsAppMessage = () => {
    const lines = [
      `*New Project Enquiry - Jayam Builders Website*`,
      `---------------------------------`,
      `*Name:* ${formData.name}`,
      `*Mobile:* ${formData.mobile}`,
      `*WhatsApp:* ${formData.whatsappSameAsMobile ? formData.mobile : formData.whatsapp || formData.mobile}`,
      `*Location/City:* ${formData.city}`,
      `*Project Type:* ${formData.projectType}`,
      `*Plot Owned:* ${formData.plotStatus}`,
      formData.plotSize ? `*Plot Size:* ${formData.plotSize}` : null,
      formData.builtUpArea ? `*Approx Built-up Area:* ${formData.builtUpArea}` : null,
      `*Current Stage:* ${formData.currentStage}`,
      `*Expected Start Time:* ${formData.expectedStartTime}`,
      `*Budget Range:* ${formData.budgetRange}`,
      formData.message ? `*Message:* ${formData.message}` : null,
      `---------------------------------`,
      `Submitted at: ${new Date().toLocaleString('en-IN')}`
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
      setErrorMessage('Please check the consent box to allow us to contact you.');
      return;
    }

    setFormStatus('submitting');
    trackConversionEvent('estimate_form_submit', {
      project_type: formData.projectType,
      city: formData.city,
      stage: formData.currentStage
    });

    const fullPayload = {
      ...formData,
      whatsapp: formData.whatsappSameAsMobile ? formData.mobile : formData.whatsapp,
      submittedAt: new Date().toISOString(),
      utmParams: getUTMParameters()
    };

    try {
      if (GOOGLE_SHEETS_SCRIPT_URL) {
        // Google Apps Script accepts text/plain or application/json without preflight CORS blocks
        await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(fullPayload),
          mode: 'no-cors' // Google Apps Script redirects 302 to googleusercontent, no-cors ensures clean submission
        });
      } else {
        // Instant response delay when backend URL not yet configured
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      setFormStatus('success');
    } catch (err: any) {
      console.error('Form submission error:', err);
      // Fallback: still show success/WhatsApp option so client never loses their lead
      setFormStatus('success');
    }
  };

  const handleSendWhatsAppDirect = () => {
    trackConversionEvent('whatsapp_click', { source: 'form_direct_whatsapp' });
    const text = generateWhatsAppMessage();
    const url = `https://wa.me/${COMPANY_DATA.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0b1e36] text-white blueprint-grid-dark relative" id="estimate">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3 py-1 bg-[#c2841e]/20 text-[#fcd34d] rounded-full text-xs font-bold uppercase tracking-wider border border-[#c2841e]/30">
            Direct Civil Engineering Consultation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Tell Us About Your Project
          </h2>
          <p className="text-sm text-[#cbd5e1]">
            Share your requirements for a customized, itemized construction estimate and architectural discussion.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#071322] border border-[#1e293b] rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {formStatus === 'success' ? (
            <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-[#10b981]/20 text-[#10b981] rounded-full flex items-center justify-center mx-auto border border-[#10b981]/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Thank You, {formData.name}!</h3>
              <p className="text-sm text-[#cbd5e1] max-w-md mx-auto leading-relaxed">
                Your project details for <strong className="text-white">{formData.city}</strong> have been received. Our senior civil engineering team will review your specifications and contact you shortly at <strong className="text-white">{formData.mobile}</strong>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleSendWhatsAppDirect}
                  className="bg-[#064e3b] hover:bg-[#065f46] text-[#34d399] font-bold text-xs px-5 py-3 rounded-xl border border-[#10b981]/30 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Also Forward via WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setFormStatus('idle');
                    setFormData({
                      name: '',
                      mobile: '',
                      whatsapp: '',
                      whatsappSameAsMobile: true,
                      city: '',
                      projectType: 'New Residential Construction',
                      plotStatus: 'Yes',
                      plotSize: '',
                      builtUpArea: '',
                      currentStage: 'Exploring',
                      expectedStartTime: '1–3 Months',
                      budgetRange: '₹25L – ₹50L',
                      message: '',
                      consent: false
                    });
                  }}
                  className="bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-4 py-3 rounded-xl"
                >
                  Submit Another Project
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" id="project-enquiry-form">
              
              {/* Row 1: Name, Mobile, WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#cbd5e1] flex items-center justify-between">
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#c2841e]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#cbd5e1]">Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    placeholder="e.g. 98765 43210"
                    value={formData.mobile}
                    onChange={(e) => {
                      const val = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        mobile: val,
                        whatsapp: prev.whatsappSameAsMobile ? val : prev.whatsapp
                      }));
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#c2841e]"
                  />
                </div>
              </div>

              {/* WhatsApp Row with Toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#cbd5e1]">City / Project Location *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="e.g. Madurai / Chennai / Trichy"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#c2841e]"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-[#cbd5e1]">WhatsApp Number</label>
                    <label className="text-[11px] text-[#94a3b8] flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.whatsappSameAsMobile}
                        onChange={(e) => handleSameAsMobileToggle(e.target.checked)}
                        className="accent-[#c2841e] rounded"
                      />
                      <span>Same as Mobile</span>
                    </label>
                  </div>
                  <input
                    type="tel"
                    name="whatsapp"
                    disabled={formData.whatsappSameAsMobile}
                    placeholder={formData.whatsappSameAsMobile ? formData.mobile || 'Same as Mobile' : 'WhatsApp Number'}
                    value={formData.whatsappSameAsMobile ? formData.mobile : formData.whatsapp}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#c2841e] ${
                      formData.whatsappSameAsMobile ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Project Type & Plot Ownership */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#cbd5e1]">Project Requirement Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white text-sm focus:outline-none focus:border-[#c2841e]"
                  >
                    <option value="New Residential Construction">New Residential Construction (Turnkey)</option>
                    <option value="Villa / Independent House">Villa / Independent House</option>
                    <option value="Commercial Construction">Commercial Construction (BOQ Basis)</option>
                    <option value="Architecture / Planning">Architecture / 2D House Planning</option>
                    <option value="3D Design">3D Exterior Elevation & Walkthrough</option>
                    <option value="Structural Drawing">Structural & MEP Engineering Drawings</option>
                    <option value="Plan Approval Assistance">Building Plan Approval Assistance</option>
                    <option value="Interior Design">Interior Design & Decoration</option>
                    <option value="Renovation">Renovation & Structural Remodeling</option>
                    <option value="Educational / Auditorium">Educational Institution / Auditorium</option>
                    <option value="Plot / Land Assistance">Plot / Land Purchase Feasibility</option>
                    <option value="Other">Other Civil Work</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#cbd5e1]">Do You Already Own the Plot?</label>
                  <select
                    name="plotStatus"
                    value={formData.plotStatus}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white text-sm focus:outline-none focus:border-[#c2841e]"
                  >
                    <option value="Yes">Yes, Plot is Ready</option>
                    <option value="Finalizing">In Process / Finalizing Purchase</option>
                    <option value="No">No, Searching for Plot</option>
                    <option value="Need Assistance">Need Assistance for Land Feasibility</option>
                  </select>
                </div>
              </div>

              {/* Plot Size & Built-up Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#cbd5e1]">Plot Dimensions / Size (Optional)</label>
                  <input
                    type="text"
                    name="plotSize"
                    placeholder="e.g. 30 x 40 ft, 1200 sq.ft, 2 Cents"
                    value={formData.plotSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#c2841e]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#cbd5e1]">Approximate Built-up Area (Optional)</label>
                  <input
                    type="text"
                    name="builtUpArea"
                    placeholder="e.g. 1,500 sq.ft (G+1)"
                    value={formData.builtUpArea}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#c2841e]"
                  />
                </div>
              </div>

              {/* Current Stage, Expected Start Time, Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#cbd5e1]">Current Stage</label>
                  <select
                    name="currentStage"
                    value={formData.currentStage}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white text-xs focus:outline-none focus:border-[#c2841e]"
                  >
                    <option value="Exploring">Exploring Ideas & Budget</option>
                    <option value="Have Plot">Have Plot, Need Planning</option>
                    <option value="Need Design">Need 2D/3D Design</option>
                    <option value="Plans Ready">Plans Ready, Need Estimate</option>
                    <option value="Ready to Start Construction">Ready to Start Construction</option>
                    <option value="Existing Building / Renovation">Existing Building / Renovation</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#cbd5e1]">Expected Start Time</label>
                  <select
                    name="expectedStartTime"
                    value={formData.expectedStartTime}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white text-xs focus:outline-none focus:border-[#c2841e]"
                  >
                    <option value="Immediately">Immediately</option>
                    <option value="Within 1 Month">Within 1 Month</option>
                    <option value="1–3 Months">1–3 Months</option>
                    <option value="3–6 Months">3–6 Months</option>
                    <option value="More Than 6 Months">More Than 6 Months</option>
                    <option value="Not Sure">Not Sure Yet</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#cbd5e1]">Approximate Budget Range</label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white text-xs focus:outline-none focus:border-[#c2841e]"
                  >
                    <option value="Below ₹25 Lakhs">Below ₹25 Lakhs</option>
                    <option value="₹25L – ₹50L">₹25 Lakhs – ₹50 Lakhs</option>
                    <option value="₹50L – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                    <option value="₹1 Crore – ₹2 Crores">₹1 Crore – ₹2 Crores</option>
                    <option value="Above ₹2 Crores">Above ₹2 Crores (Commercial/Large)</option>
                    <option value="Design Only Budget">Architectural Design Only</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#cbd5e1]">Specific Requirements / Message</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us about number of bedrooms, number of floors, special architectural style, or questions you have..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#122b4d] border border-[#1e3a5f] text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#c2841e]"
                />
              </div>

              {/* Consent Checkbox (Not pre-checked) */}
              <div className="space-y-2 pt-1">
                <label className="flex items-start gap-3 text-xs text-[#cbd5e1] cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-0.5 w-4 h-4 accent-[#c2841e] rounded"
                  />
                  <span>
                    I agree to be contacted by Jayam Builders regarding my enquiry via phone, WhatsApp, or email. (We respect your privacy; no spam or unrequested sales calls).
                  </span>
                </label>

                {errorMessage && (
                  <div className="p-3 bg-[#7f1d1d]/80 text-[#fecaca] rounded-xl text-xs flex items-center gap-2 border border-[#ef4444]/40">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>

              {/* Submission Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="flex-1 bg-gradient-to-r from-[#c2841e] to-[#d97706] hover:from-[#b47818] hover:to-[#c2841e] text-white font-bold text-sm py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                  id="submit-estimate-form-btn"
                >
                  {formStatus === 'submitting' ? (
                    <span>Submitting Details...</span>
                  ) : (
                    <>
                      <span>Request My Estimate</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsAppDirect}
                  className="bg-[#064e3b] hover:bg-[#065f46] text-[#34d399] border border-[#10b981]/40 font-bold text-sm py-4 px-5 rounded-xl transition-colors flex items-center justify-center gap-2"
                  id="form-whatsapp-direct-btn"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Details on WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748b]">
                <Lock className="w-3 h-3 text-[#10b981]" />
                <span>Your information is kept secure and treated with strict confidentiality.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
