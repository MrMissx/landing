import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";

import { auth } from "../../firebase/client";
import { AdminContext } from "../../context/adminContext";

import Main from "../../components/admin/Main";
import About from "../../components/admin/About";
import Project from "../../components/admin/Project";


export default function Dashboard() {
    const router = useRouter();
    const { user } = useContext(AdminContext);
    const [ active, setActive ] = useState("main");
    const [ hidden, setHidden ] = useState(false);
    const [ logOut, setLogOut ] = useState(false);

    useEffect(() => {
        if(logOut) return;
        if(!user){
            router.push("/admin/login")
        }
    }, [router, user, logOut]);

    const getPage = (): JSX.Element => {
        switch (active) {
            case "main":
                return <Main />;
            case "about":
                return <About />;
            case "project":
                return <Project />;
            default:
                return <Main />;
        }
    }

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
                <div className="flex items-center flex-no-shrink text-white mr-6">
                    <h1 className="font-semibold text-xl tracking-tight">Dashboard</h1>
                </div>
                <div className="block lg:hidden" onClick={(e) => {
                    e.preventDefault();
                    setHidden(!hidden);
                }}>
                    <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                        <svg fill="white" className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`${hidden ? "" : "hidden"} w-full block flex-grow lg:flex lg:items-center lg:w-auto`} >
                    <div className="text-sm lg:flex-grow">
                        <p
                            onClick={() => setActive("main")}
                            role="button"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                            Main Page
                        </p>
                        <p
                            onClick={() => setActive("about")}
                            role="button"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                            About
                        </p>
                        <p
                            onClick={() => setActive("project")}
                            role="button"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                            Projects
                        </p>
                    </div>
                    <div>
                        <button 
                            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
                            onClick={(e) => {
                                e.preventDefault();
                                setLogOut(true);
                                signOut(auth);
                                router.push("/")
                            }}
                        >Sign Out</button>
                    </div>
                </div>
            </nav>
            <div className="container">
                {getPage()}
            </div>
        </>
    );
}
