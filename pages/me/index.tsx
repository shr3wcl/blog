import Head from "next/head";

const Myself = () => {
    return (
        <div>
            <Head>
                <title>Me</title>
            </Head>
            <div className={"flex justify-center flex-col items-center mt-6 px-4 font-personal"}>
                <figure className="max-w-screen-md mx-auto text-center">
                    <blockquote>
                        <p className="text-2xl italic font-medium text-gray-900 dark:text-white">❝Being the richest man in the cemetery does not matter to me … Going to bed at night saying we’ve done something wonderful … that’s what matters to me.❞</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-2 space-x-3 float-right">
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Steve Jobs</cite>
                                <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at
                                    Apple</cite>
                            </div>
                    </figcaption>
                </figure>

                <img className="w-24 h-24 mb-3 mt-5 rounded-full shadow-lg"
                     src="https://avatars.githubusercontent.com/u/89400593"
                     alt="Bonnie image"/>
                <h5 className="text-blue-500 mb-1 text-xl font-medium dark:text-white">Phạm Minh Trí</h5>
                <h6 className="text-blue-500 mb-1 text-xl dark:text-white">A.k.a: <b>Bin</b></h6>
                <span className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</span>

            </div>

        </div>
    )
}

export default Myself;
