
import { useCartContext } from "@/context/cartContext";
import IProduct from "@/interfaces/IProducts/IProducts.types";
import React from "react";
import Swal from "sweetalert2"
import Link from "next/link";
import {
    FaShoppingCart,
} from "react-icons/fa";


const BotonAñadirCarrito = ({products} : {products:IProduct})=>{

    const {AgregarElementos, ProductoEnCarrito} = useCartContext()

    const FuncionAgregar = () => {
        AgregarElementos(products);
        Swal.fire({
                    icon: "success",      // o "error", "warning", etc.
                    title: "Producto añadido con exito!",
                    text: "Tu producto fue añadido a tu carrito de compras!",
                    timer: 1000,
                    showConfirmButton: true
                })
    };
    
    if(ProductoEnCarrito(Number(products.id))){
        return(
            <div>
            <button
            className="bg-gray-300 hover:bg-gray-600 transition-all duration-300 text-black pt-1 pb-1 pl-2 pr-2 ml-1 rounded-lg"><Link href={"/carrito"}><FaShoppingCart size={20} className="inline mr-2" />ya en tu carrito</Link></button>
        </div>
        )
    }

    return(
        <div>
            <button
            onClick={FuncionAgregar}
            className="text-white bg-blue-700 hover:bg-bgblue transition-all duration-300 pt-1 pb-1 pl-2 pr-2 ml-1 rounded-lg"><FaShoppingCart size={20} className="inline mr-2 "/>añadir</button>
        </div>
    
)};

export default BotonAñadirCarrito