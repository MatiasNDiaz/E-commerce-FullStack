"use client"

import React from "react"
import IOrder from "@/interfaces/IOrder/IOrder";
import RenderProductsOrder from "./renderProductosOrder";
import { motion } from "framer-motion"
import { slideUpFade, SlowslideFromLeft, slideFromLeft } from "@/components/animaciones/animaciones"
import { DateTime } from "luxon";

const OrdernesUser: React.FC<IOrder> = ({status, products, date}) => {

    // const fechaFormateada = DateTime.fromISO(date).toFormat("dd / MM / yyyy  HH:mm");
    const fecha = DateTime.fromISO(date).toFormat("dd/MM/yyyy");
    const hora = DateTime.fromISO(date).toFormat("HH:mm");

    return (
        <>
        <motion.div {...slideUpFade} className="rounded-xl mb-4">
            <div className="text-white pl-5 flex rounded-xl rounded-b-none flex-col w-full pt-6 items-start text-start bg-bgblue justify-start">
            <motion.h2 {...SlowslideFromLeft} className="text-white mr-11 text-lg mb-4 font-semibold">Fecha de Compra: <span className=" text-white rounded-lg  bg-blue-700 pl-2 pr-2 pt-1 pb-1">{`comprado el: ${fecha} a las: ${hora}`} hs.</span>
            </motion.h2>
            <motion.p {...slideFromLeft} className="text-white text-lg mb-1 font-semibold">Estado de la orden: <span className=" text-white rounded-lg  bg-green-700 pl-2 pr-2 pt-1 pb-1">{status}</span> </motion.p>

            </div>

            <div className="text-white bg-bgblue flex flex-wrap p-5 pb-2 gap-5 rounded-xl rounded-t-none  ">
            {products.map((producto,i)=>{
                return <RenderProductsOrder key={i} products={producto}/>
            })}

            </div>
            </motion.div>
        </>
)
};

export default OrdernesUser