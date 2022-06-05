import { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { db, storage } from "../../firebase/client";
import ProjectList from "./ProjectList";
import { Project } from "../../models/types";

export default function ProjectAdmin() {
    const [state, setState] = useState(0);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [link, setLink] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [imageUpload, setImageUpload] = useState<File | null>(null);
    const [currProject, setCurrPorject] = useState<Project | null>(null);

    const success = () => {
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
        }, 2000);
    }
    const editHandler = async (item: Project) => {
        if(!item) return;
        setCurrPorject(item);
        setName(item.name);
        setDesc(item.description);
        setLink(item.link || "");
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if(imageUpload === null) return;
        const imageRef = ref(storage, `projects/${name}`);
        await uploadBytes(imageRef, imageUpload);
        const imageUrl = await getDownloadURL(imageRef);
        await addDoc(collection(db, "projects"), {
            name: name,
            description: desc,
            link: link,
            photo: imageUrl
        });
        success();
        resetField();
        setState(state + 1);  // trigger child re-render
        e.target.image.value = null;
    }
    const resetField = () => {
        setName("");
        setDesc("");
        setLink("");
        setImageUpload(null);
    }
    const handleEditSubmit = async (e: any) => {
        if(!currProject) return;
        let imageUrl;
        e.preventDefault();
        if(imageUpload) {
            const imageRef = ref(storage, `projects/${name}`);
            await uploadBytes(imageRef, imageUpload);
            imageUrl = await getDownloadURL(imageRef);
        }
        await setDoc(doc(db, "projects", currProject._id!), {
            name,
            description: desc,
            link,
            photo: imageUrl || currProject.photo
        })
        success();
        resetField();
        setCurrPorject(null);
        setState(state + 1);  // trigger child re-render
        e.target.image.value = null;
    }

    return (
        <div className="mx-4 mb-8 lg:mx-10 xl:mx-14">
            <ProjectList onEdit={editHandler} key={state}/>
            <section>
                <div className="flex mb-4">
                    <h1 className="text-2xl">{ currProject ? "Edit Project" : "Add Project"}</h1>
                    {currProject && 
                        <button
                            onClick={(_) => {
                                resetField();
                                setCurrPorject(null);
                            }}
                            className="text-center mx-3 py-1 px-2 rounded bg-neutral-600"
                        >Add new project</button>}
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    currProject ? handleEditSubmit(e) : handleSubmit(e);
                }}>
                    <div className="mb-5">
                        <label htmlFor="title" className="mb-3 block text-base font-medium">
                            Project Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            className="resize-none w-full rounded-md border border-gray-300 px-3 py-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="desc" className="mb-3 block text-base font-medium">
                            Project Description
                        </label>
                        <textarea
                            rows={3}
                            name="desc"
                            id="desc"
                            className="resize-none w-full rounded-md border border-gray-300 px-3 py-2"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="link" className="mb-3 block text-base font-medium">
                            Project Link
                        </label>
                        <input
                            type="url"
                            name="link"
                            id="link"
                            className="resize-none w-full rounded-md border border-gray-300 px-3 py-2"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="image" className="mb-3 block text-base font-medium">
                            Project Photo
                        </label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            alt="Project Image"
                            onChange={(e) => {
                                if(e.target.files){
                                    setImageUpload(e.target.files[0]);
                                }
                            }}
                            required
                        />
                    </div>
                    <div>
                        <button className="rounded-md bg-neutral-600 py-2 px-4" type="submit">
                            { currProject ? "Edit" : "Add" }
                        </button>
                    </div>
                </form>
            </section>
            { showSuccess && <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-neutral-800 absolute bottom-5 right-5" role="alert">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <div className="ml-3 text-sm font-normal">Updated successfully.</div>
            </div> }
        </div>
    )
}
