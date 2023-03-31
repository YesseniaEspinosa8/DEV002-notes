import React from 'react'
import { FaGoogle } from "react-icons/fa";

import appLogo from "../images/appLogo.png";
import "../pages/Login.css";

export default function Login() {
    return (
        <div>
            <h1>Tome Nota</h1>
            <img src={appLogo} className='appLogo' />
            <button className='signIn'><FaGoogle /> Iniciar Sesion </button>
        </div>
    )


}
