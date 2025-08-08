"use client"
import React from "react"
import { Formik } from "formik";
import * as yup from "yup";
import RegisterUserDtoFront from "@/interfaces/RegisterDto/Register"
import { RegisterSubmit } from "@/services/axiosRegister";
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import usePublic from "@/hook/usePublic";
import { motion } from 'framer-motion';
import { slideFromLeft, slideFromTop } from "@/components/animaciones/animaciones";
import Link from "next/link";


const RegisterErrors = yup.object().shape({
    name: yup.string().required("debe ingresar su Nombre"),
    address: yup.string().required("debe ingresar su Dirección"),
    phone: yup.string().required("debe ingresar su Numero de telefono"),
    email: yup.string().email("email invalido").required("debe ingresar su email"),
    password: yup.string().required("debe ingresar su contraseña")
})

const RegisterForm: React.FC = () => {
    usePublic()
    const router = useRouter();

    const handleOnSubmit = async (values: RegisterUserDtoFront) => {
        try {
            const response = await RegisterSubmit(values)
            if (response?.status === 201) {
            Swal.fire({
                icon: "success",      // o "error", "warning", etc.
                title: "¡Registrado!",
                text: "Usuario registrado. se te redirigirá al Login en... YA!",
                timer: 3000,
                showConfirmButton: true
            })
            .then(()=> router.push("/login"));

        } else {
            Swal.fire({
                icon: "error",      // o "error", "warning", etc.
                title: "Dato repetido",
                text: "Ingresa un valor distinto en Email.",
                timer: 2000,
                showConfirmButton: true
            });
        }
    } catch (error) {
        Swal.fire({
                icon: "warning",      // o "error", "warning", etc.
                title: "Error al registrarse",
                text: "Hubo un problema al querer registrarse.",
                timer: 2000,
                showConfirmButton: true
            });
        console.log("error en el register:", error);
    }
    };

    return (
        <>
        <Formik
            initialValues = {{name:"", address:"", phone:"", email: '', password: '' }}
            validationSchema={RegisterErrors}
            onSubmit={handleOnSubmit}
            >
            {({ isSubmitting, values, handleBlur, handleChange, handleSubmit, errors, touched }) => (
                    
                    <motion.form  onSubmit={handleSubmit} className="flex  text-white flex-col border-2 overflow-hidden items-center justify-center text-center rounded-lg h-[680px]  bg-bgblue"
                    {...slideFromTop}>
                        <label htmlFor="name" className="mt-5 font-bold text-white text-2xl pt-5">Nombre:</label>
                        <motion.input  type="text" 
                                id="name" 
                                name="name" 
                                placeholder="JhonDoe" 
                                value={values.name} 
                                onBlur={handleBlur}  
                                onChange={handleChange}
                                className="text-black outline-none focus:outline-none inputs mt-1 w-[700px] rounded-lg p-1.5"
                                {...slideFromLeft}/>
                            <p className="text-xl text-red-500 mb-4">{errors.name && touched.name && errors.name}</p>
                                
                        <label htmlFor="address" className="font-bold text-white text-2xl">Dirección:</label>
                        <motion.input  type="text" 
                                id="address" 
                                name="address" 
                                placeholder="pepito426" 
                                value={values.address} 
                                onBlur={handleBlur}  
                                onChange={handleChange}
                                {...slideFromLeft}
                                className="text-black outline-none focus:outline-none inputs mt-1 w-[700px] rounded-lg p-1.5"/>
                            <p className="text-xl text-red-500 mb-4">{errors.address && touched.address && errors.address}</p>

                        <label htmlFor="phone" className="font-bold text-white text-2xl">Telefono:</label>
                        <motion.input  type="text" 
                                id="phone"  
                                name="phone" 
                                placeholder="3515097178" 
                                value={values.phone}
                                onBlur={handleBlur}  
                                onChange={handleChange}
                                {...slideFromLeft} 
                                className="text-black outline-none focus:outline-none inputs mt-1 w-[700px] rounded-lg p-1.5"/>
                            <p className="text-xl text-red-500 mb-4">{errors.phone && touched.phone && errors.phone}</p>
                        
                        <label htmlFor="email" className="font-bold text-white text-2xl">Email:</label>
                            <motion.input  type="email"
                                id="email"
                                name="email" 
                                value={values.email} 
                                onBlur={handleBlur}  
                                onChange={handleChange}
                                {...slideFromLeft} 
                                placeholder="EmailExample@gmail.com" 
                                className="text-black outline-none focus:outline-none inputs mt-1 w-[700px] rounded-lg p-1.5"/>
                            <p className="text-xl text-red-500 mb-4">{errors.email && touched.email && errors.email}</p>
                        
                        <label htmlFor="password" className="font-bold text-white text-2xl">Contraseña:</label>
                            <motion.input  type="password" 
                                    id="password"
                                    name="password" 
                                    placeholder="●●●●●●●●●●●" 
                                    value={values.password}
                                    onBlur={handleBlur}  
                                    onChange={handleChange}
                                    {...slideFromLeft} 
                                    className="text-black outline-none focus:outline-none inputs mt-1 w-[700px] rounded-lg p-1.5 "
                            />
                            <p className="text-xl text-red-500 mb-4">{errors.password && touched.password && errors.password}</p>
                        <button type="submit" disabled={isSubmitting} className="mb-2 pl-4 pr-4 pt-2 pb-2 text-2xl bg-blue-700 rounded-lg font-bold w-[200px] hover:bg-blue-950 transition duration-300">Enviar</button>
                        
                        <div className="flex flex-row m-auto w-[700px] mt-2 mb-8 text-center justify-between text-white items-start">
                        <Link href={"/login"} className="w-[280px] rounded-md text-center mb-4  pl-2 pr-2 mt-2 text-white font-bold text-lg bg-purple-800 hover:bg-purple-950 transition duration-300" >¡Ir a loguearte!</Link>
                        <Link href={"/home"} className="rounded-md text-center  w-[266px]  pl-1 pr-1 mt-2 text-lg text-white font-bold bg-blue-700 hover:bg-blue-950 transition duration-300">volver al Home</Link>
                        </div>
                    </motion.form>
                    )}
                </Formik>
        </>
)}

export default RegisterForm