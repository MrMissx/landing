import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";

import { AdminContext } from "../../context/adminContext";
import { auth } from "../../firebase/client";

export default function Login() {
    const router = useRouter();
    const { user } = useContext(AdminContext);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        if (user) {
            router.push("/admin");
        }
    }, [router, user]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email = e.target.email?.value;
        const password = e.target.password?.value;
        try{
            await signInWithEmailAndPassword(auth, email, password);
        } catch (_) {
            setFailed(true);
            return;
        }
        router.push("/admin");
    }

    return (
        <section>
            <div className="max-w-full sm:max-w-4xl mx-auto h-screen flex items-center">
                <form 
                    className="w-full sm:w-[250px] mx-auto flex flex-col rounded-md"
                    onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" className="px-3 py-2.5 mb-3 border-2 border-gray-800 rounded-md" id="email" />
                    <input type="password" placeholder="Password" className="px-3 py-2.5 border-2 border-gray-800 rounded-md" id="password" />
                    <button className="px-2 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white mt-3" type="submit">Login</button>
                    {failed && <p className="text-red-600 text-center">Invalid credentials</p>}
                </form>
            </div>
        </section>
    );
}