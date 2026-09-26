export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  year: string;
  aspectRatio: 'wide' | 'tall' | 'square';
  coverImage: string;
  secondaryImages: string[];
  services: string[];
  summary: string;
  challenge: string;
  strategy: string;
  whatWeBuilt: string[];
  marketingApproach: string[];
  results: {
    metric: string;
    label: string;
  }[];
  link?: string;
  accentColor?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  discipline: 'web' | 'marketing';
  shortDesc: string;
  deliverables: string[];
  previewImage: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  quote: string;
  highlightMetric: string;
  metricLabel: string;
  avatar: string;
}

export interface Founder {
  name: string;
  role: string;
  discipline: 'Engineering & Web Architecture' | 'Growth & Digital Marketing';
  bio: string;
  skills: string[];
  avatar: string;
  coordinates: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  company: string;
  services: string[];
  budget: string;
  timeline: string;
  projectDetails: string;
}
