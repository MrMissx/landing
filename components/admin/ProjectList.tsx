import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

import { db } from "../../firebase/client";
import { Project } from "../../models/types";

export default function ProjectList(props: { onEdit: (proj: Project) => void}) {
    const { onEdit } = props;
    const [projectList, setProjectList] = useState<Project[]>([]);
    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projects = querySnapshot.docs.map(doc => {
            return { _id: doc.id, ...doc.data() } as Project;
        })
        setProjectList(projects);
    }

    const deleteProject = async (id: string) => {
        await deleteDoc(doc(db, "projects", id));
        setProjectList(projectList.filter(proj => proj._id !== id));
    }

    return (
        <div className="my-4">
            <h1 className="text-2xl">Project List</h1>
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th colSpan={2}>action</th>
                    </tr>
                </thead>
                <tbody>
                    {projectList && projectList.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{ index + 1 }</td>
                                <td>{ item.name }</td>
                                <td>
                                    <button
                                        className="text-white bg-blue-700 hover:bg-blue-800font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onEdit(item);
                                        }}
                                    >Edit</button>
                                    <button
                                        className="text-white bg-red-700 hover:bg-blue-800font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            deleteProject(item._id!);
                                        }}
                                    >Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
