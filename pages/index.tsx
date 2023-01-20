import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {getPosts, getPage, getHashtags} from '../components/notion'
import {Post, Hashtag} from '../components/notion/postType'
import {PostContent} from '../components/layout/postContent'

const NOTION_BLOG_ID = process.env.NOTION_BLOG_ID;

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}


export const getStaticProps = async () => {
    try {
        let posts = await getPosts(NOTION_BLOG_ID ?? '');

        // Restrict posts to only those with a featured image.
        // posts = posts.slice(0, 5);

        for (let post of posts) {
            await delay(200 + (Math.random() * 500));
            post!.recordMap = await getPage(post!.id);
        }

        let hashtag_list = await getHashtags();
        let props = {posts: posts, hashtag_list: hashtag_list};
        props = JSON.parse(JSON.stringify(props));

        return {props, revalidate: 10}
    } catch (err) {
        console.error('page error', err)
        throw err
    }
}

export default function NotionDomainPage({posts, hashtag_list}: { posts: Post[], hashtag_list: Hashtag[] }) {
    const router = useRouter();
    let {hashtags} = router.query;

    const [show_posts, setShow_posts] = useState(posts);
    const [hashtagCheck, setHashtagCheck] = useState(hashtags);

    useEffect(()=>{
        if(hashtags && typeof hashtags === 'string'){
            const hashtagName = hashtags.split(',')[0];
            const newPosts = posts.filter(post => post.hashtags.includes(hashtagName));
            setShow_posts(newPosts);
            setHashtagCheck(hashtagName);
        }else{
            setShow_posts(posts);
            setHashtagCheck('');
        }
    }, [hashtags]);

    const hashtagChange = async (hashtagName: string) => {
        await router.push({
            pathname: '/',
            query: {hashtags: hashtagName}
        })
        const newPosts = posts.filter(post => post.hashtags.includes(hashtagName));
        setShow_posts(newPosts);
    }

    return (
        <div className={"dark:bg-[#171717] dark:text-gray-50 min-h-screen w-full"}>
            <div className="max-w-5xl px-4 mx-auto mt-10 sm:px-6 lg:px-0">
                <div className="accordion-body mb-5 ">
                    <h3 className={"font-semibold my-2"}># Hashtag</h3>
                    <div className={"flex flex-wrap"}>
                        {hashtag_list.map((hashtag) => (
                            <div key={`hashtag-${hashtag.name}`} onClick={() => hashtagChange(hashtag.name)}>
                                <div key={`hashtag-${hashtag.name}-field`}  className={(hashtagCheck === hashtag.name) ? 'mr-2 mt-3 border text-green-600 font-extrabold' : 'mr-2 mt-3 text-gray-700 '}>
                                    <label
                                        className={`form-check-label cursor-pointer rounded px-1 py-1 notion-${hashtag.color}_background`}
                                        htmlFor={`hashtag-${hashtag.name}`}>
                                        {hashtag.name}: {hashtag.count}
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <h5 className={"mb-3"}>✨ Newest</h5>
                <div className={"grid grid-cols-1 gap-4 sm:grid-cols-2"}>
                    {show_posts.map((post: Post) => (
                        <div
                            className="card dark:bg-[#111827] border-[1px] border-gray-300 hover:border-blue-400 dark:hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800 w-full max-h-48"
                            key={post.id}>
                            <PostContent post={post}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
