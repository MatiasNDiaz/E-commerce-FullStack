// creamos un Axios personalizado para Obtener un producto del Backend por su ID. (de la base de datos en la entidad Products)

import axios from "axios";
import IProduct from "@/interfaces/IProducts/IProducts.types";

const axiosProductoPorID = axios.create({
    baseURL: process.env.GET_PRODUCTS_BACK
});

const getProductByID = async (id:number):Promise<IProduct | null> => {
    try {
        const res = await axiosProductoPorID.get(`/products/${id}`)
        if (!res.data) {
            return null
        };
        return res.data

    } catch (error) {
        console.error("Ocurrio un error al obtener los productos",error);
        return null
    };
};

export default getProductByID