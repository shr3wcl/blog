import Link from "next/link";
import {MdUpdate} from "react-icons/md";
import dayjs from "dayjs";

const ArticleList = ({articleList}: any) => {
    return (
        <article className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {articleList.map((article: any) => (
                <div key={article._id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                    <Link href={article.link} target="_blank">
                        <img className="object-cover w-full h-48" src={article.cover} alt={article.title} />
                    </Link>
                    <div className="p-4">
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white">{article.title}</h5>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{article.excerpt}</p>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800">
                        <span className="text-xs text-gray-500"><MdUpdate className="inline-block mr-1" /> {dayjs(article.created, "MM-DD-YYYY").format("hh:mm | MMM DD, YYYY")}</span>
                        <Link href={article.link} target="_blank" className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                            Read more
                            <svg className="inline-block w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10 3a1 1 0 00-1.707-.707l-6 6a1 1 0 000 1.414l6 6A1 1 0 0010 17a1 1 0 00.707-1.707L5.414 11H16a1 1 0 110 2H5.414l5.293 5.293A1 1 0 0010 17a1 1 0 00.707-1.707l-6-6a1 1 0 00-1.707.707l6 6a1 1 0 001.707 0l6-6A1 1 0 0010 3z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            ))}
        </article>

    )
}

export default ArticleList;
