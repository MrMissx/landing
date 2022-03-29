import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import ScrollUpButton from "../components/ScrollUpButton";

import dbConnect from "../models";
import { ProjectProps } from "../models/types";
import projectSchema from "../models/projectSchema";


export default function Project(props: ProjectProps) {
    const { projects } = props
    return (
        <Layout pageTitle="Projects">
            <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project, idx) => {
                    return (
                        <ProjectCard data={project} key={idx} />
                    )
                })}
            </div>
            <ScrollUpButton />
        </Layout>
    );
}


export async function getServerSideProps() {
    await dbConnect();
    const res = await projectSchema.find({});
    const projs = res.map((doc) => {
        const i = doc.toObject()
        i._id = i._id.toString()
        return i;
    });
    return { props: { projects: projs } };
}
