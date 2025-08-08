

import axios from "axios";


const axiosOrder = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ORDERS_BACK
})

export interface OrderDTO{
    userId: number,
    products: number[]
}

export const PostOrderUser = async (data: OrderDTO, token: string) => {
    try {
        const postOrderUser = await axiosOrder.post("/orders", data, {
            headers: {
                authorization: token,
            }
        })
        return postOrderUser.data
    } catch (error) {
        console.error("Ocurrio un error al Enviar las Ordenes de compra",error);
    }
}

export const GetOrderUser = async (token: string) => {
    try {
        const getOrderUser = await axiosOrder.get("users/orders", {
            headers: {
                authorization: token,
            }
        })
        return getOrderUser.data
    } catch (error) {
        console.error("Ocurrio un error al Enviar las Ordenes de compra",error);
    }
}