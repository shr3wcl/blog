import Head from "next/head";
import ArticleList from "../../components/article";
import useSWR, { Key, Fetcher } from 'swr'
import fetch from "node-fetch";
import axios from "axios";

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
const fetcher = (url: string, token: any) => axios.get(url, {headers: { Authorization: `Bearer ${token}`}}).then(res => res.data).catch(err => console.log(err));;
const useArticle = () => {
    const {data, error, isLoading} = useSWR([`https://api.raindrop.io/rest/v1/raindrops/30340862`, process.env.RAINDROP_TOKEN], ([url, token]) => fetcher(url, token));
    return {
        article: data,
        isLoading,
        isError: error
    }
}

const Article = () => {
    const {article, isLoading, isError} = useArticle();
    if (isLoading) return console.log(1);
    if (isError) return console.log(2);
    return (
        <div>
            <Head>
                <title>Article Saved</title>
            </Head>
            <ArticleList articleList={article.items}/>
        </div>
    )
}

export default Article;
