import React from "react";
import Navbar from "@/components/NavBar/Navbar";
import Footer from "../../components/Footer";
import ILayout from "../../components/IlayoutTienda/Ilayout";

export const LayoutTienda:React.FC<ILayout> = ({children}) => {
    return (
    <>
        <header> <Navbar/> </header>
        <main> {children} </main>
        <footer> <Footer/></footer>
    </>
)};
export default LayoutTienda;