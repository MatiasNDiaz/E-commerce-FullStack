import React from "react"
import { redirect } from "next/navigation";
import RenderProcutosPorId from "./ProductoPorId";
import getProductByID from "@/services/axiosGetProduct";

type Params = Promise<{id: number}>

// Funcion Obetener 1 solo producto por su id:
const ProductPorId: React.FC<{params:Params}> = async ({params}) => {
    const {id} = await params

    const ProductoPorId = await getProductByID(Number(id))

    if(!ProductoPorId){
        return redirect("/404")
    };

    return (
        <div>
            <RenderProcutosPorId id={ProductoPorId?.id} 
                                name={ProductoPorId?.name} 
                                price={ProductoPorId?.price} 
                                image={ProductoPorId.image} 
                                description={ProductoPorId.description}/>
        </div>
)} 

export default ProductPorId;