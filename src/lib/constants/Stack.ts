import Docker from "$lib/assets/icons/docker.svg"
import Firbase from "$lib/assets/icons/firebase.svg"
import Git from "$lib/assets/icons/git.svg"
import Go from "$lib/assets/icons/go.svg"
import MongoDb from "$lib/assets/icons/mongodb.svg"
import MySQL from "$lib/assets/icons/mysql.svg"
import NextJs from "$lib/assets/icons/nextjs.svg"
import NextJsDark from "$lib/assets/icons/nextjs-dark.svg"
import Posgre from "$lib/assets/icons/postgre.svg"
import Python from "$lib/assets/icons/python.svg"
import React from "$lib/assets/icons/react.svg"
import Solid from "$lib/assets/icons/solid.svg"
import Svelte from "$lib/assets/icons/svelte.svg"
import Traefik from "$lib/assets/icons/traefik.svg"
import TypeScript from "$lib/assets/icons/typescript.svg"
import Tailwind from "$lib/assets/icons/tailwind.svg"

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
    label: "Go",
    icon: Go,
    url: "https://go.dev/"
  },
  {
    label: "Tailwind",
    icon: Tailwind,
    url: "https://tailwindcss.com/"
  },
  {
    label: "TypeScript",
    icon: TypeScript,
    url: "https://www.typescriptlang.org/"
  },
  {
    label: "Solid",
    icon: Solid,
    url: "https://solidjs.com/"
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
    label: "PostgreSQL",
    icon: Posgre,
    url: "https://www.postgresql.org/"
  },
  {
    label: "MySQL",
    icon: MySQL,
    url: "https://www.mysql.com/"
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
    label: "Docker",
    icon: Docker,
    url: "https://www.docker.com/"
  },
  {
    label: "Traefik",
    icon: Traefik,
    url: "https://traefik.io/"
  },
  {
    label: "Git",
    icon: Git,
    url: "https://git-scm.com/"
  }
]
