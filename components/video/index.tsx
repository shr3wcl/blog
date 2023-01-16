import Link from "next/link";
import {BiTime} from "react-icons/bi";
import dayjs from "dayjs";
import {AiOutlineYoutube} from "react-icons/ai";
import Image from "next/image";

const ListVideo = ({videoList}: any) => {
    return(
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
                                <p className={"mb-2 dark:text-blue-400 font-semibold flex"}><AiOutlineYoutube className={"relative top-[5px] mr-1"}/>{each.snippet.title}</p>
                                <p className={"text-sm text-gray-500 mb-1"}>{each.snippet.description}</p>
                                <p className={"text-sm text-gray-500 flex"}><BiTime className={"relative top-1 mr-1"}/>{dayjs(each.snippet.publishedAt, "MM-DD-YYYY").format("hh:mm | MMM DD, YYYY")}</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ListVideo;
