import React from 'react'
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
        return { props, revalidate: 60 * 60 * 1 }
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

    let show_posts = posts
    if(q_hashtags.length){
        for(const hashtag of q_hashtags){
            show_posts = show_posts.filter(post => post.hashtags.includes(hashtag));
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
            <div className="container main max-w-5xl px-4 mx-auto mt-10 sm:px-6 lg:px-8">
                <div className="mt-1 accordion card mb-3" id="selectHashtags">
                    <div id="selections" className="accordion-collapse collapse show" aria-labelledby="selections" data-bs-parent="#selections">
                        <div className="accordion-body">
                            {hashtag_list.map((hashtag) => (
                                <div className="form-check mb-2" key={`hashtag-${hashtag.name}-field`}>
                                    <input className="form-check-input" type="checkbox" id={`hashtag-${hashtag.name}`} name={hashtag.name} onChange={hashtagChange} />
                                    <label className={`form-check-label notion-${hashtag.color}_background`} htmlFor={`hashtag-${hashtag.name}`} >
                                        #{hashtag.name}: {hashtag.count}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <h5>✨ Newest</h5>
                {show_posts.map((post:Post) => (
                    <div className="card mt-5 dark:bg-[#111827] border-2 border-amber-50 w-[48%] rounded-2xl" key={post.id}>
                        <PostContent post={post} />
                    </div>
                ))}
            </div>
        </div>
    )
}
