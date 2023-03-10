import {Post} from "../notion/postType";
import {NotionRenderer} from "react-notion-x";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import dayjs from "dayjs";
import Style from "./style";

const Code = dynamic(async () => {
    const m = await import("react-notion-x/build/third-party/code");
    return m.Code;
});

const Modal = dynamic(
    () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
    {
        ssr: false,
    }
);

// const TweetRender = ({ id }: { id: string }) => {
//     return <TweetEmbed tweetId={id} />;
// };
const ReactGiscus = dynamic(() => import("../../components/comment"), {
    ssr: false,
    loading: () => <p>Loading Comments...</p>,
});
export const PostView = ({post}: { post: Post }) => {

    return (
        <div className={"w-full dark:bg-[#171717] dark:text-gray-50 "}>
            <Head>
                <meta name={"title"} content={post.title}/>
                <meta name="description" content={post.description}/>
                <meta name="content" content={post.recordMap}/>
                <meta property="og:title" content={post.title}/>
                <meta property="og:description" content={post.description}/>
                <title>{post.title}</title>
            </Head>
            <header
                className={"sticky top-0 mt-2 py-2 px-4 w-full bg-white dark:bg-[#171717] z-20 flex justify-between z-[120]"}>
                <span className={"truncate text-inherit dark:text-gray-500"}>{post.title}</span>
                <span className={"hidden md:flex"}>🕗 <span
                    className={"ml-2"}>{dayjs(post.date, "MM-DD-YYYY").format("hh:mm | MMM DD, YYYY")}</span></span>
            </header>
            <article className={"px-4 sm:px-6 lg:px-8"}>
                <NotionRenderer components={{
                    Code,
                    // collection: Collection,
                    // collectionRow: CollectionRow,
                    nextImage: Image,
                    nextLink: Link,
                    // Tweet: TweetRender,
                    Modal,
                }} recordMap={post.recordMap} fullPage={true} darkMode={false} showTableOfContents
                                minTableOfContentsItems={3} className={"dark:bg-[#171717]"}/>
            </article>

            <div className="mx-3 xl:mx-40 sm:mx-3 lg:mx-20">
                <ReactGiscus
                    repo="Bin-08-01/blog"
                    repoId="R_kgDOIttA_A"
                    category="General"
                    categoryId="DIC_kwDOIttA_M4CUfoM"
                    dataMapping="title"
                    dataTerm={() => "en"}
                    theme="preferred_color_scheme"
                />
            </div>

            <Style/>

        </div>
    )
}
