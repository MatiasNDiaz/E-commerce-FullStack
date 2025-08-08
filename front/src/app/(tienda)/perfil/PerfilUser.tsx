"use client"


import React, { useEffect, useState } from "react"
import { useAutenticacionContext } from "@/context/authContext"
import OrdernesUser from "./OrdenesUser"
import IOrder from "@/interfaces/IOrder/IOrder"
import usePrivate from "@/hook/usePrivate"
import { GetOrderUser } from "@/services/axiosOrdenesUser"
import { motion } from "framer-motion"
import { slideFromLeft, slideFromRight } from "@/components/animaciones/animaciones"


const PerfilUser:React.FC = () => {
  usePrivate()
  const {user, token} = useAutenticacionContext();
  const [orders, setOrders] = useState<IOrder[]>();

  // Funcion Consumir las Ordenes del usuario y mostrarlas:
  console.log("estas son las ordenes: ", orders);
  
  useEffect(()=>{
    const request = async ()=>{
      try {
        const order = await GetOrderUser(token!)
        setOrders(order)
      } catch (error) {
        console.warn("Error al traerte las ordenes", error);
      }
    };

    if(token){
      request()
    }
  },[token])

  return (
    <>
      <motion.h2 {...slideFromRight} className="text-white m-auto w-[100vw] shadow-md text-center bg-blue-700 pt-1 pb-1 pl-3 pr-3 text-xl font-extrabold">¡Bienvenido/a: {user?.name}!</motion.h2>

      <div className="text-white mt-3 m-auto rounded-xl w-[93vw]  pt-4 p-5">


      <motion.div {...slideFromLeft} className="bg-white rounded-xl p-3 pt-3 w-[500px] m-auto shadow-[0_0_40px_rgba(0,0,0,0.6)]">
        <h2 className="text-2xl font-bold text-white text-center mb-2 bg-blue-700 pt-1 pb-1 pl-3">Tus datos:</h2>
        <ul>
          <li className="font-bold text-lg border-b-2 border-gray-400 pt-2 text-gray-700 mb-2 p-1"><span className="text-black font-bold">Nombre: </span>{user?.name}</li>
          <li className="font-bold text-lg border-b-2 border-gray-400 pt-2 text-gray-700 mb-2 p-1"><span className="text-black font-bold">Email: </span> {user?.email}</li>
          <li className="font-bold text-lg border-b-2 border-gray-400 pt-2 text-gray-700 mb-2 p-1"><span className="text-black font-bold">Dirección: </span>{user?.address}</li>
          <li className="font-bold text-lg border-b-2 border-gray-400 pt-2 text-gray-700 mb-2 p-1"><span className="text-black font-bold">Numero de Telefono: </span>{user?.phone}</li>
          <li className="font-bold text-lg  border-gray-600 pt-2  text-gray-700 mb-1 p-1"><span className="text-black font-bold">Rol: </span>{user?.role}</li>
        </ul>
      </motion.div>

        <motion.h2 {...slideFromRight} className="text-white m-auto w-full mt-6 shadow-md text-center bg-blue-700 mb-5 pt-1 pb-1 pl-3 pr-3 text-xl font-extrabold">¡Ordenes Recientes! </motion.h2>

        {orders ?
        orders?.map((ordenes,indx)=>{
                    return <OrdernesUser key={indx} products={ordenes.products} status={ordenes.status} date={ordenes.date} />
                })

        : <h2>No has comprado nada aun</h2>}
    </div>
  </>

)}

export default PerfilUser