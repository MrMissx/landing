import Image from 'next/image'

import { ProjectProps } from '../models/types'


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
