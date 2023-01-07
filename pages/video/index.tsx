import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCt16F_lL14GTFLm-a8pFwEN_s5UtfLCJ8&channelId=UCpqUZTgGgqc2C7ae57tOF4Q&part=snippet,id&order=date&maxResults=20");
    const data = await res.json();
    const videoList = await data.items;
    await videoList.pop();
    return {
        props: {videoList}
    }
}

const Video = ({videoList}: any) => {

    return (
        <div className={"dark:bg-[#171717] dark:text-gray-50 min-h-screen w-full"}>
            <div className="max-w-5xl px-4 mx-auto mt-10 sm:px-6 lg:px-0">

                <header>Video</header>
                <div className={"grid grid-cols-1 gap-4 sm:grid-cols-2"}>
                    {videoList.map((each: any) => {
                        return (
                            <div key={each.id.videoId}
                                 className=" dark:bg-[#111827] my-1 border-[1px] border-gray-300 hover:border-blue-400 dark:hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800 w-full">
                                <Link href={`https://www.youtube.com/watch?v=${each.id.videoId}`} target={"_blank"} className={"flex items-center"}>
                                    <div className={"mr-3"}>
                                        <img src={each.snippet.thumbnails.medium.url} alt="Thumbnails" className={"w-52 p-1 rounded-xl"}/>
                                    </div>
                                    <div className={"flex-col my-3"}>
                                        <p className={"mb-2 dark:text-blue-400"}>{each.snippet.title}</p>
                                        <p className={"text-sm text-gray-500 mb-1"}>{each.snippet.description}</p>
                                        <p className={"text-sm text-gray-500"}>{each.snippet.publishedAt}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Video;
