import { IoIosHeart } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex flex-col items-center gap-1 p-2 mb-3">
            <a href="https://github.com/Synchrotek/pomodoro-in-react"
                target="_blank"
                className="italic text-blue-300 font-semibold flex items-center gap-2 cursor-pointer hover:underline"
            ><FaGithub />Source Code</a>
            <div className="flex justify-center items-center gap-2 w-full">
                <p>Made with</p>
                <p><IoIosHeart className="text-orange-400" /></p>
                <p>by</p>
                <a href="https://github.com/Synchrotek"
                    target="_blank"
                    className="text-orange-200 italic font-semibold hover:underline"
                >SynchroTek</a>
            </div>
        </div>
    )
}

export default Footer