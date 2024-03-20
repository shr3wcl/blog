const ErrorPage = () => {
    return (
        <div className={"h-screen w-full bg-gray-100 flex items-center dark:bg-[#171717]"}>
            <div className={"container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700"}>
                <div className={"max-w-md text-center md:text-left mb-8 md:mb-0"}>
                    <div className={"text-5xl font-dark dark:font-light font-bold"}>404</div>
                    <p className={"text-2xl md:text-3xl font-light leading-normal"}>Sorry, we couldn't find this page.</p>
                    <p className={"text-lg text-gray-600 mb-4"}>But don't worry, there's plenty to explore on our homepage.</p>
                    <button className={"px-4 py-2 text-sm font-medium leading-5 shadow-md text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"}>
                        Back to Homepage
                    </button>
                </div>
                <div className="max-w-lg">
                    <img src={"https://avatars.githubusercontent.com/u/89400593"} className={"w-full rounded-lg shadow-lg"} alt="404 Image" />
                </div>
            </div>
        </div>

    )
}

export default ErrorPage;
