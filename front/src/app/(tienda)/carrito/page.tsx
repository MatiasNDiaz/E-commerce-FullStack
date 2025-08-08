import CarritoUser from "./CarritoUser"
import React from "react"

const Carrito: React.FC = () => {
    
    return (
    <>
        <h2 className="m-auto w-[100vw] shadow-md text-center text-white bg-blue-700 mb-5 pt-1 pb-1 pl-3 pr-3 text-xl font-extrabold ">Tu carrito de compras!</h2>
        <CarritoUser/>
    </>
    
)}

export default Carrito