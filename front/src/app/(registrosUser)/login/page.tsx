import React from "react"

import LoginForm from "./LoginFormUI";

const Login: React.FC = () => {

    return (
        <>
        <h2 className="m-auto w-[100vw] shadow-md text-center text-white bg-blue-700 mb-5 pt-1 pb-1 pl-3 pr-3 mt-5 font-bold text-2xl">¡Bienvenido Inicie sesión!</h2>
        <div className=" w-[800px] text-white m-auto mt-5">
            <LoginForm/>
        
        </div>
        </>
)};

export default Login