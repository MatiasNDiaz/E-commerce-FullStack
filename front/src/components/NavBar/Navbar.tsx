"use client"

import React from "react";
import Image from "next/image"
import Link from "next/link"
import { useAutenticacionContext } from "@/context/authContext";
import Swal from 'sweetalert2';
import SkeletonNavbar from "../SkeletonLoading";
import { useCartContext } from "@/context/cartContext";
import { motion } from 'framer-motion';
import { slideFromLeft, slideFromTop, LowslideFromTop } from "../animaciones/animaciones";
import {
    FaHome,
    FaArrowLeft,
    FaLaptop,
    FaHeadphones,
    FaBriefcase,
    FaShoppingCart,
    FaUser,
    FaSignOutAlt,
    FaSignInAlt,
} from "react-icons/fa";
import { MdSmartphone, MdTabletMac, MdWatch } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
// import { GiSmartwatch } from "react-icons/gi";
// import { BsBoxSeam } from "react-icons/bs";

const Navbar: React.FC = () => {

    const {isAuth, resetUserData} = useAutenticacionContext()
    const {ResetearCarrito} = useCartContext()
    
    if (isAuth === null){
        return <SkeletonNavbar/>
    }

    const handleLogout = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Vas a cerrar sesión y salir de la app.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Sesión Cerrada con éxito',
                    text: 'Acabas de cerrar sesión',
                    icon: 'success',
                    showConfirmButton: true
                });
                resetUserData()
                ResetearCarrito()
                setTimeout(() => {
                    location.assign("/home")
                }, 500);
            }
        });
    }

    return(
        <header>
            <motion.section {...slideFromTop} className="flex bg-black items-center justify-between p-3 m-2 h-[17px]">
                <h4 className="text-white ml-7">Envíos rápidos y seguros a cualquier rincón del país.</h4>
                <h4 className="text-white mr-7 flex items-center">Logistica | <Link href={"https://www.andreani.com"} target="_blank" rel="noopener noreferrer">
                <Image src="/AndreaniLogo.png" alt="Andreani" width={100} height={40} />
                </Link></h4>
            </motion.section>
        
            <motion.nav className="text-white flex bg-black items-center justify-between h-[160px] mb-6 m-auto border-t border-b border-gray-200"
            {...slideFromLeft}>
                <Image src="/LogoIForProyecto4.png" alt="Logo IFor" width={300} height={200} className="w-[280px] h-[280px] ml-12 mt-3" />
                <ul className="text-white mt-2 flex items-center justify-between text-xl w-[780px] mr-8">
                    <li className="pb-1 border-b-2 text-xl text-white font-semibold mr-5 border-transparent hover:border-blue-500 transition-all duration-500">
                        <motion.p {...LowslideFromTop}>
                            <Link href={"/home"} className="text-white">
                                <FaHome size={29} className="inline mr-1 text-xl mb-2" />
                                Inicio
                            </Link>
                        </motion.p>
                    </li>

                    <li className="text-white relative bottom-13 mr-5">
                        <motion.div {...LowslideFromTop}>
                            <details className="group">
                                <summary className="cursor-pointer pb-1 list-none text-white font-semibold border-b-2 border-transparent text-xl hover:border-blue-500 transition-all duration-500">
                                    <CgMenuGridO size={29} className="inline mr-1 mb-2" />
                                    Categorías
                                </summary>
                                <ul className="absolute left-0 mt-2 bg-gray-800 text-white rounded-xl shadow-lg flex flex-col space-y-1 z-50 w-[270px]">
                                    <li className="text-white mr-2 ml-2 pr-2 pl-2 pt-2 pb-2 hover:bg-gray-600">
                                        <Link href={"/home"}>
                                            <FaArrowLeft  className="inline mr-2" />
                                            Todos los productos
                                        </Link>
                                    </li>
                                    <li className="text-white mr-2 ml-2 pr-2 pl-2 pt-2 pb-2 border-b hover:bg-gray-600">
                                        <Link href={"/categoria/1"}>
                                            <MdSmartphone className="inline mr-2" />
                                            Telefonos inteligentes
                                        </Link>
                                    </li>
                                    <li className="text-white mr-2 ml-2 pr-2 pl-2 pt-2 pb-2 border-b hover:bg-gray-600">
                                        <Link href={"/categoria/2"}>
                                            <FaLaptop className="inline mr-2" />
                                            Laptops
                                        </Link>
                                    </li>
                                    <li className="text-white mr-2 ml-2 pr-2 pl-2 pt-2 pb-2 border-b hover:bg-gray-600">
                                        <Link href={"/categoria/3"}>
                                            <MdTabletMac className="inline mr-2" />
                                            Tablets
                                        </Link>
                                    </li>
                                    <li className="text-white mr-2 ml-2 pr-2 pl-2 pt-2 pb-2 border-b hover:bg-gray-600">
                                        <Link href={"/categoria/4"}>
                                            <MdWatch className="inline mr-2" />
                                            Relojes inteligentes
                                        </Link>
                                    </li>
                                    <li className="text-white mr-2 ml-2 pr-2 pl-2 pt-2 pb-2 border-b hover:bg-gray-600">
                                        <Link href={"/categoria/5"}>
                                            <FaHeadphones className="inline mr-2" />
                                            Auriculares
                                        </Link>
                                    </li>
                                    <li className="text-white mr-2 ml-2 pr-2 pl-2 pt-2 pb-2 border-b hover:bg-gray-600">
                                        <Link href={"/categoria/6"}>
                                            <FaBriefcase className="inline mr-2" />
                                            Accesorios
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </motion.div>
                    </li>

                    {isAuth ? (
                        <>
                            <li className="text-white pb-1 border-b-2 mr-5 text-xl border-transparent font-semibold hover:border-blue-500 transition-all duration-500">
                                <motion.p {...LowslideFromTop}>
                                    <Link href={"/carrito"} className="text-white">
                                        <FaShoppingCart size={25} className="inline mr-1 mb-2" />
                                        Carrito
                                    </Link>
                                </motion.p>
                            </li>
                            <li className="text-white pb-1 border-b-2 mr-5 text-xl border-transparent font-semibold hover:border-blue-500 transition-all duration-500">
                                <motion.p {...LowslideFromTop}>
                                    <Link href={"/perfil"} className="text-white">
                                        <FaUser size={24} className="inline mr-1 mb-3 " />
                                        Perfil
                                    </Link>
                                </motion.p>
                            </li> 
                            <li className="text-white pb-1 border-b-2 mr-5 text-xl border-transparent font-semibold hover:border-blue-500 transition-all duration-500">
                                <motion.button {...LowslideFromTop} onClick={handleLogout}>
                                    <FaSignOutAlt size={27} className="inline mr-1 mb-2" />
                                    Cerrar sesión
                                </motion.button>
                            </li>
                        </>
                    ) : (
                        <li className="pb-1 border-b-2 mr-5 text-xl border-transparent font-semibold hover:border-blue-500 transition-all duration-500">
                            <motion.p {...LowslideFromTop} className="text-white">
                                <Link href={"/iniciarsesion"} className="text-white">
                                    <FaSignInAlt size={27} className="inline mr-1 mb-2" />
                                    Iniciar sesión
                                </Link>
                            </motion.p>
                        </li>
                    )}
                </ul>
            </motion.nav>
        </header>
    )
};

export default Navbar;
