import {getPosts, getPage} from '../../components/notion'
import {Post} from '../../components/notion/postType'
import {PostView} from "../../components/layout/postView";

export default function PostDetail({post}: { post: Post }) {
    if (!post) {
        return <div/>
    }

    return (
        <div className=" mx-auto font-sans w-full dark:bg-[#171717] min-h-screen">
            <PostView post={post}/>
        </div>
    )
}

export const getStaticPaths = async () => {
    const posts = await getPosts(process.env.NOTION_BLOG_ID as string)
    return {
        paths: posts.map((post) => ({params: {slug: post!.slug, id: post!.id}})),
        fallback: true,
    }
}

export const getStaticProps = async (context: any) => {
    const {slug} = context.params;
    const posts = await getPosts(process.env.NOTION_BLOG_ID as string)
    let post: any = posts.find((p) => p!.slug === slug) ?? null;
    post.recordMap = await getPage(post.id);
    post = JSON.parse(JSON.stringify(post));
    post = post as Post;
    return {
        props: {
            post,
        },
        revalidate: 60 * 60,
    }
}


