import ListVideo from "../../components/video";
import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
import Loading from "../../components/loading";
import ErrorPage from "../../components/error";
const fetcher = (url: string) => axios.get(url).then(res => res.data.items).catch(err => console.log(err));

const useVideo = () => {
    const { data, error, isLoading } = useSWR(process.env.NOTION_KEY, fetcher);
    return {
        videoList: data,
        isLoading,
        isError: error
    }
}

const Video = () => {
    const {videoList, isLoading, isError} = useVideo();
    if(isLoading) return <Loading/>;
    if(isError) return <ErrorPage/>;
    return (
        <div className={"dark:bg-[#171717] dark:text-gray-50 min-h-screen w-full"}>
            <Head>
                <title>Video</title>
            </Head>
            <div className="max-w-5xl px-4 mx-auto mt-10 sm:px-6 lg:px-0">
                <header className={"mb-6"}>🎥 Video</header>
                <ListVideo videoList={videoList}/>
            </div>
        </div>
    )
}

export default Video;
