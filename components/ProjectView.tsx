import Image from 'next/image'

import dbConnect from '../models'
import { ProjectProps } from '../models/types'
import projectSchema from '../models/projectSchema'



export default function Project(props: ProjectProps) {
    const { projects } = props
    return (
        <div>
            {projects.map(project => {
                <div>
                    <Image
                        src={project.photo}
                        alt={project.name + " photo"}
                    />
                    <h2>{project.name}</h2>
                </div>
            })}

        </div>
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