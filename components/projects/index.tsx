import Link from "next/link";
import {BiBookBookmark} from "react-icons/bi";
import {AiOutlineStar} from "react-icons/ai";
import {MdUpdate} from "react-icons/md";
import dayjs from "dayjs";

const ProjectList = ({projects}: any) => {
  return(
      <div className={"grid grid-cols-1 gap-4 sm:grid-cols-2"}>
        {projects.map((each: any) => {
          return (
              <div key={each.id}
                   className=" dark:bg-[#111827] my-1 border-[1px] border-gray-300 hover:border-blue-400 dark:hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800 w-full">
                <Link href={each.html_url} target={"_blank"} className={"flex flex-col mx-2"}>
                  <div className={"mr-3 flex mt-2 justify-between"}>
                    {/*<img src={""} alt="Thumbnails" className={"w-52 p-1 rounded-xl"}/>*/}
                    <div className={"flex"}>
                      <span className={"relative top-1 mr-1"}><BiBookBookmark/></span>
                      <span className={"dark:text-blue-400 font-semibold"}>{each.name}</span>
                      <p className={"border border-gray-400 rounded-xl text-blue-400 px-1 dark:border-[#768390] ml-1 text-sm h-fit"}>Public</p>
                    </div>
                    <span className={"text-sm text-gray-500 mb-1 flex"}>
                                            <span className={"relative top-1 mr-1"}><AiOutlineStar/></span>
                      {each.stargazers_count}
                                        </span>
                  </div>
                  <div className={"my-3"}>
                    <span className={"text-sm text-gray-500 flex"}><MdUpdate className={"relative top-1 mr-1"}/> {dayjs(each.updated_at, "MM-DD-YYYY").format("hh:mm | MMM DD, YYYY")}</span>
                    <p className={"mb-2 text-sm text-gray-500 mt-2"}>🧑‍💻 {each.language}</p>
                  </div>
                </Link>
              </div>
          )
        })}
      </div>
  )
}

export default ProjectList;
