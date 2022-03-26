import Image from 'next/image'

import Animation from './animation'

import { ProjectCardProps } from '../models/types'


export default function ProjectCard({ data, key }: ProjectCardProps) {
    return (
        <a href={data.link} key={data._id} target="_blank" rel="noopener noreferrer">
            <Animation.FadeIn custom={key} delay={0.2}>
                <div className="rounded overflow-hidden shadow-lg border border-gray-400 dark:border-gray-700 dark:bg-stone-800 hover:border-blue-400 transform duration-500 hover:scale-105">
                    <div className="w-full overflow-hidden relative h-40v md:h-30v lg:h-40v">
                        <Image
                            src={data.photo}
                            alt={data.name + " photo"}
                            layout="fill"
                            objectFit="cover"
                            className="rounded"
                            placeholder="blur"
                            blurDataURL="/loadingPlaceholder.gif"
                        />
                    </div>
                    <div className="px-6 py-4 mb-6 flex flex-col">
                        <div className="font-bold text-xl mb-2">
                            {data.name}
                        </div>
                        <p className="text-gray-700 dark:text-slate-300 text-base flex-grow">
                            {data.description}
                        </p>
                    </div>
                </div>
            </Animation.FadeIn>
        </a>
    )
}
