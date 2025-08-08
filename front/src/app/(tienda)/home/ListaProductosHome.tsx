// importamos el PredLoadProducts
// import productsToPreLoad from "./arrayProducts"; // importamos al RenderCards
import getProducts from "@/services/axiosAllProducts";
import RenderProcutosHome from "./RenderProcutosHome";


export const ListaProductosHome: React.FC = async ()=>{
    const productosBack = await getProducts()
    return(
        <div className={"flex flex-wrap justify-evenly items-center w-[1300px] text-white rounded-xl bg-bgblue"}>
            {productosBack.map((producto, index) => { 
                return <RenderProcutosHome key={index} id={producto.id} name={producto.name} price={producto.price} image={producto.image}/>            
            })}
        </div>
)};

export default ListaProductosHome
