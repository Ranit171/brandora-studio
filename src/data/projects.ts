import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'nova',
    number: '01',
    title: 'NOVA',
    subtitle: 'Brand Website & High-Performance Platform',
    category: 'Brand Website / Web Development',
    client: 'Nova Robotics & AI Labs',
    year: '2025',
    aspectRatio: 'wide',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1633493106185-5b4d7dc2cf7b?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['Web Architecture', 'WebGL & Three.js', 'Performance Tuning', 'SEO Foundations'],
    summary: 'An immersive, award-worthy corporate flagship website engineered to showcase next-generation autonomous robotics with 60fps WebGL rendering and sub-second load times.',
    challenge: 'Nova needed to transition from an R&D stealth-stage startup into an enterprise category leader. Their previous site had heavy asset lag, poor mobile UX, and zero qualified enterprise pipeline.',
    strategy: 'We merged editorial typography with a custom shader-powered product visualizer, stripped all render-blocking scripts, and configured a technical SEO hierarchy to capture high-intent enterprise search queries.',
    whatWeBuilt: [
      'Custom React & Next.js static engine with Edge caching',
      'Interactive 3D product visualizer with low-GPU fallback',
      'Editorial bento layout with micro-motion state animations',
      'Automated technical schema markup and Core Web Vitals optimization'
    ],
    marketingApproach: [
      'Zero-click keyword optimization for autonomous systems terms',
      'High-converting interactive demo scheduler integration',
      'Targeted B2B executive LinkedIn acquisition campaign'
    ],
    results: [
      { metric: '99/100', label: 'Mobile Lighthouse Score' },
      { metric: '+240%', label: 'Demo Request Pipeline' },
      { metric: '0.6s', label: 'First Contentful Paint' }
    ],
    accentColor: '#ff477e'
  },
  {
    id: 'arc',
    number: '02',
    title: 'ARC',
    subtitle: 'Direct-to-Consumer Luxury E-commerce & CRO',
    category: 'E-commerce / Development + CRO',
    client: 'Arc Audio Atelier',
    year: '2025',
    aspectRatio: 'square',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['Headless Shopify', 'Custom Cart Flow', 'Conversion Optimization', 'Paid Social Funnels'],
    summary: 'A bespoke headless digital storefront for audiophile-grade acoustic hardware, driving explosive international checkout conversion through ultra-clean checkout engineering.',
    challenge: 'Traditional Shopify templates couldn’t support their editorial storytelling while keeping checkout speeds under 2 seconds, leading to a 68% cart abandonment rate.',
    strategy: 'Built a headless storefront with instant slide-out cart drawers, dynamic sound wave previews, and a multivariate checkout optimization test matrix.',
    whatWeBuilt: [
      'Headless Shopify Plus frontend with instant page transitions',
      'Custom acoustic frequency comparator tool in Web Audio API',
      'Frictionless 1-click Express Checkout drawer'
    ],
    marketingApproach: [
      'Full-funnel Meta & TikTok video ad creative scaling',
      'Klaviyo VIP retention flow with personalized audio profile quizzes',
      'Dynamic retargeting reducing customer acquisition cost by 42%'
    ],
    results: [
      { metric: '+64%', label: 'Checkout Conversion Rate' },
      { metric: '3.4x', label: 'Return on Ad Spend (ROAS)' },
      { metric: '-55%', label: 'Cart Abandonment Drop' }
    ],
    accentColor: '#ff6b4a'
  },
  {
    id: 'vanta',
    number: '03',
    title: 'VANTA',
    subtitle: 'Global Product Launch & Paid Growth Engine',
    category: 'Digital Campaign / Marketing',
    client: 'Vanta Apparel Lab',
    year: '2024',
    aspectRatio: 'tall',
    coverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['Performance Marketing', 'Editorial Creative Direction', 'Landing Page Sprints', 'Data Analytics'],
    summary: 'An aggressive 90-day multi-channel digital blitz that propelled a technical outerwear brand into a viral cultural staple across North America and Europe.',
    challenge: 'High cost-per-acquisition (CPA) on standard social channels with poor audience engagement on generic product listing pages.',
    strategy: 'Constructed 8 dynamic high-velocity landing pages tailored to distinct customer cohorts, backed by relentless algorithmic ad testing.',
    whatWeBuilt: [
      'Dynamic cohort-based landing page engine with 99.8% uptime',
      'Server-side Meta Conversions API (CAPI) data pipeline',
      'Interactive sizing and fabric resistance demonstration'
    ],
    marketingApproach: [
      'Multi-angle performance creative (UGC, macro-texture, laboratory trials)',
      'Algorithmic Google Performance Max campaign architecture',
      'Automated SMS drop system with 94% open rate'
    ],
    results: [
      { metric: '1.8M', label: 'Campaign Impressions' },
      { metric: '$420K', label: 'Launch Week GMV' },
      { metric: '-38%', label: 'Cost Per Acquisition' }
    ],
    accentColor: '#d4ff32'
  },
  {
    id: 'orbit',
    number: '04',
    title: 'ORBIT',
    subtitle: 'Developer Platform & Interactive Documentation',
    category: 'SaaS Website / Development',
    client: 'Orbit Cloud Telemetry',
    year: '2024',
    aspectRatio: 'square',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['Frontend Engineering', 'Interactive Code Playground', 'Design System', 'Technical Copy'],
    summary: 'A developer-first platform designed with dark brutalist aesthetics, interactive CLI simulators, and razor-sharp type hierarchies that engineers love.',
    challenge: 'Developers were bouncing within 12 seconds due to generic SaaS graphics and confusing pricing calculators.',
    strategy: 'Re-imagined the product as a code-native workbench: executable terminals, keyboard-navigable documentation, and zero marketing fluff.',
    whatWeBuilt: [
      'Interactive browser-based CLI playground with mock execution',
      'Monospaced typography hierarchy with keyboard shortcut navigation',
      'High-speed documentation powered by MDX and fuzzy search'
    ],
    marketingApproach: [
      'Organic GitHub trending launches & developer community seeding',
      'Search engine domination on niche cloud infrastructure queries',
      'Product-led onboarding funnel with immediate API key provisioning'
    ],
    results: [
      { metric: '3.8x', label: 'Average Time on Site' },
      { metric: '14,000+', label: 'Developer Signups in 60 Days' },
      { metric: '0ms', label: 'Layout Shift (CLS)' }
    ],
    accentColor: '#818cf8'
  },
  {
    id: 'aura',
    number: '05',
    title: 'AURA',
    subtitle: 'Organic Search Authority & High-Intent B2B Leads',
    category: 'SEO + Lead Generation',
    client: 'Aura Climate Advisory',
    year: '2024',
    aspectRatio: 'wide',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['Programmatic SEO', 'B2B Lead Funnels', 'Technical Auditing', 'Content Architecture'],
    summary: 'A technical SEO and B2B growth overhaul that catapulted an enterprise ESG consulting firm from page 6 to the #1 spot on 45+ critical high-value commercial keywords.',
    challenge: 'Zero organic presence, legacy CMS with 4,000 broken redirects, and heavy reliance on slow outbound sales reps.',
    strategy: 'Cleaned indexing bloat, constructed a programmatic ESG regulation directory, and embedded high-intent benchmark calculators that turn readers into sales calls.',
    whatWeBuilt: [
      'High-speed headless CMS directory handling 500+ regulatory guides',
      'Dynamic carbon compliance ROI calculator widget',
      'Automated CRM lead-enrichment pipeline'
    ],
    marketingApproach: [
      'Comprehensive semantic content clusters targeting Fortune 500 sustainability heads',
      'High-authority digital PR backlinks from financial and environmental journals',
      'Inbound lead score qualification routing'
    ],
    results: [
      { metric: '+510%', label: 'Organic Search Traffic' },
      { metric: '$1.2M', label: 'Pipeline Generated' },
      { metric: '#1', label: 'Rankings on Primary Commercial Queries' }
    ],
    accentColor: '#10b981'
  },
  {
    id: 'kinetic',
    number: '06',
    title: 'KINETIC',
    subtitle: 'Spatial Computing Showcase & Experiential Web',
    category: 'Interactive Experience / WebGL',
    client: 'Kinetic Hardware Architecture',
    year: '2025',
    aspectRatio: 'tall',
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['Creative Development', 'Spatial Audio', 'Fluid Physics', 'Brand Identity'],
    summary: 'A fluid, sound-responsive interactive 3D web journey celebrating architectural kinetic engineering with custom shaders and tactile physics.',
    challenge: 'Create an unforgettable, award-level web showcase that demonstrates the studio’s absolute technical mastery without sacrificing mobile accessibility.',
    strategy: 'Engineered lightweight procedural geometry with smooth mouse-follow lighting, tactile sound effects on interaction, and zero external 3D model asset overhead.',
    whatWeBuilt: [
      'Custom WebGL shaders executing at locked 60fps',
      'Adaptive GPU degradation pipeline for battery-saver devices',
      'Micro-sound tactile feedback on hover and navigation'
    ],
    marketingApproach: [
      'Awwwards & FWA submission campaign resulting in Site of the Day',
      'Design Twitter & LinkedIn organic viral case breakdown',
      'Inbound agency and enterprise brand inquiries influx'
    ],
    results: [
      { metric: 'FWA & SOTD', label: 'Industry Design Honors' },
      { metric: '420,000+', label: 'Unique Global Visitors' },
      { metric: '4m 12s', label: 'Average Interaction Session' }
    ],
    accentColor: '#ec4899'
  }
];
