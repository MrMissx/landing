import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

import { db } from "../../firebase/client";

export default function Main() {
    const [showSuccess, setShowSuccess] = useState(false);
    const success = () => {
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
        }, 2000);
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newBio = e.target.bio.value;
        await updateDoc(doc(db, "main", "1"), { bio: newBio });
        success();
        e.target.bio.value = "";
    }

    return (
        <div className="mx-4 lg:mx-10 xl:mx-14">
            <h1 className="text-2xl mb-4">Edit Bio</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="bio" className="mb-3 block text-base font-medium">
                        New Bio
                    </label>
                    <textarea
                        rows={4}
                        name="bio"
                        id="bio"
                        placeholder="Insert your bio"
                        className="resize-none w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                </div>
                <div>
                    <button className="rounded-md bg-neutral-600 py-2 px-4" type="submit">Submit</button>
                </div>
            </form>
            { showSuccess && <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-neutral-800 absolute bottom-5 right-5" role="alert">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <div className="ml-3 text-sm font-normal">Updated successfully.</div>
            </div> }
        </div>
    )
}
