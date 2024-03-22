import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Certificate = () => {
    return (
        <div>
            <Head>
                <title>Certificate</title>
            </Head>
            <div className={"flex justify-center items-center mt-6 px-4 font-personal gap-3"}>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <li>
                        <Link className={"bg-gray-300 rounded-lg overflow-hidden shadow-md"} href={"/cert/cbjs-cert.png"} target={"_blank"}>
                            <div className="relative overflow-hidden rounded-t-lg">
                                <img src={"/cert/cbjs-cert.png"} alt={"certificate"} className={"w-full h-auto"} />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <p className={"text-white text-center my-3"}>View Certificate</p>
                                </div>
                            </div>
                            <p className={"text-center my-3 text-blue-600 font-semibold"}>Certificate Cyber Jutsu Academy Web 101-102 2023</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center mt-4 text-gray-600 dark:text-gray-400 italic">
                Trying hard to earn more, just wait...
            </div>
        </div>

    )
}

export default Certificate;
