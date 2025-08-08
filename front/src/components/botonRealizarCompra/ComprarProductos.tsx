"use client";

import { useAutenticacionContext } from "@/context/authContext";
import { useCartContext } from "@/context/cartContext"
import { OrderDTO, PostOrderUser } from "@/services/axiosOrdenesUser";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"

const BotonCompraFinal:React.FC = () => {

    const {total, cart, ResetearCarrito} = useCartContext()
    const {user, token} = useAutenticacionContext()
    const router = useRouter()

    const comprarProductos = async () => {
        try {
            // Solo es un Sweetalert no es larga la funcion
            Swal.fire({
                icon: "info",
                allowOutsideClick: false,
                showConfirmButton: false,
                didOpen: () => {
                    Swal.showLoading();
                },
                title: "Procesando tu compra...",
                text: `Estamos procesando tu compra ${user?.name} no te vayas.`,
            });
            // Simular llamada async, por ejemplo un fetch o POST a tu backend
            if(!user){
                return
            };
            
            const data:OrderDTO = {
                userId: Number(user.id),
                products: cart.map((producto) => Number(producto.id))
            };
            
            const Order = await PostOrderUser(data, String(token))
            if (!Order) {
                Swal.fire({
                icon: "error",
                title: "¡Oops!",
                text: "Ocurrió un error al realizar tu compra, intenta mas tarde.",
                });
                return;
            }
            
            setTimeout(() => {
            Swal.fire({
                icon: "success",
                title: "¡Compra realizada con exito!",
                text: `Gracias ${user?.name} por confiar en nosotros 💙.`,
            });
            }, 3000) 
            
            setTimeout(() => {
                ResetearCarrito();
                router.push("/perfil"); // ← cambiá la ruta por la que quieras
            }, 3000)
            
        
        } catch (error) {
            console.warn("error catch Compra Final carrito: ", error)
        };
    };

    return(
    <>
    <button 
        disabled={total === 0}
        onClick={comprarProductos}
        className="bg-blue-600 hover:bg-blue-900 transition-all duration-300 text-center text-white text-lg font-bold pt-2 pb-2 pl-3 pr-3 m-2 rounded-lg">¡Realizar la Compra!
    </button>
    </>    
)};

export default BotonCompraFinal;

