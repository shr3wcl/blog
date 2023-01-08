import Link from "next/link";
import {MdUpdate} from "react-icons/md";
import dayjs from "dayjs";

const Article = ({articleList}: any) => {
    return(
        <article className={"mt-4 px-8 grid justify-around grid-cols-1 gap-4 px-2 align-top gap-x-8 md:grid-cols-2 lg:grid-cols-3"}>
            {articleList.map((article: any) => {
                return (
                    <div key={article._id}
                         className="w-full mx-auto mb-5 bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800">
                        <Link href={article.link} target={"_blank"}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="object-cover w-full h-56 rounded-t-lg" src={article.cover} alt=""/>
                        </Link>
                        <div className="p-5">
                            <Link href={article.link} target={"_blank"}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title}</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{article.excerpt}</p>
                            <span className={"text-sm text-gray-500 flex mb-2"}><MdUpdate className={"relative top-1 mr-1"}/> {dayjs(article.created, "MM-DD-YYYY").format("hh:mm | MMM DD, YYYY")}</span>
                            <Link href={article.link} target={"_blank"}
                                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </Link>
                        </div>
                    </div>

                )
            })}
        </article>
    )
}

export default Article;
