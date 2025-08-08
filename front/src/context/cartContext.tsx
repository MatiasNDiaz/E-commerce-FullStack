"use client"

import IProduct from "@/interfaces/IProducts/IProducts.types";
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { useAutenticacionContext } from "./authContext";


interface CartContextType {
    cart: IProduct[] ,
    total: number,
    AgregarElementos: (product: IProduct) => void,
    EliminarElementos: (id:number)=> void,
    ResetearCarrito: ()=> void,
    ProductoEnCarrito: (id:number)=> boolean
}

// El contexto o Listado:
const CartContext = createContext<CartContextType | undefined>(undefined);

// La Bodega donde se encuentran las Funciónes:
export const CartProvider = ({children} : {children: ReactNode}) => {
    const {user} = useAutenticacionContext()
    const userId = user?.id

    const [ cart, setCart ] = useState<IProduct[]>([])
    const [ total, setTotal ] = useState<number>(0)
    const [isInitialized, setIsInitialized] = useState(false); // 👈 NUEVA

  // Cargar del localStorage
    useEffect(() => {
    if (userId === undefined || userId === null) return;

    const localCarrito = localStorage.getItem(`carrito_${userId}`);
    const localTotal = localStorage.getItem(`totalProducts_${userId}`);

    if (localCarrito) setCart(JSON.parse(localCarrito));
    if (localTotal) setTotal(Number(localTotal));

    setIsInitialized(true); // ✅ Recién acá habilitamos la persistencia
    }, [userId]);

  // Guardar en localStorage SOLO si ya cargamos primero
    useEffect(() => {
    if (!isInitialized || !userId ) return;

    localStorage.setItem(`carrito_${userId}`, JSON.stringify(cart));
    localStorage.setItem(`totalProducts_${userId}`, total.toString());
    }, [cart, total, isInitialized, userId]);

    const AgregarElementos = (product: IProduct)=>{
        setCart((prevCart)=>[...(prevCart || []),product])
        setTotal((prevTotal)=>(prevTotal || 0) + 1)
    };

    const EliminarElementos = (id:number)=>{
        setCart((prevCart)=> prevCart?.filter((product)=>product.id !== id))
        
        setTotal((prevTotal) => {
            if (prevTotal === 0 || !prevTotal){
                return 0;
            };
            return prevTotal - 1;
        })
    };

    const ResetearCarrito = ()=>{
            setCart([])
            setTotal(0)
    };

    const ProductoEnCarrito = (productId: number) => {
        if(!cart){
            return false;
        }
        return Boolean(cart.find((producto)=> producto.id === productId))
    };

    // const ObtenerTotal = ()=>{
        // cart.reduce()

    // };

    const values = {
        cart,
        total,
        AgregarElementos,
        EliminarElementos,
        ResetearCarrito,
        ProductoEnCarrito
    }

    return(
        <CartContext.Provider value={values}>
            { children }
        </CartContext.Provider>  
)};


// creamos el Custom Hook:
export const useCartContext = () => {
    const context = useContext(CartContext);

    if(!context) {
        throw new Error("UseAutenticacionContext debe usarse dentro de un AutenticacionProvider");
    }
    return context;
};