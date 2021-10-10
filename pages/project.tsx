import Layout from '../components/Layout'
import Image from 'next/image'

import dbConnect from '../models'
import { ProjectProps } from '../models/types'
import projectSchema from '../models/projectSchema'


export default function Project(props: ProjectProps) {
    const { projects } = props
    return (
        <Layout pageTitle="Projects">
            <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                {projects.map(project => {
                    return (
                        <div
                            key={project._id}
                            className="rounded overflow-hidden shadow-lg border border-gray-400 hover:border-blue-400 transform duration-500 motion-safe:hover:scale-110">  
                            <div className="w-full overflow-hidden relative" style={{ height: '30vh' }}>
                                <Image
                                    src={project.photo}
                                    alt={project.name + " photo"}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded"
                                />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{project.name}</div>
                                <p className="text-gray-700 text-base">{project.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    await dbConnect()
    const res = await projectSchema.find({})
    const projs = res.map(doc => {
        const i =  doc.toObject()
        i._id = i._id.toString()
        return i
    })
    return { props: {projects: projs} }
}
