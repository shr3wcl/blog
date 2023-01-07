import ListVideo from "../../components/video";

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
                <header className={"mb-6"}>🎥 Video</header>
                <ListVideo videoList={videoList}/>
            </div>
        </div>
    )
}

export default Video;
