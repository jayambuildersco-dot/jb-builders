import { COMPANY_DATA } from '../data/companyData';

export function generateAndDownloadVCard(): void {
  const vCardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${COMPANY_DATA.name}`,
    `ORG:${COMPANY_DATA.name};Civil Engineers & Builders`,
    `TITLE:Civil Engineers & Builders (Est. 1998)`,
    `TEL;TYPE=CELL,VOICE:${COMPANY_DATA.phoneRaw}`,
    `EMAIL;TYPE=INTERNET,WORK:${COMPANY_DATA.email}`,
    `ADR;TYPE=WORK:;;${COMPANY_DATA.address.street}\\, ${COMPANY_DATA.address.locality};${COMPANY_DATA.address.city};${COMPANY_DATA.address.state};;${COMPANY_DATA.address.country}`,
    `URL:https://jayambuilders.com`,
    `NOTE:Established in 1998. 25+ Years of Construction Experience in Tamil Nadu. Residential & Commercial Construction from ₹1650/sq.ft*.`,
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Jayam_Builders_Contact.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
