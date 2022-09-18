import { FaGithub, FaTelegram, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'


export default function Social() {
    const social = [
        { link: "https://github.com/MrMissx", icon: <FaGithub />, hoverColor: "hover:text-gray-800 dark:hover:text-gray-200", label: "github" },
        { link: "https://t.me/MrMissx", icon: <FaTelegram />, hoverColor: "hover:text-blue-500 dark:hover:text-blue-500", label: "telegram" },
        { link: "https://instagram.com/gaungrb", icon: <FaInstagram />, hoverColor: "hover:text-red-400 dark:hover:text-red-400", label: "instagram" },
        { link: "https://twitter.com/mrmissx", icon: <FaTwitter />, hoverColor: "hover:text-blue-400 dark:hover:text-blue-400", label: "twitter" },
        { link: "https://www.linkedin.com/in/gaungr", icon: <FaLinkedin />, hoverColor: "hover:text-blue-500 dark:hover:text-blue-500", label: "linkedin" }
    ]

    return (
        <div className="flex justify-evenly mx-10 my-3 text-xt sm:text-3xl lg:mx-20">
            {social.map((item, idx) => {
                return (
                    <a key={idx.toString()}
                        href={item.link}
                        className={"text-gray-400 dark:text-stone-600 mx-2 " + item.hoverColor}
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                    >
                        {item.icon}
                    </a>
                )
            })}
        </div>
    )
}
