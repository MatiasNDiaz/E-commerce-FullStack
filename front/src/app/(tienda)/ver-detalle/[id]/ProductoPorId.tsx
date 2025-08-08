"use client"

import React from "react"
import Image from "next/image";
import IProduct from "@/interfaces/IProducts/IProducts.types";
import { useAutenticacionContext } from "@/context/authContext";
import Link from "next/link";
import BotonAñadirCarrito from "@/components/botonAñadirCarrito/BotonAñadirCarrito";
import { motion } from "framer-motion";
import { fadeInZoom, FastslideFromLeft } from "@/components/animaciones/animaciones";
import { FaSignInAlt, FaTag, FaFileAlt, FaDollarSign } from "react-icons/fa";

export const RenderProcutosPorId:React.FC<IProduct> = (product)=>{

    const {id, name, price, image, description} = product
    const productSinDescripcion = {id, name, price, image };
    const {isAuth} = useAutenticacionContext()    

    return(
        <>
        <motion.h2 {...FastslideFromLeft} className="text-white m-auto w-[99vw] shadow-md text-center bg-blue-700 mb-5 pt-1 pb-1 pl-3 pr-3 font-extrabold text-xl " >¡Envío ágil: recibí tu producto entre 2 a 4 días hábiles!</motion.h2>
        <div className="text-white m-auto border-2 shadow-white/30  flex w-[1060px] h-[475px] pl-3 pr-3 overflow-hidden  items-center justify-center text-center rounded-lg  border-3 bg-[rgba(50,52,113,0.72)]">
            
            <motion.div {...fadeInZoom} className="m-3  w-[1100px]">
                <Image src={image} alt="Producto aleatorio" width={440} height={400} className="object-contain  bg-white rounded-xl p-1 mb-3 shadow-black w-[420px] h-[420px] "></Image>
            </motion.div>
            
            <motion.div {...fadeInZoom} className="text-white flex flex-col h-[420px] ml-4 border-2 justify-center items-start p-5 pt-1 rounded-xl mr-3 mb-3 bg-gray-500 text-center">
                <h2 className="pl-3 mt-4 text-xl text-left">
                    <span className="text-black underline text-2xl flex items-center gap-2 font-bold">
                    <FaTag />Producto:
                    </span>
                    {name}
                </h2>

                <h3 className="pl-3 mt-4 text-xl text-start">
                    <span className="text-black underline text-2xl flex items-center gap-2 font-bold">
                    <FaFileAlt /> Descripción: 
                    </span> 
                    {description}
                </h3>

                <h3 className="pl-3 mt-4 text-xl ">
                    <span className="text-black underline text-2xl flex items-center gap-2 font-bold">
                        <FaDollarSign /> Precio:
                    </span>
                    {`$${price}`}
                </h3>

                <section className="flex text-xl flex-row items-center text-white m-auto justify-center mb-3">
                    {isAuth ? (
                        <BotonAñadirCarrito products={productSinDescripcion} />
                    ) : (
                        <h2 className="text-white pb-1 border-b-2 mr-5 border-transparent bg-blue-700 hover:bg-blue-950 transition-all duration-300 rounded-lg pt-1 pl-2 pr-2 text-2xl">
                        <Link href={"/iniciarsesion"} className="flex items-center gap-2">
                            <FaSignInAlt />
                            Iniciar sesión para comprar
                        </Link>
                    </h2>
                    )}
                </section>
            </motion.div>
        </div>
        </>
)}

export default RenderProcutosPorId;
