// creamos un Axios personalizado para Obtener todos los productos del Backend (de la base de datos en la entidad Products)
// holi
import axios from "axios";
import IProduct from "@/interfaces/IProducts/IProducts.types";

const axiosProductosBack = axios.create({
    baseURL: process.env.GET_PRODUCTS_BACK
});

const getProducts = async ():Promise<IProduct[]> => {
    try {
        const res = await axiosProductosBack.get("/products")
        if (!res.data) {
            return []
        };
        return res.data
    } catch (error) {
        console.error("Ocurrio un error al obtener los productos",error);
        return []
    };
};

export default getProducts