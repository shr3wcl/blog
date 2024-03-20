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
        <div className="w-full min-h-screen dark:bg-[#171717] dark:text-gray-50">
            <header className="sticky top-0 py-2 px-4 w-full bg-white dark:bg-[#171717] z-20 flex justify-between shadow-md">
                <span className="truncate text-inherit dark:text-gray-500">{post.title}</span>
                <span className="hidden md:flex items-center">
                    🕗 <span className="ml-2">{dayjs(post.date, "MM-DD-YYYY").format("hh:mm | MMM DD, YYYY")}</span>
                </span>
            </header>
            <div className="flex justify-center">
                <div className="grid grid-cols-main lg:grid-cols-layout gap-8">
                    <div className="px-4 sm:px-6 lg:px-8 mt-4">
                        <NotionRenderer
                            components={{ Code, nextImage: Image, nextLink: Link, Modal }}
                            recordMap={post.recordMap}
                            fullPage={true}
                            darkMode={false}
                            showTableOfContents
                            minTableOfContentsItems={3}
                            className="dark:bg-[#171717]"
                        />
                    </div>
                    <div className="hidden lg:block px-4 sm:px-6 lg:px-8 mt-4">
                        <div className="sticky top-20">
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-3 xl:mx-40 sm:mx-3 lg:mx-20 mt-8 mb-4">
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
            <Style />
        </div>

    )
}
