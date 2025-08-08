import React from "react"
import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {

    return (
        <>
        <div className="flex flex-row justify-between w-[970px] h-[220px] items-center text-white bg-black ">
            <Image src="/LogoIForProyecto4.png" alt="Logo IFor"  width={350} height={200} className="w-[350px] text-white mt-11 pt-2 ml-11"></Image>
            <h1 className="text-white pt-11 mt-4 text-2xl font-bold">¡BIENVENIDO A iFOR IMPORTADOS!</h1>
        </div>
            <Link href={"/home"} className="block mx-auto text-white font-bold mb-11 w-[200px] rounded-xl text-center m-auto  pt-2 pb-2 pl-5 pr-5 bg-blue-600 text-2xl transition-colors duration-300 hover:bg-blue-950">
                Comenzar</Link>
            <h2 className=" mb-4 bg-blue-700 text-white p-1 text-xl font-bold  m-auto w-[100wv] text-center">MAS VENDIDOS DE LA SEMANA</h2>
        </>
    )};

export default Header