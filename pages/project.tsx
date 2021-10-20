import Layout from "../components/Layout";
import Image from "next/image";

import dbConnect from "../models";
import { ProjectProps } from "../models/types";
import projectSchema from "../models/projectSchema";


export default function Project(props: ProjectProps) {
    const { projects } = props
    return (
        <Layout pageTitle="Projects">
            <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project) => {
                    return (
                        <a href={ project.link } key={ project._id } target="_blank" rel="noopener noreferrer">
                            <div
                                className="rounded overflow-hidden shadow-lg border border-gray-400 hover:border-blue-400 transform duration-500 hover:scale-105"
                            >
                                <div className="w-full overflow-hidden relative h-40v md:h-30v lg:h-40v">
                                    <Image
                                        src={project.photo}
                                        alt={project.name + " photo"}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded"
                                    />
                                </div>
                                <div className="px-6 py-4 mb-6 flex flex-col">
                                    <div className="font-bold text-xl mb-2">
                                        {project.name}
                                    </div>
                                    <p className="text-gray-700 text-base flex-grow">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
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
