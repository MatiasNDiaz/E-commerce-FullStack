"use client"

import { useAutenticacionContext } from "@/context/authContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react";

const usePublic = () => {
    const {isAuth} = useAutenticacionContext()
    const route = useRouter()

    useEffect(() => {
        if (isAuth) {
        route.push("/home");
    }

    },[isAuth, route]);

    return null
};

export default usePublic