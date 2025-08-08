import React from "react"
import Link from "next/link"

export const IniciarSesionMaqueta: React.FC = () => {

    return(
        <>
            <div className="flex flex-col  mt-11 m-auto ">
                <h2 className="m-auto w-[99vw] text-white shadow-md text-center font-extrabold  bg-blue-700  pt-1 pb-1 pl-3 pr-3 mt-11 text-xl">¿A donde quieres ir?</h2>
                <div className="flex flex-col rounded-lg w-[700px] mt-5 text-white m-auto items-center justify-between text-center pb-7 bg-white">
                    <Link href={"/login"} className="m-auto w-[650px] rounded-xl font-bold shadow-md text-center bg-blue-600 hover:bg-blue-950 transition text-white duration-300 mb-5 pt-1 pb-1 pl-3 pr-3 mt-11 text-2xl ">loguearme</Link>
                    <h2 className="text-gray-500 text-lg font-semibold">Ó</h2>
                    <Link href={"/register"} className="m-auto w-[650px] shadow-md text-white font-bold rounded-xl text-center bg bg-blue-600 hover:bg-blue-950 transition duration-300 mb-5 pt-1 pb-1 pl-3 pr-3 mt-5 text-2xl ">registrarme</Link>
                    <div className="w-[650px] h-[2px] bg-gray-400 text-center my-4 rounded-lg"></div>
                    <Link href={"/home"} className="m-auto w-[220px] shadow-md text-xl text-white rounded-xl text-center bg-blue-700 hover:bg-blue-950 transition duration-300  pt-1 pb-1 pl-3 pr-3 mt-5 ">volver al Home</Link>
                </div>
            </div>
        </>
)}

export default IniciarSesionMaqueta