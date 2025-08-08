// ESCRIBIR LAS INTERFACES DE LA RESPUESTA DEL GET PRODUCTS.
// La respuesta del GET /products es un array de objetos con la siguiente estructura:

interface IProduct{
    id: number;
    name: string;
    description?: string;
    price: number;
    stock?: number;
    image: string;
    categoryId?: number;
}

export default IProduct
