import {Post} from "../notion/postType";
import {NotionRenderer} from "react-notion-x";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import dayjs from "dayjs";

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

export const PostView = ({post}: { post: Post }) => {

    return (
        <div className={"w-full dark:bg-[#171717] dark:text-gray-50 "}>
            <Head>
                <title>{post.title}</title>
            </Head>
            <header
                className={"sticky top-0 mt-2 py-2 px-4 w-full bg-white dark:bg-[#171717] z-20 flex justify-between"}>
                <span className={"truncate text-inherit"}>{post.title}</span>
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
            <style global jsx>{`
              .notion-page-content {
                display: flex;
              }

              ul {
                list-style-type: disc !important;
                list-style-position: inside !important;
              }

              ol {
                list-style-type: decimal !important;
                list-style-position: inside !important;
              }

              blockquote {
                border-left: 3px solid black !important;
              }

              h1, h2, h3, h4, h5, h6 {
                padding: 20px 0 !important;
              }

              h1 {
                font-size: 2em;
                margin-top: 1.1em;
              }

              h2 {
                font-size: 1.75em;
                margin-top: 1.1em;
              }

              h3 {
                font-size: 1.5em;
                margin-top: 1.1em;
                position: relative;
                display: inline-block;
                font-weight: 600;
                line-height: 1.3;
                padding: 3px 2px;
                margin-bottom: 1px;
                max-width: 100%;
                white-space: pre-wrap;
                word-break: break-word;
              }

              h4 {
                font-size: 1.25em;
                margin-top: 1.1em;
              }

              h5 {
                font-size: 1em;
                margin-top: 1.1em;
              }

              h6 {
                font-size: 0.75em;
                margin-top: 1.1em;
              }

              blockquote > * {
                padding: 4px 20px;
              }

              .notion-page {
                //width: var(--notion-max-width);
                //padding-left: calc(min(16px, 8vw));
                //padding-right: calc(min(16px, 8vw));
              }

              .note-page-content * {
                word-break: break-word;
              }

              .notion-page-scroller {
                display: flex;
                justify-content: right;
              }

              .notion-frame {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
                margin-top: 20px;

              }
              .notion-page-content-inner>.notion-table-of-contents{
                display: none;
              }
              img {
                margin: 8px 0 4px;
              }

              .notion-asset-wrapper, .notion-asset-wrapper-video {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 6px 0;
              }

              .notion-header {
                //position: sticky;
                //top: 0rem;
                //left: 0;
                //z-index: 20;
                //width: 100%;
                //max-width: 100vw;
                //overflow: hidden;
                //height: var(--notion-header-height);
                //min-height: var(--notion-header-height);
                ////background: #171717;
                //font-size: 14px;
                //padding-top: 10px;
                //color: rgb(107 114 128 / var(--tw-text-opacity));
                display: none;
              }

              h1.notion-title {
                font-size: 2.5rem;
                margin-bottom: 20px;
                margin-top: 40px;
                line-height: 1.2;
                font-weight: 600;
                outline: 0;
                font-weight: 600;
                color: #3b82f6;
                text-align: center;
              }

              .notion {
                font-size: 18px;
                line-height: 28px;
                font-family: ui-sans-serif, system-ui, -apple-system,
                BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
                "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
                "Segoe UI Symbol", "Noto Color Emoji";
              }

              .notion img {
                position: relative;
              }

              .notion img::after {
                content: "";
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: white;
              }

              .notion-list li {
                padding-top: 2px;
              }

              .notion-hash-link {
                margin-top: 7px;
              }

              .notion-viewport {
                position: relative;
              }
              
              .notion-aside{
                padding-left: 2rem;
                margin-top: 4rem;
              }
              
              .notion-aside-table-of-contents {
                position: sticky;
                top: 30%;
              }

              .notion-table-of-contents-item {
                white-space: wrap;
                line-height: 1.25rem;
              }

              .notion-code {
                font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo,
                monospace !important;
              }

              .notion-asset-caption {
                text-align: center;
                width: 100%;
              }

              .notion-list {
                overflow: hidden;
                width: 100%;
              }

              .notion-bookmark-title {
                font-weight: 500;
              }

              .notion-to-do {
                margin-left: 16px;
              }
              
              .notion-aside-table-of-contents-header{
              text-align: center;
              }

              @media (min-width: 1300px) and (min-height: 300px)

              <
              style >
              .notion-page-content-has-aside {
                display: flex;
                flex-direction: row;
                width: calc((100vw + var(--notion-max-width)) / 2);
              }

              <
              style >
              .notion-page-content {
                width: 100%;
                display: flex;
                flex-direction: column;
              }

              .dark .notion {
                --fg-color: rgba(255, 255, 255, 0.9);
                --fg-color-0: var(--fg-color);
                --fg-color-1: var(--fg-color);
                --fg-color-2: var(--fg-color);
                --fg-color-3: var(--fg-color);
                --fg-color-4: var(--fg-color);
                --fg-color-5: rgba(255, 255, 255, 0.7);
                --fg-color-6: #fff;
                --fg-color-icon: #fff;
                --bg-color: #18181b;
                --bg-color-0: rgb(71, 76, 80);
                --bg-color-1: rgb(63, 68, 71);
                --bg-color-2: rgba(135, 131, 120, 0.15);
                --notion-red: rgb(255, 115, 105);
                --notion-pink: rgb(226, 85, 161);
                --notion-blue: rgb(82, 156, 202);
                --notion-purple: rgb(154, 109, 215);
                --notion-teal: rgb(77, 171, 154);
                --notion-yellow: rgb(255, 220, 73);
                --notion-orange: rgb(255, 163, 68);
                --notion-brown: rgb(147, 114, 100);
                --notion-gray: rgba(151, 154, 155, 0.95);
                --notion-red_background: rgb(89, 65, 65);
                --notion-pink_background: rgb(83, 59, 76);
                --notion-blue_background: rgb(54, 73, 84);
                --notion-purple_background: rgb(68, 63, 87);
                --notion-teal_background: rgb(53, 76, 75);
                --notion-yellow_background: rgb(89, 86, 59);
                --notion-orange_background: rgb(89, 74, 58);
                --notion-brown_background: rgb(67, 64, 64);
                --notion-gray_background: rgb(69, 75, 78);
                --notion-red_background_co: rgba(89, 65, 65, 0.3);
                --notion-pink_background_co: rgba(83, 59, 76, 0.3);
                --notion-blue_background_co: rgba(120, 162, 187, 0.3);
                --notion-purple_background_co: rgba(68, 63, 87, 0.3);
                --notion-teal_background_co: rgba(53, 76, 75, 0.3);
                --notion-yellow_background_co: rgba(89, 86, 59, 0.3);
                --notion-orange_background_co: rgba(89, 74, 58, 0.3);
                --notion-brown_background_co: rgba(67, 64, 64, 0.3);
                --notion-gray_background_co: rgba(69, 75, 78, 0.3);
              }

              @media screen and (max-width: 1024px) {
                .notion-page {
                  min-width: 100%;
                }
                .notion-aside{
                display: none;
                }
              }
            `}</style>
        </div>
    )
}
