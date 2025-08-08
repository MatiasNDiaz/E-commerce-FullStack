import getProducts from "@/services/axiosAllProducts";
import RenderProcutosHome from "../../home/RenderProcutosHome";
// import { notFound } from "next/navigation";

const CategoriaProducto = async ({ params }: { params: any }) => {
  const id = parseInt(params.id);

  const productos = await getProducts();
  const productosFiltrados = productos.filter(
    (producto) => producto.categoryId === id
  );
  
    if(productosFiltrados.length === 0) {
      console.log("No se encontro el producto filtrado");
      
     }; // Esto redirige automáticamente a app/not-found.tsx
      

  return (
    <>
      <main>
        <h2 className="m-auto w-[99vw] text-white shadow-md text-center bg-blue-700 mb-5 pt-1 pb-1 pl-3 pr-3 font-extrabold text-xl">
          Tenemos lo mejor en...!
        </h2>
        <div className="w-[1300px] border-2 text-white rounded-xl mt-3 bg-bgblue flex m-auto">
          {productosFiltrados.map((producto, index) => {
            return (
              <RenderProcutosHome
                key={index}
                id={producto.id}
                name={producto.name}
                price={producto.price}
                image={producto.image}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default CategoriaProducto;