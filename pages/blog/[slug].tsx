import { NotionRenderer } from 'react-notion-x'
import {getPosts, getPage} from '../../components/notion'
import { Post  } from '../../components/notion/postType'

import { PostContent } from '../../components/layout/postContent'
import {PostView} from "../../components/layout/postView";

export default function PostDetail({ post }: {post: Post}) {
    if (!post) {
        return <div />
    }

    return (
        <div className="px-4 mx-auto font-sans sm:px-6 lg:px-8 w-full dark:bg-[#171717] min-h-screen">
            <PostView post={post} />
        </div>
    )
}

export const getStaticPaths = async () => {
    const posts = await getPosts('dfb969cf85fb4698886dba7ad2dca860' as string)
    return {
        paths: posts.map((post) => ({ params: { slug: post!.slug, id: post!.id } })),
        fallback: true,
    }
}

export const getStaticProps = async (context:any) => {
    const { slug } = context.params;
    const posts = await getPosts('dfb969cf85fb4698886dba7ad2dca860' as string);
    let post:any = posts.find((p) => p!.slug === slug) ?? null;
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


