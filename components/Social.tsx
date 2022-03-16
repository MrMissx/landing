import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Social() {
    const social = [
        {link: "https://github.com/MrMissx", icon: ["fab", "github"], hoverColor: "text-gray-800"},
        {link: "https://t.me/keselekpermen", icon: ["fab", "telegram"], hoverColor: "text-blue-400"},
        {link: "https://instagram.com/gaungrb", icon: ["fab", "instagram"], hoverColor: "text-red-400"},
        {link: "https://twitter.com/mrmissx", icon: ["fab", "twitter"] , hoverColor: "text-blue-400"},
        {link: "https://www.linkedin.com/in/gaungr", icon: ["fab", "linkedin"], hoverColor: "text-blue-500"}
    ]

    return (
        <div className="flex justify-evenly mx-10 my-3 text-xt sm:text-3xl lg:mx-20">
            {social.map((item, idx) => {
                return (
                    <a key={idx.toString()}  // why? if not string the hover attr will not work
                        href={item.link}
                        className={"text-gray-400 mx-2 hover:" + item.hoverColor }
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={item.icon as IconProp} />
                    </a>
                )
            })}
        </div>
    )
}
