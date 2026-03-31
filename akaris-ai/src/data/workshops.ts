export type WorkshopMode = 'Online' | 'In-Person';
export type WorkshopStatus = 'Open' | 'Coming Soon' | 'Planning';

export interface Workshop {
  id: number;
  title: string;
  description: string;
  mode: WorkshopMode;
  location: string;
  status: WorkshopStatus;
  date: string;
  icon: string;
}

export const workshops: Workshop[] = [
  {
    id: 1,
    title: 'AI Starter Webinar',
    description: 'An interactive live session covering AI fundamentals and hands-on exercises — perfect for absolute beginners.',
    mode: 'Online',
    location: 'Zoom / Live Stream',
    status: 'Open',
    date: 'April 2026',
    icon: '🌐',
  },
  {
    id: 2,
    title: 'AI for Business Leaders',
    description: 'Learn how to embed AI strategies into your organisation and drive measurable outcomes with expert guidance.',
    mode: 'Online',
    location: 'Zoom / Live Stream',
    status: 'Coming Soon',
    date: 'May 2026',
    icon: '💼',
  },
  {
    id: 3,
    title: 'AI Bootcamp — Sydney',
    description: 'A full-day intensive workshop on AI tools, automation, and real-world project implementation.',
    mode: 'In-Person',
    location: 'Sydney, Australia',
    status: 'Open',
    date: 'April 2026',
    icon: '🇦🇺',
  },
  {
    id: 4,
    title: 'AI Innovation Summit — Singapore',
    description: 'Connect with AI practitioners and explore cutting-edge strategies for business and technology transformation.',
    mode: 'In-Person',
    location: 'Singapore',
    status: 'Coming Soon',
    date: 'Q3 2026',
    icon: '🇸🇬',
  },
  {
    id: 5,
    title: 'AI Workshop — Thailand',
    description: 'Practical AI training focused on automation and AI-powered business transformation for Thai enterprises.',
    mode: 'In-Person',
    location: 'Bangkok, Thailand',
    status: 'Coming Soon',
    date: 'Q3 2026',
    icon: '🇹🇭',
  },
  {
    id: 6,
    title: 'AI Workshop — Myanmar',
    description: 'Bringing accessible AI education to Myanmar with foundational and practical AI training sessions.',
    mode: 'In-Person',
    location: 'Yangon, Myanmar',
    status: 'Planning',
    date: 'TBA',
    icon: '🇲🇲',
  },
];
