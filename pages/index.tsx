import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

import { NotionRenderer } from 'react-notion-x'

import {getPosts, getPage, getHashtags} from '../components/notion'
import { Post, Hashtag } from '../components/notion/postType'

import {PostContent} from '../components/layout/postContent'

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

export const getStaticProps = async () => {
    try {
        let posts = await getPosts('dfb969cf85fb4698886dba7ad2dca860' ?? '');

        // Restrict posts to only those with a featured image.
        // posts = posts.slice(0, 5);

        for(let post of posts) {
            await delay(200 + (Math.random() * 500));
            post!.recordMap = await getPage(post!.id);
        }

        // Hashtag selections
        let hashtag_list = await getHashtags();

        let props = {posts: posts, hashtag_list: hashtag_list};
        props = JSON.parse(JSON.stringify(props));

        // const props = {posts: [], hashtag_list: []};
        return { props, revalidate: 60 * 60 }
    } catch (err) {
        console.error('page error', err)

        // we don't want to publish the error version of this page, so
        // let next.js know explicitly that incremental SSG failed
        throw err
    }
}

export default function NotionDomainPage({posts, hashtag_list}: {posts: Post[], hashtag_list: Hashtag[]}) {
    const router = useRouter();
    // query hashtags
    let { hashtags } = router.query;

    let q_hashtags:string[] = [];
    if(hashtags && typeof hashtags === 'string'){
        q_hashtags = hashtags.split(',');
    }

    let [show_posts, setShow_posts] = useState(posts);
    if(q_hashtags.length){
        for(const hashtag of q_hashtags){
            const temp = show_posts.filter(post => post.hashtags.includes(hashtag));
            setShow_posts(temp);
        }
    }

    const hashtagChange = (e:any) => {
        const {name, checked} = e.target;
        console.log("hashtags", name, checked, q_hashtags);

        if(q_hashtags){
            if(checked){
                q_hashtags!.push(name);
            } else {
                q_hashtags = q_hashtags!.filter((hashtag:string) => hashtag !== name);
            }

            router.push({
                pathname: '/',
                query: { hashtags: q_hashtags.join(',')  },
            });
        }

        if(checked){
            q_hashtags!.push(name);
        } else {
            q_hashtags = q_hashtags!.filter((hashtag:string) => hashtag !== name);
        }

        router.push({
            pathname: '/',
            query: { hashtags: q_hashtags.join(',')  },
        });
    }

    return (
        <div className={"dark:bg-[#171717] dark:text-gray-50 min-h-screen w-full"}>
            <div className="max-w-5xl px-4 mx-auto mt-10 sm:px-6 lg:px-0">
                <div className="accordion card" id="selectHashtags">
                    <div id="selections" className="accordion-collapse collapse show" aria-labelledby="selections" data-bs-parent="#selections">
                        <div className="accordion-body">
                            {hashtag_list.map((hashtag) => (
                                <div className="form-check" key={`hashtag-${hashtag.name}-field`}>
                                    <input className="form-check-input" type="checkbox" id={`hashtag-${hashtag.name}`} name={hashtag.name} onChange={hashtagChange} />
                                    <label className={`form-check-label notion-${hashtag.color}_background`} htmlFor={`hashtag-${hashtag.name}`} >
                                        #{hashtag.name}: {hashtag.count}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <h5 className={"mb-3"}>✨ Newest</h5>
                <div className={"grid grid-cols-1 gap-4 sm:grid-cols-2"}>
                    {show_posts.map((post:Post) => (
                        <div className="card dark:bg-[#111827] border-[1px] hover:border-blue-400 dark:hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800 w-full max-h-48 lg:h-36" key={post.id}>
                            <PostContent post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
