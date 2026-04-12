import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Clock3,
  Globe,
  Handshake,
  LaptopMinimalCheck,
  LayoutDashboard,
  LockKeyhole,
  Paintbrush,
  SearchCheck,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ServiceCard = {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  tag: string;
};

export const primaryServices: ServiceCard[] = [
  {
    title: 'Helpdesk & Remote Support',
    description: 'Fast, ticket-based remote assistance for everyday issues - from printer errors to software bugs.',
    bullets: ['24/7 Remote Support', 'Ticket Management', 'Quick Response Time'],
    icon: LaptopMinimalCheck,
    tag: 'IT support services',
  },
  {
    title: 'Network & Infrastructure',
    description: 'Cloud migrations, VPN setup, and secure Wi-Fi and network design for small to mid-size businesses.',
    bullets: ['Cloud Migration', 'VPN Configuration', 'Network Security'],
    icon: ServerCog,
    tag: 'Keep it connected',
  },
  {
    title: 'Cybersecurity & Compliance',
    description: 'Endpoint protection, vulnerability scans, and employee security training to keep your data safe.',
    bullets: ['Threat Protection', 'Security Audits', 'Compliance Training'],
    icon: ShieldCheck,
    tag: 'Protect the business',
  },
];

export const developmentServices: ServiceCard[] = [
  {
    title: 'Web App Development',
    description: 'Full-stack web apps built with React, Next.js, and modern APIs.',
    bullets: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    icon: LayoutDashboard,
    tag: 'Custom software development',
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform apps using React Native and Flutter for iOS and Android.',
    bullets: ['React Native', 'Flutter', 'iOS', 'Android'],
    icon: Smartphone,
    tag: 'Mobile experiences',
  },
  {
    title: 'Automation & Integration',
    description: 'Custom scripts, APIs, and dashboards to streamline your workflow.',
    bullets: ['Python', 'API Integration', 'Webhooks', 'Dashboards'],
    icon: Workflow,
    tag: 'Streamline work',
  },
  {
    title: 'Ongoing Support',
    description: 'Continuous maintenance and updates after launch so the work stays useful.',
    bullets: ['Maintenance', 'Updates', 'Quality Assurance'],
    icon: Bot,
    tag: 'Stay supported',
  },
];

export const webDesignServices: ServiceCard[] = [
  {
    title: 'Custom Development',
    description: 'From landing pages to eCommerce sites - built for speed and scalability.',
    bullets: ['Responsive Design', 'SEO Optimized', 'Fast Loading Times'],
    icon: Globe,
    tag: 'Built to perform',
  },
  {
    title: 'Design & Branding',
    description: 'Tailored UI/UX and brand-focused layouts using Tailwind and modern animations.',
    bullets: ['Custom UI/UX Design', 'Brand Identity', 'Design Systems'],
    icon: Paintbrush,
    tag: 'Designed to fit',
  },
  {
    title: 'Hosting & Deployment',
    description: 'Fast, secure hosting on Vercel, Netlify, or your preferred environment.',
    bullets: ['Cloud Hosting', 'SSL Certificates', 'Performance Monitoring'],
    icon: SearchCheck,
    tag: 'Launch cleanly',
  },
];

export const proofPoints = [
  { label: 'Trusted IT Solutions', icon: Handshake },
  { label: 'Support available 24/7', icon: Clock3 },
  { label: 'Enterprise-grade security', icon: LockKeyhole },
  { label: 'Modern development and design', icon: BadgeCheck },
];

export const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '24/7', label: 'Support Available' },
  { value: '99.9%', label: 'Uptime SLA' },
];

export const process = [
  {
    step: '01',
    title: 'Assess the need',
    text: 'Start with the problem you need solved, whether that is support, infrastructure, security, development, or web design.',
  },
  {
    step: '02',
    title: 'Scope the solution',
    text: 'Turn that into a focused service path with the right level of support, build work, or redesign effort.',
  },
  {
    step: '03',
    title: 'Deliver the work',
    text: 'Execute with practical implementation, clear communication, and a bias toward results that are actually usable.',
  },
  {
    step: '04',
    title: 'Support and maintain',
    text: 'Keep systems running with ongoing support, monitoring, updates, and follow-through after launch.',
  },
];

export const ctaPills = ['IT Support', 'Software Development', 'Web Design', 'Cybersecurity', 'Managed IT'];

export const pageHero = {
  services: {
    eyebrow: 'IT Support Services',
    title: 'Comprehensive IT support solutions built to keep your business running smoothly.',
    text: 'Professional IT support services designed to reduce downtime, improve reliability, and keep operations moving with minimal friction.',
  },
  development: {
    eyebrow: 'Development Services',
    title: 'Custom software development that turns ideas into practical applications.',
    text: 'Transform your ideas into powerful applications with modern technologies, clean builds, and ongoing support after launch.',
  },
  web: {
    eyebrow: 'Web Design Services',
    title: 'Modern web design and development that engages users and drives action.',
    text: 'Create stunning, high-performance websites with stronger messaging, cleaner structure, and a sharper visual direction.',
  },
  contact: {
    eyebrow: 'Get in touch',
    title: 'Contact Kyroscoe',
    text: 'Have questions? Reach out and get help with IT support, development, web design, or your next project.',
  },
  booking: {
    eyebrow: 'Book a consultation',
    title: 'Schedule your free consultation.',
    text: "Let's discuss your IT needs and find the right solution for your business.",
  },
};

export const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Development', href: '/development' },
  { label: 'Web Design', href: '/web-design' },
  { label: 'Contact', href: '/contact' },
];

export const actionLink = { label: 'Book Consultation', href: '/booking', icon: ArrowRight };

export const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Development', href: '/development' },
  { label: 'Web Design', href: '/web-design' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];
