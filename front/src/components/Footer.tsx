import React from "react"
import Image from "next/image"

const Footer: React.FC = () => {

    return(
        <div className="flex mt-5 justify-around p-8 m-auto w-[99vw]  bg-black items-center bg-black-600 text-center rounded-r">
            <div className="  text-start">
                <h2>pagina creada por Diaz Matias.</h2>
                <h2>© 2025 IFor importados. Todos los derechos reservados.</h2>
            </div>
            <div className="relative inline-block mr-12 mb-10">
                <details className="relative group">
                <summary className="cursor-pointer pb-1 text-white border-b-2 border-transparent hover:border-blue-500 transition-all duration-500">
                Redes Sociales
                </summary>
                <ul className="absolute flex justify-between w-[400px] border-2 bg-gray-900 z-10 mt-2 p-2 shadow-lg rounded ">
                    <li className="flex items-center mb-2 mt-2 text-white">
                        <Image alt="Instagram" width={30} height={20} src="/instagram (1).png" />
                        <a href="https://www.instagram.com/ifor.ok/" target="_blank" rel="noopener noreferrer" className="ml-2 text-white">
                        Instagram
                        </a>
                    </li>
                    <li className="flex items-center mb-2 mt-3 text-white">
                        <Image alt="WhatsApp" width={30} height={20} src="/whatsapp.png" />
                        <a href="https://wa.me/5493718603926?text=Hola buenos dias!" target="_blank" rel="noopener noreferrer" className="ml-2 text-white">
                        WhatsApp</a>
                    </li>
                    <li className="flex items-center mb-2 mt-2 text-white">
                        <Image alt="WhatsApp" width={30} height={20} src="/gmail.png" />
                        <a href="https://wa.me/5493718603926?text=Hola buenos dias!" target="_blank" rel="noopener noreferrer" className="ml-2 text-white">
                        Email</a>
                    </li>
                </ul>
                </details>
            </div>
        </div>
)
};

export default Footer