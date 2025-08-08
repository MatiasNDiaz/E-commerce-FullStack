"use client"

import Image from "next/image";
import IProduct from "@/interfaces/IProducts/IProducts.types";



export const RenderOrders:React.FC<IProduct> = ({image, name, price})=>{


    return(
        <div className=" flex flex-row overflow-hidden items-center justify-start text-center rounded-lg  border">
            <Image src={image} alt="Producto aleatorio" width={340} height={100} className="ml-4 object-contain  bg-white rounded-xl p-1 m-5 mb-3 shadow-md shadow-black w-[220px] justify-center items-center text-center h-[220px] "></Image>
            <div className="p-3 pt flex-col items-center text-white justify-center text- mt-11 ml-11"> 
            <h2 className="text-white text-2xl mt*10">{name}</h2>
            <h3 className="text-white mt-1 mr-2 text-2xl">{`$${price}`}</h3>
            <button className="text-white mt-10  pl-3 pr-3 pt-2 pb-2 bg-gray-600 rounded-xl">eliminar</button>
            </div>
        </div>
)};

export default RenderOrders;