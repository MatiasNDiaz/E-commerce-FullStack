import ListaProductosHome from "./ListaProductosHome"

export default function Home() {
  return (
    <>
      <main>
        <h2 className="text-white m-auto w-[99vw] shadow-md text-center bg-blue-700 mb-5 pt-1 pb-1 pl-3 pr-3 font-extrabold text-xl ">¡Favoritos de la semana!</h2>
        <div className="text-white w-[1300px] border-2 rounded-xl mt-3 flex m-auto">
              <ListaProductosHome/>
        </div>
        <h2 className="text-white m-auto w-[99vw] shadow-md text-center bg-blue-700 mb-5 pt-1 pb-1 pl-3 pr-3 font-extrabold text-xl  mt-6">¡En Ofertas del 5% - 45%!</h2>
        <div className="text-white w-[1300px] border-2 rounded-xl mt-3 flex m-auto">
              <ListaProductosHome/>
        </div>
      </main>
    </>
)};