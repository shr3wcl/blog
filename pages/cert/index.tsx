import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Certificate = () => {
    const flag = "TFLAG{th1s_fl4g_h4v3_s0m3th1nG_wr0ng_l0l_1rj2jdnskak}";
    return (
        <div>
            <Head>
                <title>Certificate</title>
            </Head>
            <div className={"flex justify-center flex-col items-center mt-6 px-4 font-personal gap-3"}>
                <Link className={"bg-gray-300 rounded-3xl"} href={"https://certificate.givemycertificate.com/c/b8239874-bed8-4734-a3f5-e3586e0b30a9"} target={"_blank"}>
                    <Image src={"/../public/certificate1.png"} alt={"certificate"} className={"rounded-t-3xl"} width={400} height={400}/>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className={"text-center my-3 text-blue-600"}>Certificate CTF VISHWACTF'2023</p>
                </Link>

            </div>

        </div>
    )
}

export default Certificate;
