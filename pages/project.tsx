import { collection, getDocs } from "firebase/firestore";
import { GetStaticProps } from "next";

import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import ScrollUpButton from "../components/ScrollUpButton";

import { db } from "../firebase/client";
import { ProjectProps } from "../models/types";


export default function Project(props: ProjectProps) {
    const { projects } = props
    return (
        <Layout pageTitle="Projects">
            <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project, idx) => {
                    return (
                        <ProjectCard data={project} key={idx} id={idx} />
                    )
                })}
            </div>
            <ScrollUpButton />
        </Layout>
    );
}


export const getStaticProps: GetStaticProps = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projects = querySnapshot.docs.map((doc) => {
        return doc.data() as ProjectProps;
    })
    return { props: { projects }, revalidate: 86400 };
}
