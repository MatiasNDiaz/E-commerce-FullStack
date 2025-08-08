

import React from "react"
import Image from "next/image";

export const Main: React.FC = () => {

    return (
        <>
        <h2 className="mt-8 mb-4 bg-blue-700 p-1 text-xl font-bold m-auto w-[100wv] text-center">NOSOTROS</h2>
        <div className="flex flex-row justify-start text-center text-white items-center bg-black  m-auto">
            <Image src="/AndreaniFondito.png" alt="Logo IFor"  width={300} height={200} className="bg-gray-500 w-[580px] ml-10 object-contain  h-[720px]"></Image>
            
            <div className="pt-11 text-white h-[720px]">

            <h2 className="m-auto text-xl text-white w-[330px] p-1 text-center bg-blue-600 ">¿Que hacemos en IFor?</h2>
            <h2 className="pt-10 pl-10 pr-10 text-justify text-white">En IFor Importados, nos dedicamos a la importación directa de productos de alta calidad desde Estados Unidos, con un firme compromiso en ofrecer a nuestros clientes una experiencia de compra confiable, ágil y segura. Cada producto que comercializamos es cuidadosamente seleccionado para garantizar originalidad, buen rendimiento y una excelente relación precio-calidad.

            Sabemos que no alcanza con vender buenos productos: la entrega también tiene que estar a la altura. Por eso, trabajamos en alianza con <span className="text-red">Andreani</span>, una de las empresas logísticas más reconocidas del país, para asegurar que cada pedido llegue a destino en tiempo y forma, y en perfectas condiciones. Utilizamos empaques seguros y verificados, y te ofrecemos seguimiento detallado desde el momento del despacho hasta la llegada a tu domicilio.

            Nos esforzamos por brindar un servicio integral donde la confianza sea el factor principal. Desde el primer clic hasta que recibís tu compra, queremos que sientas la tranquilidad de estar comprando a una empresa seria, responsable y comprometida con la satisfacción del cliente. 
            </h2>
            <div className="flex justify-between text-white w-[878px] m-auto text-center">
                <div className="pt-10 text-white pl-3 pr-3 text-start">
                    <h2 className="ml-7  text-xl w-[330px] p-1 text-center bg-blue-600">¿Por qué elegirnos?🔍</h2>
                   <br /> 
                    <p className="text-white">
                    ✔️ Productos nuevos, originales y revisados. <br />
                    ✔️ Importación directa desde EEUU. <br />
                    ✔️ Seguimiento y entrega segura con Andreani. <br />
                    ✔️ Atención personalizada y soporte postventa.
                    </p>
                </div>
                <div className="pt-10 pl-8 text-white pr-3 text-start ">
                    <h2 className="ml-11 text-xl  text-white w-[330px] p-1 text-center bg-blue-600">¿Y mi producto?🎁</h2>
                    <br />
                    <p className="text-white">
                    Sabemos que un buen producto no sirve de nada si no llega en condiciones.
                    Por eso, confiamos en Andreani, líder en logística a nivel nacional, para que tus compras lleguen:<br />
                    🚚 Rápido En perfectas condiciones.<br /> 
                    🕑 Con seguimiento en tiempo real.<br /> 
                    🎁 Cada envío está empaquetado con cuidado y verificado antes de salir. para que tengas la mejor experiencia de compra.
                    </p>
                    </div>
            </div>
            </div>
            
        </div>
        </>
    )};

export default Main