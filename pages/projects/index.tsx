import ProjectList from "../../components/projects";
import Head from "next/head";

export const getStaticProps = async () => {
    const res = await fetch("https://api.github.com/users/Bin-08-01/repos");
    const data = await res.json();
    return {
        props: {projects: data, revalidate: 60 * 60}
    }
}

const Project = ({projects}: any) => {
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
