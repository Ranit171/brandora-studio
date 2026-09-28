import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'wanderly',
    number: '01',
    title: 'WANDERLY',
    subtitle: 'Cinematic Luxury Travel Agency & Bespoke Expedition Platform',
    category: 'Luxury Travel Platform / Web Development',
    client: 'Wanderly Luxury Expeditions',
    year: '2025',
    aspectRatio: 'wide',
    coverImage: '/projects/wanderly.jpg',
    secondaryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['React & Tailwind Architecture', 'Cinematic Motion Design', 'Interactive Itinerary Engine', 'Responsive Performance'],
    summary: 'An award-caliber, atmospheric digital experience designed for high-net-worth travelers, featuring dynamic destination hero transitions, glassmorphism UI, interactive multi-day itineraries, and real-time expedition booking.',
    challenge: 'High-end travelers expect emotional romance and seamless digital elegance. Traditional agency websites look like generic directory grids with clunky booking wizards, resulting in low trip-consultation conversions.',
    strategy: 'We created an editorial-first storytelling canvas using smooth cinematic motion, interactive destination carousels, expandable day-by-day travel timelines, and an instant frictionless expedition inquiry system.',
    whatWeBuilt: [
      'Cinematic destination slider with fluid camera shifts and backdrop transitions',
      'Interactive day-by-day expedition timeline with curated highlight breakdowns',
      'Glassmorphic dark aesthetic with custom typography pairings (Cormorant Garamond & Plus Jakarta Sans)',
      'Zero-latency trip booking drawer with customized departure scheduling'
    ],
    marketingApproach: [
      'High-intent luxury travel keyword hierarchy targeting private expeditions',
      'Editorial storytelling landing page structure designed for social proof and press features',
      'Direct consultation booking pipeline with instant concierge routing'
    ],
    results: [
      { metric: '99/100', label: 'Mobile Performance Index' },
      { metric: '+310%', label: 'Expedition Consultation Inquiries' },
      { metric: '4m 38s', label: 'Average Immersion Time' }
    ],
    link: 'https://animated-travel-agency.vercel.app/',
    accentColor: '#d9c7a2'
  },
  {
    id: 'traveleo',
    number: '02',
    title: 'TRAVELEO',
    subtitle: 'All-in-One Global Vacation Booking & Tour Discovery Portal',
    category: 'Travel Booking Portal / Web Development',
    client: 'Traveleo International Ltd.',
    year: '2025',
    aspectRatio: 'square',
    coverImage: '/projects/traveleo.jpg',
    secondaryImages: [
      'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['Full-Stack Frontend Architecture', 'Dynamic Filtering & Wishlist', 'Multi-Service Booking System', 'Conversion-First UI'],
    summary: 'A vibrant, high-conversion vacation platform with instant multi-mode search (Flights, Hotels, Packages, Cruises, Cars), real-time interactive wishlist, dynamic currency switcher, and verified tour packages worldwide.',
    challenge: 'Travel aggregators suffer from overwhelming interface clutter, slow filtering latencies, and high search abandon rates when users jump between separate flights, stays, and tour booking pages.',
    strategy: 'Engineered a unified, high-speed multi-tab search console with client-side reactive filtering, synchronized interactive wishlist counters, and clean card ergonomics that encourage effortless package exploration.',
    whatWeBuilt: [
      'Unified 5-service search console (Flights, Hotels, Packages, Cruises, Cars)',
      'Real-time reactive wishlist drawer with state persistence and price recalculation',
      'High-velocity destination filter pills with instant sub-50ms query updates',
      'Interactive customer testimonial carousel and verified partner badge showcase'
    ],
    marketingApproach: [
      'Conversion rate optimization (CRO) focused on high-urgency badges and limited-time offer ribbons',
      'SEO-engineered destination guides targeting family and luxury vacation terms',
      'Retargeting integration for abandoned package views and wishlist reminders'
    ],
    results: [
      { metric: '+85%', label: 'Package Booking Conversion' },
      { metric: '0.4s', label: 'Filter & Search Response Time' },
      { metric: '4.95★', label: 'User Experience Satisfaction' }
    ],
    link: 'https://travel-agency-three-jade.vercel.app/',
    accentColor: '#0284c7'
  },
  {
    id: 'storyverse',
    number: '03',
    title: 'STORYVERSE',
    subtitle: 'Minimalist Digital Publishing & Creative Community Platform',
    category: 'Digital Publishing & Community / Web Development',
    client: 'StoryVerse Open Media Collective',
    year: '2025',
    aspectRatio: 'tall',
    coverImage: '/projects/storyverse.jpg',
    secondaryImages: [
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['Modern Web Application', 'Web Speech API Audio Player', 'Dual Theme Engine (Dark/Light)', 'Interactive Social Feed'],
    summary: 'An elegant editorial publishing platform connecting independent authors and avid readers with distraction-free typography, Web Speech API text-to-speech audio reader, instant dual-theme mode, and interactive community engagement.',
    challenge: 'Online reading platforms are frequently bloated with disruptive ads, clumsy audio integrations, and slow rendering that alienates literary readers and independent authors seeking clean long-form typography.',
    strategy: 'Constructed an ultra-fast, reader-first application with zero visual clutter, seamless light/dark theme persistence, client-side synthesized voice narration, and reactive bookmarking.',
    whatWeBuilt: [
      'Instant Light/Dark mode switching with zero layout shift and persistent local storage',
      'Native Web Speech API text-to-speech engine allowing hands-free story listening',
      'Editorial article reader with serif/sans typography pairing (Playfair Display & Inter)',
      'Dynamic story filtering by genre tags (Fantasy, Cyberpunk, Life, Fiction) with live search'
    ],
    marketingApproach: [
      'Community-driven author onboarding funnel with creator tier gamification',
      'Long-tail organic search indexing for indie short fiction and serialized novels',
      'Social share snippet generator creating aesthetically pleasing quotes for Instagram and X'
    ],
    results: [
      { metric: '3.2x', label: 'Average Reading Session Length' },
      { metric: '0ms', label: 'Theme Toggle Latency' },
      { metric: '98/100', label: 'Accessibility & SEO Score' }
    ],
    link: 'https://story-verse-project.vercel.app/',
    accentColor: '#6366f1'
  },
  {
    id: 'vanta',
    number: '04',
    title: 'VANTA',
    subtitle: 'High-Velocity Product Launch & Paid Growth Engine',
    category: 'Digital Campaign / Paid Growth',
    client: 'Vanta Apparel Lab',
    year: '2025',
    aspectRatio: 'tall',
    coverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['Performance Marketing', 'Editorial Creative Direction', 'Landing Page Sprints', 'Data Analytics'],
    summary: 'An aggressive 90-day multi-channel digital blitz that propelled a technical outerwear brand into a viral cultural staple across pan-India and international markets.',
    challenge: 'High cost-per-acquisition (CPA) on standard social channels with poor audience engagement on generic product listing pages.',
    strategy: 'Constructed dynamic high-velocity landing pages tailored to distinct customer cohorts, backed by relentless algorithmic ad testing and custom checkout tracking.',
    whatWeBuilt: [
      'Dynamic cohort-based landing page engine with 99.8% uptime',
      'Server-side Meta Conversions API (CAPI) & UPI/payment event pipeline',
      'Interactive sizing and fabric resistance demonstration'
    ],
    marketingApproach: [
      'Multi-angle performance creative (UGC, macro-texture, laboratory trials)',
      'Algorithmic Google Performance Max campaign architecture',
      'Automated WhatsApp and SMS drop system with 94% open rate'
    ],
    results: [
      { metric: '1.8M', label: 'Campaign Impressions' },
      { metric: '₹3.5 Cr', label: 'Launch Week GMV' },
      { metric: '-38%', label: 'Cost Per Acquisition' }
    ],
    accentColor: '#d4ff32'
  },
  {
    id: 'aura',
    number: '05',
    title: 'AURA',
    subtitle: 'Organic Search Authority & High-Intent B2B Leads',
    category: 'SEO & Commercial Lead Generation',
    client: 'Aura Climate Advisory (Bengaluru)',
    year: '2024',
    aspectRatio: 'wide',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['Programmatic SEO', 'B2B Lead Funnels', 'Technical Auditing', 'Content Architecture'],
    summary: 'A technical SEO and B2B growth overhaul that catapulted an enterprise ESG consulting firm from page 6 to the #1 spot on 45+ critical commercial keywords.',
    challenge: 'Zero organic presence, legacy CMS with 4,000 broken redirects, and heavy reliance on slow outbound sales reps.',
    strategy: 'Cleaned indexing bloat, constructed a programmatic ESG regulation directory, and embedded high-intent benchmark calculators that turn readers into sales calls.',
    whatWeBuilt: [
      'High-speed headless CMS directory handling 500+ regulatory guides',
      'Dynamic compliance ROI calculator widget',
      'Automated CRM lead-enrichment pipeline'
    ],
    marketingApproach: [
      'Comprehensive semantic content clusters targeting corporate sustainability heads',
      'High-authority digital PR backlinks from financial and environmental journals',
      'Inbound lead score qualification routing'
    ],
    results: [
      { metric: '+510%', label: 'Organic Search Traffic' },
      { metric: '₹10+ Cr', label: 'Pipeline Generated' },
      { metric: '#1', label: 'Rankings on Primary Commercial Queries' }
    ],
    accentColor: '#10b981'
  },
  {
    id: 'arc',
    number: '06',
    title: 'ARC',
    subtitle: 'Direct-to-Consumer Luxury E-commerce & Paid Funnels',
    category: 'DTC E-Commerce / Growth & CRO',
    client: 'Arc Audio Atelier',
    year: '2025',
    aspectRatio: 'square',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop'
    ],
    services: ['Conversion Rate Optimization', 'Paid Social Funnels', 'Checkout Architecture', 'Retention Flows'],
    summary: 'A high-converting digital storefront for audiophile-grade acoustic hardware, driving explosive checkout conversion through clean checkout funnels and high-urgency paid media.',
    challenge: 'Traditional e-commerce templates couldn’t support their editorial storytelling, leading to a 68% cart abandonment rate and high acquisition costs.',
    strategy: 'Built instant slide-out cart drawers, dynamic sound wave previews, and a multivariate checkout optimization test matrix with instant UPI and international card processing.',
    whatWeBuilt: [
      'Frictionless 1-click Express Checkout drawer with instant UPI support',
      'Custom acoustic frequency comparator tool',
      'Multivariate A/B checkout optimization test framework'
    ],
    marketingApproach: [
      'Full-funnel Meta & Instagram video ad creative scaling',
      'Retention flows with personalized audio profile quizzes',
      'Dynamic retargeting reducing customer acquisition cost by 42%'
    ],
    results: [
      { metric: '+64%', label: 'Checkout Conversion Rate' },
      { metric: '3.4x', label: 'Return on Ad Spend (ROAS)' },
      { metric: '-55%', label: 'Cart Abandonment Drop' }
    ],
    accentColor: '#ff6b4a'
  }
];
