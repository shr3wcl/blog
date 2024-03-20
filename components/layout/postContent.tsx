import Link from 'next/link'
import dayjs from 'dayjs'
import {Post} from '../notion/postType'
import {MdUpdate, MdOutlineDescription} from "react-icons/md";
dayjs().format()

export const PostContent = ({post}: { post: Post }) => {
    return (
        <Link href={`/blog/${post.slug}`} className="card-body" key={`${post.id}_content`}>
            <div className="notion light-mode notion-page notion-block mx-3 h-full flex flex-col transition duration-300 ease-in-out transform hover:scale-105">
                <div className="h-3/4 justify-items-start">
                    {/* Title of post */}
                    <div className="card-title">
                        <div className="profile">
                            <div>
                                <p className="mb-2 notion-link text-blue-500 mt-2 text-2xl font-semibold flex items-center">
                                    {dayjs(post.date, "YYYY-MM-DD").isAfter(dayjs().subtract(7, "d")) && <span className="mr-1 text-2xl">🆕</span>}
                                    {post.title}
                                </p>
                                <p className="mt-1 text-gray-400 flex items-center">
                                    <MdOutlineDescription className="relative top-1 mr-1" />
                                    {post.description || post.title}
                                </p>
                            </div>
                        </div>
                    </div>
                    <h6 className="card-subtitle mb-2 text-muted text-sm text-gray-400" id={`${post.id}_published_at`}>
                        <MdUpdate className="relative top-1 mr-1" />
                        {dayjs(post.date, "MM-DD-YYYY").format("hh:mm | MMM DD, YYYY")}
                    </h6>
                </div>
                {/* Hashtag */}
                <div className="my-2 flex flex-wrap justify-end">
                    {post.hashtags?.map((hashtag, index) => (
                        <span key={`${post.id}_${hashtag}`} className="inline-block mb-1 mr-2 px-2 py-1 text-sm text-gray-900 bg-green-500 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                            {hashtag}
                        </span>
                    ))}
                </div>

            </div>
        </Link>

    )
}
