const Myself = () => {
    return (
        <div>
            <div className={"flex justify-center flex-col items-center mt-6 px-4"}>
                <figure className="max-w-screen-md mx-auto text-center">
                    {/*<svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"*/}
                    {/*     viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <path*/}
                    {/*        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"*/}
                    {/*        fill="currentColor"/>*/}
                    {/*</svg>*/}
                    <blockquote>
                        <p className="text-2xl italic font-medium text-gray-900 dark:text-white">❝Being the richest man in the cemetery doesn’t matter to me … Going to bed at night saying we’ve done something wonderful … that’s what matters to me.❞</p>
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
                <span className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</span>
            </div>
        </div>
    )
}

export default Myself;
