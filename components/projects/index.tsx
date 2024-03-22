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
            className="dark:bg-[#111827] my-1 border-[1px] border-gray-300 hover:border-blue-400 hover:shadow-md transition duration-300 ease-in-out dark:hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800 w-full rounded-lg overflow-hidden">
            <Link href={each.html_url} target={"_blank"} className={"flex flex-col mx-2"}>
              <div className={"mr-3 flex mt-2 justify-between items-center"}>
                <div className={"flex items-center"}>
                  <span className={"mr-1"}><BiBookBookmark className="text-blue-500 dark:text-blue-400" /></span>
                  <span className={"dark:text-blue-400 text-blue-500 font-semibold"}>{each.name}</span>
                </div>
                <span className={"text-sm text-gray-500 flex items-center"}>
                  <span className={"mr-1"}><AiOutlineStar /></span>
                  {each.stargazers_count}
                </span>
              </div>
              <div className={"my-3"}>
                <span className={"text-sm text-gray-500 flex items-center"}><MdUpdate className={"mr-1"} /> {dayjs(each.updated_at).format("hh:mm | MMM DD, YYYY")}</span>
                <p className={"mb-1 text-sm text-gray-500 mt-2"}>🧑‍💻 Language: {each.language}</p>
                <p className={"text-gray-400 text-sm"}>{each.description}</p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>


  )
}

export default ProjectList;
