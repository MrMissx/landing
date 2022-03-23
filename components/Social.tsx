import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Social() {
    const social = [
        {link: "https://github.com/MrMissx", icon: ["fab", "github"], hoverColor: "hover:text-gray-800"},
        {link: "https://t.me/keselekpermen", icon: ["fab", "telegram"], hoverColor: "hover:text-blue-400"},
        {link: "https://instagram.com/gaungrb", icon: ["fab", "instagram"], hoverColor: "hover:text-red-400"},
        {link: "https://twitter.com/mrmissx", icon: ["fab", "twitter"] , hoverColor: "hover:text-blue-400"},
        {link: "https://www.linkedin.com/in/gaungr", icon: ["fab", "linkedin"], hoverColor: "hover:text-blue-500"}
    ]

    return (
        <div className="flex justify-evenly mx-10 my-3 text-xt sm:text-3xl lg:mx-20">
            {social.map((item, idx) => {
                return (
                    <a key={idx.toString()}
                        href={item.link}
                        className={"text-gray-400 mx-2" + item.hoverColor }
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={item.icon as IconProp} className={ item.hoverColor } />
                    </a>
                )
            })}
        </div>
    )
}
