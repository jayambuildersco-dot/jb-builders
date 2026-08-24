import { AnalyticsEventName } from '../types';

export function getUTMParameters(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];
  const result: Record<string, string> = {};

  utmKeys.forEach((key) => {
    const val = params.get(key);
    if (val) result[key] = val;
  });

  if (document.referrer) {
    result.referrer = document.referrer;
  }
  result.landing_page = window.location.pathname;

  return result;
}

export function trackConversionEvent(eventName: AnalyticsEventName, eventParams: Record<string, any> = {}): void {
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...eventParams,
    ...getUTMParameters()
  };

  // 1. Google Tag Manager / GA4 datalayer hook
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push(payload);
  }

  // 2. Window custom event for modular integrations
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('jayam_analytics_event', { detail: payload }));
  }

  // Helpful console feedback in dev mode
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Jayam Analytics] Event: ${eventName}`, payload);
  }
}
