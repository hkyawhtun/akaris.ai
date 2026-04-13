export type WorkshopMode = "Online" | "In-Person";
export type WorkshopStatus = "Open" | "Coming Soon" | "Planning" | "Closed";

export interface Workshop {
  id: number;
  title: string;
  description: string;
  mode: WorkshopMode;
  location: string;
  status: WorkshopStatus;
  date: string;
  icon: string;
  image: string;
  price?: number;
  originalPrice?: number;
}

export const workshops: Workshop[] = [
  {
    id: 1,
    title: "AI Starter Webinar",
    description:
      "An interactive live session covering AI fundamentals and hands-on exercises — perfect for absolute beginners.",
    mode: "Online",
    location: "Zoom / Live Stream",
    status: "Closed",
    date: "April 2026",
    icon: "🌐",
    image: "/assets/webinars/Webinar-Starter.png",
  },
  {
    id: 2,
    title: "AI for Business Leaders",
    description:
      "Learn how to embed AI strategies into your organisation and drive measurable outcomes with expert guidance.",
    mode: "Online",
    location: "Zoom / Live Stream",
    status: "Coming Soon",
    date: "May 2026",
    icon: "💼",
    image: "/assets/webinars/Webinar-BusinessLeader.png",
  },
  {
    id: 3,
    title: "AI Bootcamp - Sydney",
    description:
      "A full-day intensive workshop on AI tools, automation, and real-world project implementation.",
    mode: "In-Person",
    location: "Sydney, Australia",
    status: "Open",
    date: "April 2026",
    icon: "🇦🇺",
    image: "/assets/workshops/Workshop-Sydney.png",
    price: 1000,
    originalPrice: 1500,
  },
  {
    id: 4,
    title: "AI Workshop - Singapore",
    description:
      "Connect with AI practitioners and explore cutting-edge strategies for business and technology transformation.",
    mode: "In-Person",
    location: "Singapore",
    status: "Coming Soon",
    date: "Q3 2026",
    icon: "🇸🇬",
    image: "/assets/workshops/Workshop-Singapore.png",
    price: 1000,
    originalPrice: 1500,
  },
  {
    id: 5,
    title: "AI Workshop - Thailand",
    description:
      "Practical AI training focused on automation and AI-powered business transformation for Thai enterprises.",
    mode: "In-Person",
    location: "Bangkok, Thailand",
    status: "Coming Soon",
    date: "Q3 2026",
    icon: "🇹🇭",
    image: "/assets/workshops/Workshop-Thailand.png",
    price: 1000,
    originalPrice: 1500,
  },
  {
    id: 6,
    title: "AI Workshop - Myanmar",
    description:
      "Bringing accessible AI education to Myanmar with foundational and practical AI training sessions.",
    mode: "In-Person",
    location: "Yangon, Myanmar",
    status: "Planning",
    date: "TBA",
    icon: "🇲🇲",
    image: "/assets/workshops/Workshop-Myanmar.png",
    price: 1000,
    originalPrice: 1500,
  },
];
