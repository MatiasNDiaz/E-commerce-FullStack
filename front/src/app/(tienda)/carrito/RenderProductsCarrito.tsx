"use client";

import { useCartContext } from "@/context/cartContext"
import IProduct from "@/interfaces/IProducts/IProducts.types"
import Image from "next/image"
import { motion } from "framer-motion";
import { slideFromLeft, SlowslideFromLeft } from "@/components/animaciones/animaciones";
import Swal from "sweetalert2"

const RenderProductsCarrito: React.FC<IProduct> = ({id, name, price, image }) => {

    const {EliminarElementos, total } = useCartContext()
    // console.log("Este es el CartContext: ", CartContext);


    const EliminarProductos = (id: number) => async () => {
    EliminarElementos(id);
    await Swal.fire({
        icon: "success",
        title: "Producto eliminado!",
        text: "Se borró el producto de tu carrito!",
        timer: 1200,
        showConfirmButton: false
    });
};


    return (
    <>
    <div className="flex w-[747px] items-end justify-start border-3 pb-2 pt-2 pl-2 bg-gray-300 rounded-lg m-3 ">
            <Image src={image} width={230}
            height={220} alt="Imagen del producto en tu carrito" className="w-[250px] m-3 rounded-lg text-white  bg-white h-[170px] object-contain "></Image>

            <motion.div {...slideFromLeft} className="flex flex-col w-[500px] mb-5 pt-5  bg-gray-300 text-white items-center p-2 rounded-xl justify-center text-start  pr-3">
                <h2 className=" text-2xl text-center text-white bg-blue-700 pl-4 pr-4 pt-1 pb-1  font-bold rounded-md w-full">{name}</h2>
                <h3 className=" text-xl text-center text-white mt-3 bg-gray-500 pl-4 pr-4 pt-1 pb-1 rounded-md w-full">${price}</h3>
                
                <motion.button 
                disabled={total === 0}
                onClick={EliminarProductos(id)}
                {...SlowslideFromLeft}
                className="bg-red-700 hover:bg-red-950 transition-all duration-300 pr-10 pl-10 pb-2 pt-2 rounded-xl mt-4 mb-1 font-bold">Eliminar</motion.button>
            </motion.div>
    </div>
    </>
)}

export default RenderProductsCarrito