import ProjectList from "../../components/projects";
import Head from "next/head";
import useSWR from "swr";
import axios from "axios";
import Loading from "../../components/loading";
import ErrorPage from "../../components/error";

const fetcher = (url: string, token: any) => axios.get(url).then(res => res.data).catch(err => console.log(err));

const useProjects = () => {
    const {data, error, isLoading} = useSWR("https://api.github.com/users/Bin-08-01/repos", fetcher);
    return {
        projects: data,
        isLoading,
        isError: error
    }
}

const Project = () => {
    const {projects, isLoading, isError} = useProjects();
    if(isLoading) return <Loading/>;
    if(isError) return <ErrorPage/>
    return (
        <div className={"dark:bg-[#171717] dark:text-gray-50 min-h-screen w-full"}>
            <Head>
                <title>Projects</title>
            </Head>
            <div className="max-w-5xl px-4 mx-auto mt-10 sm:px-6 lg:px-0">
                <header className={"mb-6"}>💡 Projects</header>
                <ProjectList projects={projects}/>
            </div>
        </div>
    )
}

export default Project;
