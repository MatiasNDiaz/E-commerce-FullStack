"use client"
import React from "react"
import { Formik } from "formik";
import * as yup from "yup";
import LoginUserDtoFront from "@/interfaces/LoginDto/Login";
import { LoginSubmit } from "@/services/axiosLogin";
import { useAutenticacionContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2'
import usePublic from "@/hook/usePublic";
import { motion } from 'framer-motion';
import { slideFromLeft, slideFromTop } from "@/components/animaciones/animaciones";
import Link from "next/link";

const loginSchema = yup.object().shape({
    email: yup.string().email("email invalido").required("debe ingresar su email"),
    password: yup.string().required("debe ingresar su contraseña")
});

export const LoginForm: React.FC = () => {
    usePublic()
    const {saveUserData} = useAutenticacionContext()
    const router = useRouter()

    const handleOnSubmit = async (values: LoginUserDtoFront) => {
        try {

            const response = await LoginSubmit(values)
            if (response?.status === 200) {
                
            console.log("este es el response.data: ",response.data);
            
            saveUserData(response.data)
                Swal.fire({
                    icon: "success",      // o "error", "warning", etc.
                    title: "Login exitoso!",
                    text: "Usuario logueado. se te redirigirá al Home en... YA!",
                    timer: 3000,
                    showConfirmButton: true
                })
                .then(()=> router.push("/home"));
                
            }  else {
                Swal.fire({
                    icon: "error",      // o "error", "warning", etc.
                    title: "Erro al loguearte",
                    text: "Datos Incorrectos, intentelo de nuevo",
                    timer: 2000,
                    showConfirmButton: true
                });
            }
            } catch (error) {
            console.log("error", error);
            Swal.fire({
                icon: "warning",      // o "error", "warning", etc.
                title: "Error al Loguearse",
                text: "Hubo un problema al loguearse, intente nuevamente.",
                timer: 2000,
                showConfirmButton: true });
                console.log("error en el register:", error)}
    };

    return (
        <>
        <Formik
            initialValues = {{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={handleOnSubmit}
        >
            {({ isSubmitting, values, handleBlur, handleChange, handleSubmit, errors, touched }) => (
            <motion.form  onSubmit={handleSubmit} className="flex flex-col text-white overflow-hidden items-center justify-center text-center rounded-lg  border-2 bg-bgblue "
            {...slideFromTop}>
                <label htmlFor="email" className="mt-4 text-white font-bold text-2xl">Email:</label>
                    <motion.input  type="email"
                            id="email"
                            name="email" 
                            value={values.email} 
                            onBlur={handleBlur}  
                            onChange={handleChange} 
                            {...slideFromLeft}
                            placeholder="EmailExample@gmail.com" 
                            className="text-black outline-none focus:outline-none inputs mt-1 w-[700px] rounded-lg p-2 "/>
                <p className="text-xl text-red-500 mb-4">{errors.email && touched.email && errors.email}</p>
                <label  htmlFor="password" className="font-bold text-white text-2xl">Contraseña:</label>
                    <motion.input  type="password" 
                            id="password"
                            name="password" 
                            placeholder="●●●●●●●●●●●" 
                            value={values.password}
                            onBlur={handleBlur}  
                            onChange={handleChange}
                            {...slideFromLeft} 
                            className="text-black outline-none focus:outline-none inputs mt-1 w-[700px] rounded-lg p-2 "
                    />
                    <p className="text-xl text-red-500 mb-4">{errors.password && touched.password && errors.password}</p>
                <button type="submit" disabled={isSubmitting} className=" mb-2 pl-4 pr-4 pt-2 pb-2 text-2xl bg-blue-700 rounded-lg w-[200px] text-white font-bold hover:bg-blue-950 transition duration-300">Enviar</button>

                <div className="flex flex-row m-auto w-[700px] text-white mt-2 mb-4 text-center justify-between items-start">
                    <Link href={"/register"} className="w-[280px] rounded-md text-center mb-4  pl-2 pr-2 mt-2 text-white font-bold text-lg bg-purple-800 hover:bg-purple-950 transition duration-300" >¡Ir a registrarte!</Link>
                        <Link href={"/home"} className="rounded-md text-center  w-[266px]  pl-1 pr-1 mt-2 text-lg font-bold text-white bg-blue-700 hover:bg-blue-950 transition duration-300">volver al Home</Link>
                </div>
            </motion.form>
            )}
        </Formik>
            </>
    )
}

export default LoginForm