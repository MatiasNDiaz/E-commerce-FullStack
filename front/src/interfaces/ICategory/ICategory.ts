import IProduct from "../IProducts/IProducts.types"

interface ICategoty{
    id: number;
    name: string;
    products: IProduct[];
}

export default ICategoty