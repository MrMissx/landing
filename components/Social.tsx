import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Social() {
    return (
        <div className="flex justify-evenly mx-10 my-3 text-xl sm:text-3xl">
            <a href="https://github.com/MrMissx"
                className="text-gray-400 hover:text-blue-500 mx-2"
                role="button"
                target="_blank">
                <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a href="https://t.me/keselekpermen"
                className="text-gray-400 hover:text-blue-500 mx-2"
                role="button"
                target="_blank">
                <FontAwesomeIcon icon={['fab', 'telegram']} />
            </a>
            <a href="https://instagram.com/gaungrb"
                className="text-gray-400 hover:text-blue-500 mx-2"
                role="button"
                target="_blank">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            <a href="https://twitter.com/keselekpermen69"
                className="text-gray-400 hover:text-blue-500 mx-2"
                role="button"
                target="_blank">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a href="https://www.linkedin.com/in/gaungr/"
                className="text-gray-400 hover:text-blue-500 mx-2"
                role="button"
                target="_blank">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
        </div>
    )
}
