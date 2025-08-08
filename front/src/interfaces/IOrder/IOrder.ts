import IProduct from "../IProducts/IProducts.types";

export enum eStatusOrder{
    PENDING="pending",
    APROVED="approved",
    REJECTED="rejected"
}

interface IOrder{
    id?: number;
    status: eStatusOrder;
    date: string;
    userId?: string;
    products: IProduct[];
}

export default IOrder