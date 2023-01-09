import Head from "next/head";
import ArticleList from "../../components/article";

export const getStaticProps = async () => {
    const res = await fetch("https://api.raindrop.io/rest/v1/raindrops/30340862",
        {
            headers: {
                Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`
            },
        });
    const data = await res.json();
    return {
        props: {
            articleList: data.items,
            revalidate: 60 * 60
        }
    }
}

const Article = ({articleList}: any) => {
    return (
        <div>
            <Head>
                <title>Article Saved</title>
            </Head>
            <ArticleList articleList={articleList}/>
        </div>
    )
}

export default Article;
