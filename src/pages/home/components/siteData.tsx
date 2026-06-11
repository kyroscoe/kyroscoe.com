import { ArrowRight, Code2, Globe2, LifeBuoy, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ServiceCard = {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  tag: string;
};

export type ProjectCard = {
  name: string;
  type: string;
  description: string;
  work: string;
  tags?: string[];
  url?: string;
  image?: string;
};

export type CaseStudy = ProjectCard & {
  overview: string;
  bullets: string[];
  tags: string[];
};

export const services: ServiceCard[] = [
  {
    title: 'IT Support & Business Tech',
    description: 'Practical support for the technology small businesses depend on every day.',
    bullets: [
      'Troubleshooting and technical guidance',
      'Business email and Microsoft 365 support',
      'Device, account, and access cleanup',
      'Computer repair under this category only',
    ],
    icon: LifeBuoy,
    tag: 'Daily tech support',
  },
  {
    title: 'Cybersecurity Guidance',
    description: 'Clear security guidance that helps small businesses reduce risk without overcomplicating the environment.',
    bullets: [
      'Account and access reviews',
      'Phishing prevention guidance',
      'Website and system security basics',
      'Vulnerability and risk tracking',
    ],
    icon: ShieldCheck,
    tag: 'Risk reduction',
  },
  {
    title: 'Websites & Web Presence',
    description: 'Clean, practical websites and web support for small businesses that need a professional online presence.',
    bullets: [
      'Business websites',
      'Landing pages',
      'DNS, hosting, and launch support',
      'Website cleanup and redesigns',
    ],
    icon: Globe2,
    tag: 'Web presence',
  },
  {
    title: 'Custom Tools & Consulting',
    description: 'Technical consulting, automations, and custom tools for businesses that need better ways to work.',
    bullets: ['CRM concepts', 'Workflow automation', 'Forms and dashboards', 'General technical consulting'],
    icon: Code2,
    tag: 'Better systems',
  },
];

export const projects: ProjectCard[] = [
  {
    name: 'Buckeye Pads',
    type: 'Small Business Website & Domain Cleanup',
    description:
      'Built a cleaner, more professional web presence for a U.S.-based industrial press pad and cover supplier.',
    work: 'Website structure, product and resource organization, customer-facing copy, hosting setup, and domain/DNS troubleshooting.',
    tags: ['Web Design', 'Small Business', 'DNS', 'Hosting', 'Copywriting'],
    url: 'https://buckeyepads.com/',
    image: '/brand/buckeye-pads-logo.png',
  },
  {
    name: 'BB Property',
    type: 'Local Business Website',
    description:
      'Created a professional website for a local property-focused business with clear service messaging and a simple contact path.',
    work: 'Service structure, responsive layout, content organization, and practical launch-ready website implementation.',
    tags: ['Web Design', 'Local Business', 'Responsive Design', 'Content Structure'],
    url: 'https://bb-property.com/',
    image: '/brand/bb-property-logo.jpg',
  },
  {
    name: 'Service CRM Concept',
    type: 'Custom Software Prototype',
    description:
      'Designed and developed a CRM concept for service-based businesses managing customers, jobs, notes, and workflows.',
    work: 'Product structure, workflow planning, interface refinement, and AI-assisted development iteration.',
    tags: ['Custom Software', 'CRM', 'Product Design', 'Workflow Automation', 'AI-Assisted Development'],
  },
  {
    name: 'KyroAI',
    type: 'Internal AI Workflow Concept',
    description:
      'Developed an internal AI-focused concept under the Kyroscoe brand for practical small-business workflows and automation.',
    work: 'AI workflow exploration, brand direction, product positioning, and practical implementation planning.',
    tags: ['AI', 'Automation', 'Internal R&D', 'Branding', 'Small Business Technology'],
    image: '/brand/kyroai.png',
  },
  {
    name: 'Shopify Site Support',
    type: 'Pages, Theme Access & Deployment Planning',
    description:
      'Helped a small-business client move from a separately built website toward Shopify by clarifying access and setup needs.',
    work: 'Shopify permissions review, page setup planning, theme access clarification, and implementation guidance.',
    tags: ['Shopify', 'Client Support', 'Web Deployment', 'Permissions', 'Small Business'],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    ...projects[0],
    overview:
      'Built a cleaner, more professional web presence for a U.S.-based industrial press pad and cover supplier. The project focused on making the business easier to understand online, organizing product and resource information, preparing the company for direct-to-customer sales, and cleaning up domain/DNS issues so the site could launch correctly.',
    bullets: [
      'Built a modern small-business website for an industrial dry-cleaning and laundry supplier.',
      'Wrote and refined customer-facing website copy for distributors, equipment manufacturers, and commercial operators.',
      'Organized product, resource, and ordering information into a clearer site structure.',
      'Supported direct-to-customer sales positioning as the business expanded beyond local distributor channels.',
      'Configured hosting and helped troubleshoot domain/DNS issues, including conflicting www records.',
    ],
    tags: ['Web Design', 'Small Business', 'DNS', 'Hosting', 'Copywriting'],
  },
  {
    ...projects[1],
    overview:
      'Created a professional website for a local property-focused business, with a clean layout, clear service messaging, and a structure designed to help visitors quickly understand the company and make contact.',
    bullets: [
      'Built a straightforward business website focused on clarity and trust.',
      "Organized the company's services and contact path into a simple customer journey.",
      'Created a responsive layout suitable for desktop and mobile visitors.',
      'Focused the site around practical information instead of bloated marketing copy.',
    ],
    tags: ['Web Design', 'Local Business', 'Responsive Design', 'Content Structure'],
  },
  {
    ...projects[2],
    overview:
      'Designed and developed a CRM concept for service-based businesses that need a better way to manage customers, jobs, notes, and operational workflows. The work focused on product structure, user experience, workflow planning, and building toward a more polished, sellable software platform.',
    bullets: [
      'Created a custom CRM concept for roofing and service-based business workflows.',
      'Planned core modules around customers, jobs, notes, status tracking, and business operations.',
      'Refined the user interface to feel more like a real product and less like a generic internal tool.',
      'Used AI-assisted development workflows to accelerate planning, iteration, and implementation.',
    ],
    tags: ['Custom Software', 'CRM', 'Product Design', 'Workflow Automation', 'AI-Assisted Development'],
  },
  {
    ...projects[3],
    overview:
      'Developed an internal AI-focused concept under the Kyroscoe brand to explore how small businesses can use AI-assisted workflows, automation, and technical guidance without needing a large internal technology team.',
    bullets: [
      'Explored AI-assisted workflows for small-business technology operations.',
      'Developed brand direction and product positioning for a Kyroscoe AI concept.',
      'Focused on practical uses of AI: support, automation, documentation, and business process improvement.',
      'Positioned the concept around useful implementation instead of hype.',
    ],
    tags: ['AI', 'Automation', 'Internal R&D', 'Branding', 'Small Business Technology'],
  },
  {
    ...projects[4],
    overview:
      'Helped a small-business client move from a separately built website toward Shopify by identifying required permissions, planning page setup, and preparing the site structure for implementation inside the Shopify environment.',
    bullets: [
      'Reviewed Shopify access and identified missing permissions needed to create and manage pages.',
      'Helped clarify the difference between theme access, file access, and page-management permissions.',
      'Planned how an externally built site could be recreated inside Shopify.',
      'Supported the client with clear instructions so they could grant the correct access.',
    ],
    tags: ['Shopify', 'Client Support', 'Web Deployment', 'Permissions', 'Small Business'],
  },
];

export const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const actionLink = { label: 'Start a Project', href: '/contact', icon: ArrowRight };

export const footerLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
