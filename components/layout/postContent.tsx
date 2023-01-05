import Link from 'next/link'

import { NotionRenderer } from 'react-notion-x'

import { Post } from '../notion/postType'

export const PostContent = ({post}:{post:Post}) => {
    return (
        <Link href={`/blog/${post.slug}`} className="card-body" key={`${post.id}_content`}>
            <div className='notion light-mode notion-page notion-block mx-3'>
                <div className="card-title d-flex align-items-center">
                    <div className="profile align-items-center">
                        <div>
                            <p className="mb-0 notion-link text-blue-400 mt-2 text-2xl mb-2" id={`${post.id}_title`}>{post.title}</p>
                            <p className={"my-1"}>{post.description}</p>
                        </div>
                    </div>
                </div>
                <h6 className="card-subtitle mb-2 text-muted text-sm" id={`${post.id}_published_at`}>{new Date(post.date ?? '').toLocaleString()}</h6>
                {/*<h6 className="card-subtitle mb-2 text-muted" id={`${post.id}_edited_at`}>edited_at: &ensp;{new Date(post.edited).toLocaleString()}</h6>*/}
                <div className="d-flex flex flex-row">
                    {post.hashtags?.map((hashtag) => {
                        return (
                            <div key={`${post.id}_${hashtag}`} className="me-3 mx-1 flex justify-center items-center">
                                {/*<Link href={`/?hashtags=${hashtag}`}>*/}
                                <div>
                                    <span className="h6 mb-0 notion-link dark:bg-green-300 text-gray-900 px-1 rounded">#{hashtag}</span>
                                    {/*</Link>*/}

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/*<div className="card-text mt-4 post-content contents-texts">*/}
            {/*    <NotionRenderer recordMap={post.recordMap} fullPage={false} darkMode={false} />*/}
            {/*</div>*/}
        </Link>
    )
}
