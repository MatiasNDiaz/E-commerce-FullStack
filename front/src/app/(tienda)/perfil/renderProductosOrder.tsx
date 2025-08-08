
import React from "react";
import IProduct from "@/interfaces/IProducts/IProducts.types";
import Image from "next/image";

interface Props {
    products: IProduct;
}

const RenderProductsOrder: React.FC<Props> = ({ products }) => {
    return (
    <div className="p-2 mb-4 flex flex-col items-center justify-between rounded-xl text-center w-[320px] bg-gray-400 ">
        <Image src={products.image} alt="Producto aleatorio" width={200} height={100} className="bg-white mt-2 rounded-xl object-cover" />
      <h2 className="text-xl text-white text-center bg-blue-700 pl-2 pr-2 mt-3  font-bold rounded-md w-full">Producto: {products.name}</h2> {/* O lo que quieras mostrar */}
      <h2 className="text-lg text-white text-center mt-1 bg-gray-600 pl-4 pr-4  rounded-md w-full">${products.price}</h2> {/* O lo que quieras mostrar */}
    </div>
);
};

export default RenderProductsOrder;