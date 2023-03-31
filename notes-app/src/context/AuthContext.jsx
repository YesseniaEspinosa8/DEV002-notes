import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase"
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState(null)
    const [userLoading, setUserLoading] = useState(true)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserLogin(user)
                navigate("/Home")
                
            } else{
                setUserLogin(null)
            }
            setUserLoading(false)
        });
    }, [])

    const login = async () => {
        const googleProvider = new GoogleAuthProvider();
        await signInWithPopup(auth, googleProvider);
};

const cerrarSesion = () => {
    signOut(auth)
}
    return (
        <AuthContext.Provider value={{ login,userLogin,cerrarSesion,userLoading}}>{children}</AuthContext.Provider>
    );

}