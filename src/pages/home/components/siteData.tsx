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
};

export type CaseStudy = ProjectCard & {
  overview: string;
  problem: string;
  tools: string[];
  outcome: string;
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
    type: 'Website / Business Web Presence',
    description: 'Website and web presence for a dry cleaning pads and covers business.',
    work: 'Website structure, product-focused content, resources page planning, deployment support, and DNS/domain troubleshooting.',
  },
  {
    name: 'BB Property',
    type: 'Website / Small Business Web Presence',
    description: 'Website project for a property-focused business.',
    work: 'Website structure, service presentation, brand layout, and launch support.',
  },
  {
    name: 'CRM Project',
    type: 'Custom Tool / Business System',
    description: 'CRM concept and planning for a business workflow tool.',
    work: 'Interface planning, workflow mapping, feature structure, and custom software direction.',
  },
  {
    name: 'Kyroscoe',
    type: 'Brand Website / Technology Business',
    description: 'Main website for presenting Kyroscoe services, work, and project inquiries.',
    work: 'Brand positioning, service structure, homepage cleanup, portfolio planning, and contact flow.',
  },
  {
    name: 'KyroAI',
    type: 'AI / Brand Concept / Technical Project',
    description: "AI-focused brand and project concept connected to Kyroscoe's technology direction.",
    work: 'Brand direction, concept planning, visual identity exploration, and technical positioning.',
  },
];

export const caseStudies: CaseStudy[] = projects.map((project) => ({
  ...project,
  overview:
    project.name === 'Buckeye Pads'
      ? 'A practical website and web presence project for a specialized small business with product-specific information needs.'
      : project.name === 'BB Property'
        ? 'A small business web presence project focused on clear service presentation and launch-ready structure.'
        : project.name === 'CRM Project'
          ? 'A business system planning project focused on turning workflow needs into a usable CRM direction.'
          : project.name === 'KyroAI'
            ? 'A brand and technical concept project exploring how an AI-focused direction could fit into the Kyroscoe ecosystem.'
            : 'A brand website project focused on making Kyroscoe clearer, sharper, and easier for small businesses to understand.',
  problem:
    project.name === 'CRM Project'
      ? 'The business needed a clearer structure for tracking relationships, tasks, and workflow steps before custom software decisions could be made.'
      : project.name === 'KyroAI'
        ? 'The project needed a grounded concept, brand direction, and technical positioning before moving into build decisions.'
        : 'The project needed clearer messaging, a more useful page structure, and a cleaner path from visitor interest to project inquiry.',
  tools:
    project.name === 'CRM Project'
      ? ['Workflow mapping', 'Interface planning', 'CRM concepts', 'Custom software planning']
      : project.name === 'KyroAI'
        ? ['Brand direction', 'AI concept planning', 'Visual identity', 'Technical positioning']
        : ['Content structure', 'Responsive web layout', 'DNS and deployment support', 'Launch planning'],
  outcome:
    project.name === 'CRM Project'
      ? 'A clearer software direction with mapped features, workflow priorities, and a stronger foundation for future build work.'
      : project.name === 'KyroAI'
        ? 'A sharper project concept with a clearer connection to Kyroscoe and a more defined technical direction.'
        : 'A cleaner, more practical web presence that is easier to understand, maintain, and launch.',
}));

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
