import {AiFillGithub} from "react-icons/ai"
import {BsFacebook, BsLinkedin, BsMarkdown} from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className={"w-full py-6 bg-gray-100 dark:bg-gray-900"}>
            <div className={"flex justify-center items-center flex-col"}>
                <div className={"flex justify-center items-center flex-col"}>
                    <p className={"text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200"}>Connect with me</p>
                    <div className={"flex space-x-4"}>
                        <Link href={"https://github.com/shr3wcl"} target={"_blank"} className={"text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"}>
                            <AiFillGithub className={"w-8 h-8"} />
                        </Link>
                        <Link href={"https://www.facebook.com/mtri.2112/"} target={"_blank"} className={"text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"}>
                            <BsFacebook className={"w-8 h-8"} />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/tri-pham-minh-3146911a5/"} target={"_blank"} className={"text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"}>
                            <BsLinkedin className={"w-8 h-8"} />
                        </Link>
                        <Link href={"https://hackmd.io/@shr3wd"} target={"_blank"} className={"text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"}>
                            <BsMarkdown className={"w-8 h-8"} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
