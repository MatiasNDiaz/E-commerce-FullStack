

import axios from "axios";
import LoginUserDtoFront from "@/interfaces/LoginDto/Login";
const axiosLoginPost = axios.create({
    baseURL: process.env.NEXT_PUBLIC_POST_CREDENCIALES_BACK
})

export const LoginSubmit = async (data: LoginUserDtoFront) => {
    try {
        const PostLogin = await axiosLoginPost.post("/login", data)
        return PostLogin
    } catch (error) {
        console.error("Ocurrio un error al Loguearse",error);
    }
}