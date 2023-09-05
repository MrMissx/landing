import Css from "$lib/shared/assets/icons/css.svg"
import Docker from "$lib/shared/assets/icons/docker.svg"
import Firbase from "$lib/shared/assets/icons/firebase.svg"
import Git from "$lib/shared/assets/icons/git.svg"
import Html from "$lib/shared/assets/icons/html.svg"
import JavaScript from "$lib/shared/assets/icons/javascript.svg"
import MongoDb from "$lib/shared/assets/icons/mongodb.svg"
import NextJs from "$lib/shared/assets/icons/nextjs.svg"
import NextJsDark from "$lib/shared/assets/icons/nextjs-dark.svg"
import NodeJs from "$lib/shared/assets/icons/nodejs.svg"
import Posgre from "$lib/shared/assets/icons/postgre.svg"
import Python from "$lib/shared/assets/icons/python.svg"
import React from "$lib/shared/assets/icons/react.svg"
import Svelte from "$lib/shared/assets/icons/svelte.svg"
import TypeScript from "$lib/shared/assets/icons/typescript.svg"
import Tailwind from "$lib/shared/assets/icons/tailwind.svg"

export interface Stack {
  label: string
  icon: string
  iconDark?: string
  url: string
}

export const STACKS: Stack[] = [
  {
    label: "Python",
    icon: Python,
    url: "https://www.python.org/"
  },
  {
    label: "HTML",
    icon: Html,
    url: "https://html.spec.whatwg.org/"
  },
  {
    label: "CSS",
    icon: Css,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    label: "Tailwind",
    icon: Tailwind,
    url: "https://tailwindcss.com/"
  },
  {
    label: "JavaScript",
    icon: JavaScript,
    url: "https://www.javascript.com/"
  },
  {
    label: "TypeScript",
    icon: TypeScript,
    url: "https://www.typescriptlang.org/"
  },
  {
    label: "Node.js",
    icon: NodeJs,
    url: "https://nodejs.org/"
  },
  {
    label: "Svelte",
    icon: Svelte,
    url: "https://svelte.dev/"
  },
  {
    label: "React",
    icon: React,
    url: "https://reactjs.org/"
  },
  {
    label: "Next.js",
    icon: NextJs,
    iconDark: NextJsDark,
    url: "https://nextjs.org/"
  },
  {
    label: "MongoDB",
    icon: MongoDb,
    url: "https://www.mongodb.com/"
  },
  {
    label: "Firebase",
    icon: Firbase,
    url: "https://firebase.google.com/"
  },
  {
    label: "PostgreSQL",
    icon: Posgre,
    url: "https://www.postgresql.org/"
  },
  {
    label: "Docker",
    icon: Docker,
    url: "https://www.docker.com/"
  },
  {
    label: "Git",
    icon: Git,
    url: "https://git-scm.com/"
  }
]
