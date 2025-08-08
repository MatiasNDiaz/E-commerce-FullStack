"use client"

import IUsers from "@/interfaces/IUsers/IUsers";
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
// import { useCartContext } from "./cartContext";

interface AuthContextType {
    user: IUsers | null;
    isAuth: boolean | null;
    token: string | null,
    saveUserData: (data: {user: IUsers, token: string}) => void;
    resetUserData: () => void
}

// El contexto o Listado:
const AutenticacionContext = createContext<AuthContextType | undefined>(undefined);

// La Bodega donde se encuentran las Funciónes:
export const AutenticacionProvider = ({children} : {children: ReactNode}) => {

    const [ user, setUser ] = useState<AuthContextType["user"]>(null)
    const [ token, setToken ] = useState<string | null>(null)
    const [ isAuth, setIsAuth ] = useState<AuthContextType["isAuth"]>(null)

    useEffect(() => {
        const storage = JSON.parse((localStorage.getItem("user") || "{}"))
        if(storage === undefined || !Object.keys(storage)?.length) {
            setIsAuth(false)
            return;
        }
        setUser(storage.user)
        setIsAuth(true)
        setToken(storage.token)
    },[]);

    // funciones / acciones:
    const saveUserData = (data: {user: IUsers, token: string}) => {
        // console.log("este es el saveUserData: ", data);
        setUser(data.user)
        setIsAuth(true)
        setToken(data.token)
        
        localStorage.setItem("user", JSON.stringify(data))
    };

    const resetUserData = () => {
        setUser(null);
        setToken(null);
        setIsAuth(false);
        localStorage.removeItem("user");
    };


    // con un useEffect obetenemos los datos del LocalStorage y cargamos el estado inicial de nuestros estados de Reactr 
    // Anotamos las cosas que van a estar en el Contexto
    const values = {
        saveUserData,
        resetUserData,
        user,
        token,
        isAuth
    }

    return(
        <AutenticacionContext.Provider value={values}>
            { children }
        </AutenticacionContext.Provider>  
)};


// creamos el Custom Hook:
export const useAutenticacionContext = () => {
    const context = useContext(AutenticacionContext);

    if(!context) {
        throw new Error("UseAutenticacionContext debe usarse dentro de un AutenticacionProvider");
        
    }
    return context;
};