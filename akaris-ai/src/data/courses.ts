export interface Course {
  id: number;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "General";
  icon: string;
  highlights: string[];
  image: string;
  duration: string;
  price: number;
  originalPrice?: number;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "AI Starter for Everyone",
    description:
      "Created for individuals from any background, this course serves as a welcoming entry point for those curious about the world of Artificial Intelligence. Build a solid foundation in AI fundamentals through hands-on exercises that require zero coding or technical experience.",
    level: "Beginner",
    icon: "🚀",
    highlights: [
      "AI fundamentals",
      "Practical AI Literacy",
      "Hands-On Exploration",
    ],
    image: "/assets/courses/AIStarterForEveryone.png",
    duration: "3 weeks",
    price: 300,
    originalPrice: 400,
  },
  {
    id: 2,
    title: "AI Business Growth Accelerator",
    description:
      "Designed specifically for business owners and executives, a strategic blueprint to integrate artificial intelligence into your core operations. Drive organizational growth and foster innovation by leveraging high-impact AI tools and data-driven strategies.",
    level: "Intermediate",
    icon: "📈",
    highlights: [
      "Strategic AI Roadmap",
      "Automation workflows",
      "ROI measurement",
    ],
    image: "/assets/courses/AIBusinessGrowth.png",
    duration: "4 weeks",
    price: 690,
    originalPrice: 800,
  },
  {
    id: 3,
    title: "AI Automation Mastery",
    description:
      "For entrepreneurs, operations managers, and tech-savvy professionals looking to scale their impact through intelligent systems. Build powerful automation pipelines and custom business solutions using modern AI tools and no-code platforms.",
    level: "Intermediate",
    icon: "⚙️",
    highlights: [
      "Workflow automation",
      "AI APIs & integrations",
      "Real project builds",
    ],
    image: "/assets/courses/AIAutomationMastery.png",
    duration: "4 weeks",
    price: 690,
    originalPrice: 800,
  },
  {
    id: 4,
    title: "Vibe Coding for Modern Software Developers",
    description:
      "Tailored for experienced software developers, leverage high-level intent and AI-assisted tools to ship production software at record speeds. Master the art of Vibe Coding to transform modern development workflows using Claude Code and Codex.",
    level: "Advanced",
    icon: "💻",
    highlights: [
      "Claude Code & Codex",
      "AI pair programming",
      "Modern Dev workflows",
    ],
    image: "/assets/courses/VibeCodingforSoftwareDeveloper.png",
    duration: "6 weeks",
    price: 890,
    originalPrice: 990,
  },
  {
    id: 5,
    title: "Become an AI Engineer",
    description:
      "This advanced course is designed for software developers and technical professionals ready to transition into the role of AI Engineer. You will follow a comprehensive roadmap from foundational theory to deploying production-grade AI systems at scale.",
    level: "Advanced",
    icon: "🛠️",
    highlights: [
      "Deep Model Optimization",
      "Agentic Frameworks",
      "Scalable Deployment",
    ],
    image: "/assets/courses/BecomeAnAIEngineer.png",
    duration: "6 weeks",
    price: 1300,
    originalPrice: 1500,
  },
  {
    id: 6,
    title: "Open Claude Mastery",
    description:
      "Master Open Claude through a non-technical lens. This course translates complex concepts into practical, everyday tools, empowering you to automate workflows and lead tech-driven projects with confidence and ease.",
    level: "Intermediate",
    icon: "🛠️",
    highlights: [
      "Jargon-Free Learning",
      "Immediate Application",
      "No-Code Strategy",
    ],
    image: "/assets/courses/OpenClawMaster.png",
    duration: "6 weeks",
    price: 1900,
    originalPrice: 2000,
  },
];
