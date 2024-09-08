interface Project {
  title: string
  description: string
  stacks: string[]
  url: string
  source?: string
}

export const PROJECT: Project[] = [
  {
    title: "Stashbin",
    description: "Simple and free pastebin service",
    stacks: ["Go", "htmx", "PostgreSQL"],
    url: "https://stashbin.xyz",
    source: "https://github.com/mrmissx/stashbin"
  },
  {
    title: "Landing Page",
    description: "Personal landing page. The page you're currently on.",
    stacks: ["Svelte kit", "Tailwind CSS"],
    url: "https://mrmiss.dev",
    source: "https://github.com/mrmissx/landing"
  },
  {
    title: "Anjani",
    description: "Telegram management bot.",
    stacks: ["Python", "Mongo DB"],
    url: "https://t.me/anjani_bot",
    source: "https://github.com/userbotindo/anjani"
  },
  {
    title: "userbotindo.com",
    description: "Userbotindo website with dashboard integration to manage Anjani.",
    stacks: ["Next.js", "daisyUI"],
    url: "https://userbotindo.com"
  },
  {
    title: "Telegram Forwarder",
    description: "Bot to forward message form channel/group.",
    stacks: ["Python"],
    url: "https://github.com/mrmissx/Telegram_Forwarder",
    source: "https://github.com/mrmissx/Telegram_Forwarder"
  },
  {
    title: "Spam Detection API",
    description: "API for Spam Detection that specifically trained on Telegram messages to detect and prevent spam message.",
    stacks: ["Python", "PostgreSQL"],
    url: "https://github.com/userbotindo/api-docs"
  }
]
