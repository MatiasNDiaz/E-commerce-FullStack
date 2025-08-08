"use client"

import { useCartContext } from "@/context/cartContext"
import RenderProductsCarrito from "./RenderProductsCarrito"
import React from "react"
import usePrivate from "@/hook/usePrivate"
import BotonCompraFinal from "@/components/botonRealizarCompra/ComprarProductos"
import { motion } from "framer-motion"
import { slideFromTop, slideFromLeft, slideFromRight } from "@/components/animaciones/animaciones"

const CarritoUser:React.FC = () => {
  usePrivate()
  const {total, cart} = useCartContext()


    const sacarTotal = () => {
        const total = cart.reduce((acumulador, numero) => acumulador + Number(numero.price), 0);
        return total
    }

    // solo decoracion
    const totalConDescuento = sacarTotal() * 0.75;
    
  return (
    <>
      { total === 0 ? <motion.h2 {...slideFromLeft} className="font-bold text-2xl text-center p-11 bg-blue-800 w-[1200px] m-auto">AUN NO HAS AGREGADO NINGÚN PRODUCTO!.</motion.h2> 
        : <div className=" flex justify-start ml-11">

      <motion.div {...slideFromTop} className="bg-bgblue w-[787px] text-white mr-11 p-2 pt-5 rounded-xl ">
        {cart.map((product, index) => {
          return <RenderProductsCarrito key={index} id={product.id} name={product.name} image={product.image}  price={product.price} description={product.description}/>})
        } 
      </motion.div>

      <motion.div {...slideFromRight} className="flex flex-col justify-evenly bg-white w-[480px] h-[300px] shadow-2xl shadow-black  rounded-xl  p-2 pl-3 pr-3 mt-1">
          <h2 className="text-start pl-3 text-blue-700 text-2xl font-bold border-b-gray-400 border-b-2 pb-5 pt-3 "> Total: ${sacarTotal()}</h2>
          <h2 className="text-start pl-3 text-gray-600  text-xl font-semibold  border-b-gray-400 border-b-2 pb-5 pt-6" >Descuento: ${totalConDescuento}</h2>
          <h2 className="text-start pl-3 text-green-700  text-lg font-bold pb-3 pt-6">Envio: Gratis</h2>
          <BotonCompraFinal/>
      </motion.div>


    </div>
    }
    </>
)}

export default CarritoUser