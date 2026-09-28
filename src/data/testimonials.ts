import { Testimonial } from '../types';

/**
 * SAMPLE TESTIMONIALS DATA
 * Note: These are structured sample testimonials that can easily be edited or replaced with verified client feedback.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Ranit Basak',
    role: 'Co-Founder & CEO',
    company: 'Nova Robotics',
    quote:
      'Brandora Studio is the rarest kind of agency: they possess the visual sophistication of a high-end Paris design house combined with engineering discipline that produces sub-second, rock-solid code. Our inbound demo requests skyrocketed within three weeks of launch.',
    highlightMetric: '+240%',
    metricLabel: 'Enterprise Pipeline Growth',
    avatar: 'https://ik.imagekit.io/ranit007/Brandora%20Studio/ChatGPT%20Image%20Sep%2027,%202026,%2011_55_56%20PM.png'
  },
  {
    id: 'test-2',
    clientName: 'Arnab Majumdar',
    role: 'VP of Brand & Growth',
    company: 'Arc Audio Atelier',
    quote:
      'Most agencies give you pretty designs that break under real traffic or marketers who can’t talk to developers. Having a two-person powerhouse where the developer and marketer work in absolute lockstep changed everything for our direct-to-consumer store.',
    highlightMetric: '3.4x ROAS',
    metricLabel: 'Global Media Acquisition',
    avatar: 'https://ik.imagekit.io/ranit007/Brandora%20Studio/IMG_4236-removebg-preview.png'
  },
  {
    id: 'test-3',
    clientName: 'Marcus Vance',
    role: 'Managing Director',
    company: 'Aura Advisory Group',
    quote:
      'Their organic SEO and landing architecture took us from invisible on Google to #1 ranking across 45 competitive advisory keywords. They don’t just hand over a Figma file—they build compounding growth machines.',
    highlightMetric: '$1.2M',
    metricLabel: 'Inbound Advisory Pipeline',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop'
  }
];
