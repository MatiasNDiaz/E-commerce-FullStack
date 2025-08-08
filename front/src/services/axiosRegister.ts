
import axios from "axios";
import RegisterUserDtoFront from "@/interfaces/RegisterDto/Register";


const axiosRegisterPost = axios.create({
    baseURL: process.env.NEXT_PUBLIC_POST_CREDENCIALES_BACK
})

export const RegisterSubmit = async (data:  RegisterUserDtoFront) => {
    try {
        const PostRegister = await axiosRegisterPost.post("/register", data)
        return PostRegister
    } catch (error) {
        console.error("Ocurrio un error al Realizar el Register",error);
    }
}