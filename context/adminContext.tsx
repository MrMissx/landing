import { createContext, useEffect, useState } from 'react';
import type { PageProps, AdminContextProps } from "../models/types";
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from "../firebase/client";

export const AdminContext = createContext<AdminContextProps>({
    user: null,
});

export default function AdminProvider({ children }: PageProps) {
    const [user, setUser] = useState<any>(null);
    onAuthStateChanged(auth, (user) => {
        setUser(user);
    });

    useEffect(() => {
        if(auth.currentUser) {
            setUser(auth.currentUser)
        }
    }, []);


    return (
        <AdminContext.Provider value={{ user }}>
            {children}
        </AdminContext.Provider>
    )
}