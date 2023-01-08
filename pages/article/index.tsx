import Head from "next/head";

export const getStaticProps = async () => {
    const res = await fetch("https://api.raindrop.io/rest/v1/raindrops/30340862",
        {
            headers: {
                Authorization: "Bearer 8f906c55-bd55-47ab-940d-169dc1fff768"
            }
        });
    const data = await res.json();
    return {
        props: {
            articleList: data.items
        }
    }
}

const Article = ({articleList}: any) => {
    return (
        <div>
            <Head>
                <title>Article Saved</title>
            </Head>
            <Article articleList={articleList}/>
        </div>
    )
}

export default Article;
