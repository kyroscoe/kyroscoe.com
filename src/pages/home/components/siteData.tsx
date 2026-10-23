import { Code2, Globe2, LifeBuoy, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const business = {
  email: 'info@kyroscoe.com',
  phone: '937-631-1521',
  phoneHref: 'tel:+19376311521',
  serviceArea: 'On-site in Dayton, Springfield, and Columbus, Ohio. Remote support nationwide.',
  response: 'We respond to inquiries within 24 hours.',
};

export type Service = { id: string; title: string; description: string; bullets: string[]; icon: LucideIcon };
export const services: Service[] = [
  {
    id: 'it-support', title: 'IT Support', icon: LifeBuoy,
    description: 'Keep your team working with help for devices, email, accounts, and everyday IT issues.',
    bullets: ['Helpdesk and troubleshooting', 'Microsoft 365 and Google Workspace', 'Device setup, repair, and account access'],
  },
  {
    id: 'cybersecurity', title: 'Cybersecurity & vCISO', icon: ShieldCheck,
    description: 'Understand your risks and put a security plan in place, with leadership to guide it.',
    bullets: ['Risk assessments and security planning', 'Compliance and audit readiness', 'Virtual CISO and incident response support'],
  },
  {
    id: 'websites', title: 'Websites & Support', icon: Globe2,
    description: 'Build a business website or get ongoing help maintaining the one you have.',
    bullets: ['Website builds and redesigns', 'Hosting, domains, and DNS', 'Updates, maintenance, and troubleshooting'],
  },
  {
    id: 'automation', title: 'Tools & Automation', icon: Code2,
    description: 'Reduce repetitive work with tools built around your business.',
    bullets: ['Workflow automation', 'Forms and dashboards', 'Custom internal tools'],
  },
];
export const supportPlans = [
  { title: 'IT helpdesk', text: 'Ongoing assistance for your team’s devices, accounts, email, and software.' },
  { title: 'vCISO', text: 'Security leadership, risk priorities, and guidance for compliance and business decisions.' },
  { title: 'Website care', text: 'Updates, maintenance, and technical support for your business website.' },
];
export const certifications = [
  { id: 'cissp', short: 'CISSP', title: 'Certified Information Systems Security Professional', image: '/credentials/cissp.jpg' },
  { id: 'cism', short: 'CISM', title: 'Certified Information Security Manager', image: '/credentials/cism.jpg' },
  { id: 'ccsp', short: 'CCSP', title: 'Certified Cloud Security Professional', image: '/credentials/ccsp.jpg' },
  { id: 'crisc', short: 'CRISC', title: 'Certified in Risk and Information Systems Control', image: '/credentials/crisc.jpg' },
  { id: 'cciso', short: 'CCISO', title: 'Certified Chief Information Security Officer', image: '/credentials/cciso.jpg' },
  { id: 'ceh', short: 'CEH', title: 'Certified Ethical Hacker', image: '/credentials/ceh.jpg' },
  { id: 'sfpc', short: 'SFPC', title: 'Security Fundamentals Professional Certification', image: '/credentials/sfpc.jpg' },
  { id: 'pmp', short: 'PMP', title: 'Project Management Professional', image: '/credentials/pmp.jpg' },
  { id: 'csm', short: 'CSM', title: 'Certified ScrumMaster', image: '/credentials/csm.jpg' },
  { id: 'cyberops', short: 'CyberOps Associate', title: 'Cisco Certified CyberOps Associate', image: '/credentials/cisco-cyberops.jpg' },
  { id: 'ccst', short: 'CCST Networking', title: 'Cisco Certified Support Technician Networking', image: '/credentials/cisco-ccst-networking.jpg' },
];

export const serviceExamples = [
  {
    id: 'buckeye-pads-it', category: 'IT support', client: 'Buckeye Pads', title: 'Office network and printer support',
    description: 'Reinstalled printers and added them to the network after an outage. Set up a small local network with three PCs and two printers, including a shipping printer.',
  },
  {
    id: 'medical-assessment', category: 'Cybersecurity', client: 'Local medical practice', title: 'HIPAA-focused compliance assessment',
    description: 'Performed a HIPAA-focused compliance assessment for a local doctor’s office.',
  },
  {
    id: 'fintech-vciso', category: 'Security leadership', client: 'TrueML', title: 'Virtual CISO services',
    description: 'Provided virtual Chief Information Security Officer services for TrueML, a fintech company.',
  },
  {
    id: 'vendor-assessments', category: 'Third-party risk', client: 'Law offices and a credit union', title: 'Vendor and third-party assessments',
    description: 'Performed vendor and third-party assessments for local law offices and a local credit union.',
  },
  {
    id: 'school-audio', category: 'On-site technical support', client: 'NELSD', title: 'Football press box audio repair',
    description: 'Repaired audio equipment in the football field press box for NELSD.',
  },
];
export const partnerBadges = [
  { name: 'Cisco 360 Partner Program', image: '/partners/cisco-360-partner.jpg' },
  { name: 'Microsoft Solutions Partner', image: '/partners/microsoft-solutions-partner.jpg' },
  { name: 'Shopify Partner', image: '/partners/shopify-partner.jpg' },
  { name: 'Google Cloud Partner', image: '/partners/google-cloud-partner.png' },
  { name: 'AWS Partner — Managed Service Provider', image: '/partners/aws-managed-service-provider.png' },
];

export type Project = { id: string; name: string; type: string; description: string; bullets: string[]; url: string };
export const projects: Project[] = [
  {
    id: 'midwest-fencing', name: 'Midwest Fencing', type: 'Website design & launch',
    description: 'A website for an Ohio fencing company serving residential and commercial customers.',
    bullets: ['Organized services and estimate requests', 'Built responsive pages', 'Set up the domain and hosting'],
    url: 'https://fencesbymidwest.com/',
  },
  {
    id: 'buckeye-pads', name: 'Buckeye Pads', type: 'Website & domain support',
    description: 'A website for an industrial press pad and cover supplier.',
    bullets: ['Organized products and customer resources', 'Wrote customer-facing content', 'Configured hosting and resolved DNS issues'],
    url: 'https://buckeyepads.com/',
  },
  {
    id: 'bb-property', name: 'B&B Lawn & Property Maintenance', type: 'Business website',
    description: 'A website for a local lawn and property maintenance business.',
    bullets: ['Organized services and contact information', 'Built a responsive layout', 'Prepared the site for launch'],
    url: 'https://bb-property.com/',
  },
];
export const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
];
export const footerLinks = [...navLinks, { label: 'Contact', href: '/contact' }, { label: 'Privacy', href: '/privacy' }, { label: 'Terms', href: '/terms' }];
