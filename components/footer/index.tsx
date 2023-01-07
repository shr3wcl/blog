import {AiFillGithub} from "react-icons/ai"
import {BsFacebook, BsLinkedin} from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className={"w-full py-6"}>
            <div className={"flex w-full justify-center items-center flex-col"}>
                {/*<div className={""}>*/}
                {/*    <span>Phạm Minh Trí</span>*/}
                {/*</div>*/}
                <div className={"flex px-6 min-w-[200px] justify-center flex-col"}>
                    <div className={"my-3 "}>
                        <p className={"text-center underline"}>Connect with me</p>
                    </div>
                    <div className={"flex justify-evenly"}>
                        <Link href={"https://github.com/Bin-08-01"} target={"_blank"}>
                            <AiFillGithub/>
                        </Link>
                        <Link href={"https://www.facebook.com/SofM.2022/"} target={"_blank"}>
                            <BsFacebook/>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/minh-tr%C3%AD-ph%E1%BA%A1m-3146911a5?fbclid=IwAR1tZhBAV0SwbXdd6EshcOSlFRyj0998tO-wqeYj0_qLSn3LErDnkeZRPx4"} target={"_blank"}>
                            <BsLinkedin/>
                        </Link>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
