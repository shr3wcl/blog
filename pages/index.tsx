import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPosts, getPage, getHashtags } from '../components/notion';
import { Post, Hashtag } from '../components/notion/postType';
import { PostContent } from '../components/layout/postContent';
import dayjs from 'dayjs';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const NOTION_BLOG_ID = process.env.NOTION_BLOG_ID;

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getStaticProps = async ({ locale }: any) => {
    try {
        let posts = await getPosts(NOTION_BLOG_ID ?? '');

        for (let post of posts) {
            if (post) {
                await delay(200 + Math.random() * 500);
                post.recordMap = await getPage(post.id);
            }
        }

        let hashtag_list = await getHashtags();
        let props = {
            posts: posts,
            hashtag_list: hashtag_list,
            ...(await serverSideTranslations(locale, ['common'], null, ['en', 'vi'])),
        };
        props = JSON.parse(JSON.stringify(props));

        return { props, revalidate: 10 };
    } catch (err) {
        throw err;
    }
};

export default function NotionDomainPage({ posts, hashtag_list }: { posts: Post[]; hashtag_list: Hashtag[] }) {
    const { t } = useTranslation("common");
    const router = useRouter();
    let { hashtags } = router.query;

    const [show_posts, setShow_posts] = useState(posts);
    const [hashtagCheck, setHashtagCheck] = useState(hashtags);
    const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        if (hashtags && typeof hashtags === 'string') {
            const hashtagName = hashtags.split(',')[0];
            const newPosts = posts.filter((post) => post?.hashtags.includes(hashtagName));
            setShow_posts(newPosts);
            setHashtagCheck(hashtagName);
        } else {
            setShow_posts(posts);
            setHashtagCheck('');
        }
    }, [hashtags, posts]);

    const hashtagChange = async (hashtagName: string) => {
        await router.push({
            pathname: '/',
            query: { hashtags: hashtagName },
        });
        const newPosts = posts.filter((post) => post?.hashtags.includes(hashtagName)); 
        setShow_posts(newPosts);
        setShowMore((prevShowMore) => ({ ...prevShowMore, [hashtagName]: false }));
    };

    const handleShowMore = (hashtagName: string) => {
        setShowMore((prevShowMore) => ({ ...prevShowMore, [hashtagName]: !prevShowMore[hashtagName] }));
    };

    return (
        <div className="dark:bg-[#171717] dark:text-gray-50 min-h-screen w-full">
            <div className="max-w-7xl px-4 mx-auto mt-10 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {/* Newest */}
                        {(hashtagCheck !== '') && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-3">✨ Newest</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {show_posts.map((post: Post | undefined) => (
                                        post && dayjs(post.date, 'YYYY-MM-DD').isAfter(dayjs().subtract(7, 'd')) && ( 
                                            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                                                <PostContent key={post.id} post={post} />
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Category */}
                        {hashtags ? (
                            <div key={`key-${hashtags}`} className="mt-8">
                                <h2 className="text-2xl font-semibold mb-3">{hashtags}</h2>
                                {
                                    // Check if hashtag not have any post
                                    show_posts.filter((post: Post | undefined) => post?.hashtags.includes(hashtags as string)).length === 0 && (
                                        <div className="text-center text-2xl font-semibold mb-3">Chưa có bài viết nào</div>
                                    )
                                
                                }
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {show_posts
                                        .filter((post: Post | undefined) => post?.hashtags.includes(hashtags as string))
                                        .slice(0, showMore[hashtags as string] ? undefined : 4)
                                        .map((post: Post | undefined) => (
                                            post && (
                                                <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                                                    <PostContent key={post.id} post={post} />
                                                </div>
                                            )
                                        ))}
                                </div>
                                {show_posts.filter((post: Post | undefined) => post?.hashtags.includes(hashtags as string)).length > 4 && (
                                    <button
                                        className="mt-4 text-blue-500 hover:text-blue-700 cursor-pointer"
                                        onClick={() => handleShowMore(hashtags as string)}
                                    >
                                        {showMore[hashtags as string] ? 'View Less' : 'View More'}
                                    </button>
                                )}
                            </div>
                        ) : (
                            hashtag_list.map((hashtag: Hashtag) => (
                                <div key={`key-${hashtag.name}`} className="mt-8">
                                    <h2 className="text-2xl font-semibold mb-3">{hashtag.name}</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {show_posts
                                            .filter((post: Post | undefined) => post?.hashtags.includes(hashtag.name))
                                            .slice(0, showMore[hashtag.name] ? undefined : 4)
                                            .map((post: Post | undefined) => (
                                                post && (
                                                    <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                                                        <PostContent key={post.id} post={post} />
                                                    </div>
                                                )
                                            ))}
                                    </div>
                                    {show_posts.filter((post: Post | undefined) => post?.hashtags.includes(hashtag.name)).length > 4 && (
                                        <button
                                            className="mt-4 text-blue-500 hover:text-blue-700 cursor-pointer"
                                            onClick={() => handleShowMore(hashtag.name)}
                                        >
                                            {showMore[hashtag.name] ? 'View Less' : 'View More'}
                                        </button>
                                    )}
                                </div>
                            ))
                        )}

                    </div>

                    {/* List Hashtag */}
                    <div className="sticky top-20 h-screen overflow-y-auto" style={{ maxHeight: '80vh' }}> 
                        <h2 className="text-lg font-semibold mb-3"># Hashtag</h2>
                        <div className="flex flex-wrap gap-1">
                            {hashtag_list.map((hashtag) => (
                                <div key={`hashtag-${hashtag.name}`} onClick={() => hashtagChange(hashtag.name)}>
                                    <div className={`p-1 cursor-pointer text-xs notion-${hashtag.color}_background ${hashtagCheck === hashtag.name ? 'text-green-600 font-bold' : 'text-gray-700'} rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105`}>
                                        {hashtag.name}: {hashtag.count}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
