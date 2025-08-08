import Carrusel from "./(registrosUser)/landing/Carrusel";
import productsToPreLoad from "@/app/(tienda)/home/arrayProducts";
import Header from "./(registrosUser)/landing/Header";
import Main from "./(registrosUser)/landing/Main";
import React from "react";


const Landing: React.FC = () => {

    return (
    <div className="bg-black ">
        <Header/>
        <div className="bg-white border-2 p-4">
            <Carrusel  products={productsToPreLoad}/>    
        </div>
        <Main/>
    </div>
)}

export default Landing;
