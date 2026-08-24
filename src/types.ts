export interface CompanyInfo {
  name: string;
  category: string;
  establishedYear: number;
  experienceText: string;
  address: {
    street: string;
    locality: string;
    city: string;
    state: string;
    country: string;
    fullFormatted: string;
  };
  phone: string;
  phoneRaw: string;
  whatsappRaw: string;
  email: string;
  logoUrl: string;
  mapsUrl: string;
  paymentContacts: {
    paytm: string;
    phonepe: string;
    gpay: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'design' | 'engineering' | 'construction' | 'approvals' | 'interiors' | 'institutional';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  iconName: string;
  highlight?: string;
}

export interface ServiceCategoryGroup {
  id: 'design' | 'engineering' | 'construction' | 'approvals' | 'interiors' | 'institutional';
  title: string;
  subtitle: string;
  description: string;
  items: ServiceItem[];
}

export interface TamilNaduCity {
  name: string;
  slug: string;
  lat: number;
  lng: number;
  region: 'South' | 'North' | 'Central' | 'West';
  isHQ?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  shortAnswer: string;
  fullAnswer: string;
  category: 'cost' | 'services' | 'process' | 'coverage' | 'approvals';
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  keyDeliverable: string;
  durationHint?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  locality: string;
  city: string;
  category: 'residential' | 'commercial' | 'architecture' | 'interiors' | 'renovation' | 'institutional';
  categoryLabel: string;
  builtUpArea: string;
  scope: string;
  designChallenge: string;
  solution: string;
  imageUrl: string;
  imageAlt: string;
  status: string;
}

export interface LeadFormData {
  name: string;
  mobile: string;
  whatsapp: string;
  whatsappSameAsMobile: boolean;
  city: string;
  projectType: string;
  plotStatus: 'Yes' | 'No' | 'Finalizing' | 'Need Assistance';
  plotSize?: string;
  builtUpArea?: string;
  currentStage: 'Exploring' | 'Have Plot' | 'Need Design' | 'Plans Ready' | 'Ready to Start Construction' | 'Existing Building / Renovation';
  expectedStartTime: 'Immediately' | 'Within 1 Month' | '1–3 Months' | '3–6 Months' | 'More Than 6 Months' | 'Not Sure';
  budgetRange: string;
  message?: string;
  consent: boolean;
  utmParams?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    gclid?: string;
    referrer?: string;
    landing_page?: string;
  };
}

export type AnalyticsEventName =
  | 'call_click'
  | 'whatsapp_click'
  | 'estimate_form_start'
  | 'estimate_form_submit'
  | 'directions_click'
  | 'email_click'
  | 'service_click'
  | 'project_view'
  | 'vcard_download'
  | 'cost_calculator_use';
