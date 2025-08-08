"use client"

import Image from "next/image";
import { useAutenticacionContext } from "@/context/authContext";
import IProduct from "@/interfaces/IProducts/IProducts.types";
import Link from "next/link";
import BotonAñadirCarrito from "@/components/botonAñadirCarrito/BotonAñadirCarrito";
import { motion } from 'framer-motion';
import { slideUpFade } from "@/components/animaciones/animaciones";

export const RenderProcutosHome:React.FC<IProduct> = (product)=>{
    const {id, name, price, image} = product

    const {isAuth} = useAutenticacionContext()   

    const getLink = (id: IProduct["id"]) => {
        return `/ver-detalle/${id}`};

    return(
        <motion.div className="m-5 text-white  w-[284px] h-[365px] flex flex-colum overflow-hidden items-center justify-center  text-center rounded-lg  border-2 bg-gray-500"
        {...slideUpFade}>
            <div className="p-3 pt-3 text-white"> 
            <Image src={image} alt="Producto aleatorio" width={340} height={100} className="ml-5 object-contain   bg-white rounded-xl p-1  mt-8 mb-3 shadow-md shadow-black w-[220px] justify-center items-center text-center h-[220px] "></Image>
            <h2 className="text-2xl text-white">{name}</h2>
            <h3 className="mt-1 mr-2 text-2xl text-white">{`$${price}`}</h3>
            
            <section className="flex text-white flex-row w-[256px] text-center items-center justify-center mt-2 mb-5 pb-3 ">
            
            { isAuth ? 
                <>
                    <Link href={getLink(id)} className="no-underline text-white-900 mr-2 pt-1 pb-1 text-white pl-2 pr-2 transition-all duration-300 bg-gray-800 hover:bg-gray-950  rounded-lg">ver detalle</Link> 
                    <BotonAñadirCarrito products={product}/>
                </> :  
            <Link href={getLink(id)} className="no-underline text-white-900  pt-1 pb-1 pl-2 text-white pr-2 transition-all duration-300 bg-gray-800 hover:bg-gray-950  rounded-lg">ver detalle</Link>
            }
            
            </section>
            </div>
        </motion.div>
)};

export default RenderProcutosHome;