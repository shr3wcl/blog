import Head from "next/head";
import ArticleList from "../../components/article";
import useSWR from 'swr'
import axios from "axios";
import Loading from "../../components/loading";
import ErrorPage from "../../components/error";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {useRouter} from "next/router";
import {useInfiniteQuery} from "@tanstack/react-query";

// export const getStaticProps = async () => {
//     const res = await fetch("https://api.raindrop.io/rest/v1/raindrops/30340862",
//         {
//             headers: {
//                 Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`
//             },
//         });
//     const data = await res.json();
//     return {
//         props: {
//             articleList: data.items,
//             revalidate: 10
//         }
//     }
// }

const fetcher = (url: string, token: any) => axios.get(url, {headers: { Authorization: `Bearer ${token}`}}).then(res => res.data).catch(err => {throw err});
const useArticle = (page: number, search: string) => {
    const {data, error, isLoading} = useSWR([`https://api.raindrop.io/rest/v1/raindrops/30340862?sort=-created&perpage=10&page=${page}&search=${search}`, process.env.RAINDROP_TOKEN], ([url, token]) => fetcher(url, token));
    const dataTags = useSWR([`https://api.raindrop.io/rest/v1/tags/30340862`, process.env.RAINDROP_TOKEN], ([url, token]) => fetcher(url, token));
    const tags  = dataTags.data;
    return {
        article: data,
        tags,
        isLoadingTag: dataTags.isLoading,
        isErrorTag: dataTags.error,
        isLoading,
        isError: error
    }
}

const Article = () => {
    const router = useRouter();
    let [page, setPage] = useState(0);
    let [keySearch, setKeySearch] = useState(router.query.search?.at(0) || '');
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [hashtagCheck, setHashtagCheck] = useState("");
    const [hashTags, setHashTag] = useState([]);

    const {article, tags, isLoadingTag, isErrorTag, isLoading, isError} = useArticle(page, keySearch);

    // const {  data, fetchNextPage } = useInfiniteQuery(
    //     ["article", keySearch],
    //     ({ pageParam, queryKey }) => {
    //         // eslint-disable-next-line react-hooks/rules-of-hooks
    //         return useArticle(pageParam || 0, queryKey[1]).article;
    //     },
    //     {
    //         getNextPageParam: (_lastPage, pages) => {
    //             return pages.length;
    //         },
    //     }
    // );

    // const articles = useMemo(() => {
    //     console.log(data?.pages)
    //     return (data?.pages || []).reduce((previousValue, currentValue) =>  {
    //         return [...previousValue, ...currentValue];
    //     }, [])
    // }, [data])

    useEffect(() => {
        const {search, indexPage} = router.query;
        if(search && typeof search === 'string'){
            setKeySearch(search[0]);
        }else{
            setKeySearch('');
        }

        if(indexPage && typeof indexPage === 'string'){
            setPage(parseInt(indexPage));
        }
    }, [router.query.search]);

    const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            // @ts-ignore
            const key = e.target?.value;
            await router.push({
                pathname: '',
                query: {search: key}
            })
            // @ts-ignore
            setKeySearch(e.target?.value);
        }
    }

    const handlePage = async () => {
        await router.push({
            pathname: '',
            query: {indexPage: page++}
        })
        setPage(page++);
    }

    if (isLoading && isLoadingTag) return <Loading/>;
    if (isError && isErrorTag) return <ErrorPage/>;

    const hashtagChange = async (hashtagName: string) => {
        await router.push({
            pathname: '/article',
            query: {hashtags: hashtagName}
        })
        const newTags = tags.items.filter((tag: any) => tag._id.includes(hashtagName));
        setHashTag(newTags);
    }

    return (
        <div className={""}>
            <Head>
                <title>Article Saved</title>
            </Head>
            <div className={"flex flex-col justify-center"}>

                <div className={"flex justify-center mt-12 mb-10 flex-col items-center"}>
                    <label htmlFor="default-search"
                           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative w-4/5 md:w-2/5">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                 stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input type="search" id="default-search" ref={searchInputRef}
                               className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Search..." required onKeyDown={handleSearch}/>
                            <button
                                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                            </button>
                    </div>
                    <div className={"flex mt-4"}>
                        {tags?.items.map((tag: any) => {
                            return(
                                <div key={`hashtag-${tag._id}`} onClick={() => hashtagChange(tag._id)}>
                                    <div key={`hashtag-${tag._id}-field`}
                                         className={(hashtagCheck === tag._id) ? 'mr-2 mt-3 border bg-green-500 font-extrabold' : 'mr-2 mt-3 text-gray-300 bg-blue-500'}>
                                        <label
                                            className={`form-check-label cursor-pointer rounded px-1 py-1 `}
                                            htmlFor={`hashtag-${tag._id}`}>
                                            {tag._id}: {tag.count}
                                        </label>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <ArticleList articleList={article?.items}/>
                {/*<p onClick={handlePage}>Load more</p>*/}
            </div>
        </div>
    )
}

export default Article;
