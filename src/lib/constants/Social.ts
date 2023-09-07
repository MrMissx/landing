import Github from "svelte-icons/fa/FaGithub.svelte"
import Linkedin from "svelte-icons/fa/FaLinkedin.svelte"
import Telegram from "svelte-icons/fa/FaTelegram.svelte"
import Twitter from "svelte-icons/fa/FaTwitter.svelte"
import Instagram from "svelte-icons/fa/FaInstagram.svelte"
import Email from "svelte-icons/md/MdMailOutline.svelte"

export const SOCIAL_LINKS = [
  {
    link: "https://github.com/MrMissx",
    hoverColor: "hover:text-gray-800 dark:hover:text-gray-200",
    label: "Github",
    icon: Github
  },
  {
    link: "https://t.me/MrMissx",
    hoverColor: "hover:text-blue-500 dark:hover:text-blue-500",
    label: "Telegram",
    icon: Telegram
  },
  {
    link: "mailto:hi@mrmiss.dev",
    hoverColor: "hover:text-gray-800 dark:hover:text-gray-200",
    label: "Email",
    icon: Email
  },
  {
    link: "https://www.linkedin.com/in/gaungr",
    hoverColor: "hover:text-blue-500 dark:hover:text-blue-500",
    label: "Linkedin",
    icon: Linkedin
  },
  {
    link: "https://instagram.com/gaungrb",
    hoverColor: "hover:text-red-400 dark:hover:text-red-400",
    label: "Instagram",
    icon: Instagram
  },
  {
    link: "https://twitter.com/mrmissx",
    hoverColor: "hover:text-blue-400 dark:hover:text-blue-400",
    label: "Twitter",
    icon: Twitter
  }
]
