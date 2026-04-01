export interface Instructor {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  image: string;
  initials: string;
}

export const instructors: Instructor[] = [
  {
    id: 1,
    name: 'Hla Kyaw Htun',
    title: 'Lead Software Engineer · D2P',
    subtitle: 'Entrepreneur & AI Practitioner',
    bio: 'Hla brings deep expertise in AI engineering and modern software development. He is passionate about making AI education accessible and practical for everyone, bridging cutting-edge global AI research with real-world application.',
    image: '/assets/instructors/hla-kyaw-htun.jpg',
    initials: 'HK',
  },
  {
    id: 2,
    name: 'Thant Zin Aung',
    title: 'UNSW Sydney',
    subtitle: 'Master of IT (Artificial Intelligence)',
    bio: 'Thant specialises in translating complex AI concepts into actionable business strategies, helping organisations and entrepreneurs unlock the full potential of artificial intelligence.',
    image: '/assets/instructors/thant-zin-aung.jpg',
    initials: 'TZ',
  },
];
