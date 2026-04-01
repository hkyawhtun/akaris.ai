export interface Course {
  id: number;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: string;
  highlights: string[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'AI Starter for Everyone',
    description:
      'Your first step into the world of Artificial Intelligence. No coding experience needed — just curiosity.',
    level: 'Beginner',
    icon: '🚀',
    highlights: ['AI fundamentals', 'Hands-on exercises', 'No prerequisites'],
  },
  {
    id: 2,
    title: 'AI Business Growth Accelerator',
    description:
      'Leverage AI tools and strategies to drive growth, efficiency, and innovation across your organisation.',
    level: 'Intermediate',
    icon: '📈',
    highlights: ['AI-powered strategy', 'Automation workflows', 'ROI measurement'],
  },
  {
    id: 3,
    title: 'AI Automation Mastery',
    description:
      'Build powerful automation pipelines using modern AI tools and no-code/low-code platforms.',
    level: 'Intermediate',
    icon: '⚙️',
    highlights: ['Workflow automation', 'AI APIs & integrations', 'Real project builds'],
  },
  {
    id: 4,
    title: 'Vibe Coding for Modern Software Developers',
    description:
      'Ship production software faster using AI-assisted development with Claude Code and Codex.',
    level: 'Advanced',
    icon: '💻',
    highlights: ['Claude Code & Codex', 'AI pair programming', 'Modern dev workflows'],
  },
  {
    id: 5,
    title: 'Become an AI Engineer',
    description:
      'A comprehensive roadmap from fundamentals to deploying production-grade AI systems at scale.',
    level: 'Advanced',
    icon: '🛠️',
    highlights: ['LLMs & fine-tuning', 'RAG & AI agents', 'Production deployment'],
  },
];
