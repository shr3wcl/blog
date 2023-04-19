import Head from "next/head";

const Flag = () => {
    const flag = "TFLAG{th1s_fl4g_h4v3_s0m3th1nG_wr0ng_l0l_1rj2jdnskak}";
    return (
        <div>
            <Head>
                <title>Be</title>
            </Head>
            <div className={"flex justify-center flex-col items-center mt-6 px-4 font-personal gap-3"}>
                <h1 className={"text-2xl"}>Congratulation, here is your flag: </h1> <blockquote className={"select-none text-blue-500"}>{flag}</blockquote>
            </div>

        </div>
    )
}

export default Flag;
