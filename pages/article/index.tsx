import Head from "next/head";
import ArticleList from "../../components/article";
import useSWR from 'swr'
import axios from "axios";
import Loading from "../../components/loading";
import ErrorPage from "../../components/error";

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
    if (isLoading) return <Loading/>;
    if (isError) return <ErrorPage/>;
    return (
        <div className={""}>
            <Head>
                <title>Article Saved</title>
            </Head>
            <div>
                <ArticleList articleList={article.items}/>
            </div>
        </div>
    )
}

export default Article;
