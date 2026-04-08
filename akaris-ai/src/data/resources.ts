export interface PDF {
  id: string;
  title: string;
  description: string;
  downloadUrl: string;
  icon: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId?: string;
  facebookUrl?: string;
  channel: string;
  type: "youtube" | "facebook";
}

export const PDFs: PDF[] = [
  {
    id: "ai-starter-guide",
    title: "OpenClaw Setup on a VPS: Step-by-Step Guide",
    description:
      "Complete guide to setting up OpenClaw on a Virtual Private Server with all configuration steps.",
    downloadUrl: "/assets/pdfs/Open Claw Setup.pdf",
    icon: "📋",
  },
  {
    id: "ai-starter-beginners",
    title:
      "OpenClaw Full Tutorial for Beginners: How to Setup Your First AI Agent (ClawdBot)",
    description:
      "Beginner-friendly tutorial for creating your first AI agent with OpenClaw and ClawdBot.",
    downloadUrl: "/assets/pdfs/Set up AI Agent- Claudbot.pdf",
    icon: "📚",
  },
];

export const Videos: Video[] = [
  {
    id: "openclaw-setup-quick",
    title: "Set up OpenClaw, your personal AI agent, under 10 minutes",
    description:
      "Quick tutorial on setting up OpenClaw as your personal AI agent in just 10 minutes",
    facebookUrl: "https://www.facebook.com/reel/2383121265487578/",
    channel: "Akaris.ai",
    type: "facebook",
  },
  {
    id: "claude-code-intro",
    title: "Claude Code: Getting Started",
    description: "Official introduction to Claude Code and its capabilities",
    youtubeId: "0vZ_UVLhSQQ",
    channel: "Anthropic",
    type: "youtube",
  },
  {
    id: "openclaw-overview",
    title: "OpenClaw Overview & Features",
    description: "Complete overview of OpenClaw AI agent framework",
    youtubeId: "BoC5MY_7aDk",
    channel: "OpenClaw Official",
    type: "youtube",
  },
  {
    id: "gemini-ai-intro",
    title: "Google Gemini AI: Introduction",
    description: "Getting started with Google's Gemini AI model",
    youtubeId: "-_FizlRlfYs",
    channel: "Google AI",
    type: "youtube",
  },
  {
    id: "grok-setup",
    title: "Grok AI Setup & Configuration",
    description: "How to set up and configure Grok AI for your projects",
    youtubeId: "V3YzhHlDt9c",
    channel: "Grok Official",
    type: "youtube",
  },
  {
    id: "codex-examples",
    title: "Codex: Code Generation Examples",
    description: "Practical examples using OpenAI Codex for code generation",
    youtubeId: "HFM3se4lNiw",
    channel: "OpenAI",
    type: "youtube",
  },
];
