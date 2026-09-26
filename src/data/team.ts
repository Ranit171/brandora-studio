import { Founder } from '../types';

export const FOUNDERS: Founder[] = [
  {
    name: 'Alex Vance',
    role: 'Founder / Lead Web Architect & Creative Technologist',
    discipline: 'Engineering & Web Architecture',
    bio: 'Specializing in modern full-stack web development, interactive WebGL experiences, editorial design engineering, and obsessive performance tuning. 10+ years engineering high-speed web apps that never falter under scale.',
    skills: [
      'Full-Stack Web Development',
      'Modern Frontend (React / TypeScript)',
      'Interactive WebGL & Motion Design',
      'High-Speed Landing Page Engineering',
      'Complex Web Applications',
      'Core Web Vitals & Sub-Second Loading',
      'Clean Code & Technical Architecture'
    ],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    coordinates: 'DEV × ARCHITECTURE'
  },
  {
    name: 'Elena Vance',
    role: 'Founder / Head of Growth & Digital Strategy',
    discipline: 'Growth & Digital Marketing',
    bio: 'Data-driven growth strategist and conversion architect. Former growth lead for high-velocity direct-to-consumer and B2B SaaS ventures, orchestrating millions in profitable paid media and dominant organic search engines.',
    skills: [
      'High-Intent Organic SEO Strategy',
      'Performance Paid Advertising (Meta / Google / LinkedIn)',
      'Conversion Rate Optimization (CRO)',
      'B2B Inbound Lead Generation',
      'Multi-Channel Content Strategy',
      'Algorithmic Customer Acquisition',
      'Brand Positioning & Messaging'
    ],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    coordinates: 'GROWTH × ACQUISITION'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'DISCOVER',
    category: 'ALINEMENT & RESEARCH',
    tagline: 'Understand the business, audience, and commercial objectives.',
    description:
      'We deconstruct your market positioning, dissect your highest-value customer personas, audit your competitors, and isolate the exact technological and psychological friction stopping your growth.',
    deliverables: ['Competitive Landscape Audit', 'Customer Intent Mapping', 'Technical Infrastructure Review', 'Project Scope Matrix']
  },
  {
    number: '02',
    title: 'STRATEGIZE',
    category: 'BLUEPRINT & FUNNEL',
    tagline: 'Develop the digital architecture and marketing game plan.',
    description:
      'Before a single line of code or design layout is rendered, we map out the complete acquisition funnel, technical wireframes, content hierarchy, and conversion pathways.',
    deliverables: ['Editorial Creative Direction', 'Wireframe Flow Schematics', 'SEO Keyword Hierarchy', 'Conversion Measurement Plan']
  },
  {
    number: '03',
    title: 'BUILD',
    category: 'CREATIVE ENGINEERING',
    tagline: 'Design and develop the bespoke digital experience.',
    description:
      'Crafted with pixel-level precision: bespoke typography, fluid micro-interactions, responsive layouts, and modern type-safe frontend code optimized for sub-second performance.',
    deliverables: ['Custom React / TS Platform', 'Bespoke Motion & Interaction Design', 'Mobile-First Fluid Layouts', 'Headless CMS Integration']
  },
  {
    number: '04',
    title: 'LAUNCH',
    category: 'DEPLOY & VERIFY',
    tagline: 'Deploy, stress-test, optimize, and calibrate.',
    description:
      'We orchestrate a seamless deployment with 100% test coverage: automated redirects, SSL security hardening, server-side analytics, and zero-downtime DNS propagation.',
    deliverables: ['Full Lighthouse Audit (95+)', 'Server-Side Analytics & CAPI', 'Automated Schema Markup', 'Cross-Device QA Testing']
  },
  {
    number: '05',
    title: 'GROW',
    category: 'SCALE & COMPOUND',
    tagline: 'Improve performance using real data and ongoing marketing.',
    description:
      'Launch is just day one. We continuously analyze heatmaps, run multivariate conversion tests, scale profitable ad channels, and publish high-authority SEO clusters that compound over time.',
    deliverables: ['A/B Conversion Testing', 'Ongoing Paid Media Scaling', 'Organic Keyword Expansion', 'Quarterly Growth Reviews']
  }
];
