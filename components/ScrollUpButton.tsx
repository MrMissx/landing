import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa"

export default function ScrollUpButton() {
    const [showButton, setJumpButton] = useState(false)
    const jumpToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setJumpButton(true)
            } else {
                setJumpButton(false)
            }
        })
    }, [])

    return (
        <>
            {showButton && (
                <button
                    onClick={jumpToTop}
                    className="fixed bottom-0 right-0 rounded-full h-8 w-8 flex items-center justify-center bg-blue-300 dark:bg-neutral-600 mb-5 mr-5"
                >
                    <FaAngleUp />
                </button>
            )}
        </>
    )
}