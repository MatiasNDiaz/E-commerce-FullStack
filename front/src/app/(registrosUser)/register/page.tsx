
import React from "react"
import RegisterForm from "./formularioInputs"

const RegisterInputs: React.FC = () => {

    return (
        <>
        <h2 className="m-auto w-[100vw] shadow-md text-center text-white bg-blue-700 mb-5 pt-1 pb-1 pl-3 pr-3 mt-5 font-bold text-2xl">¡Bienvenido registrate!</h2>
        <div className="mt-2 text-white w-[800px] m-auto">
            <RegisterForm/>
            
            
        </div>
        </>
)}

export default RegisterInputs