"use client"

import { useAutenticacionContext } from "@/context/authContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react";

const usePrivate = () => {
    const {isAuth} = useAutenticacionContext()
    const router = useRouter()

    useEffect(() => {
        if (!isAuth) {
        router.push("/home");
    }

    },[isAuth, router]);

    return null
};

export default usePrivate