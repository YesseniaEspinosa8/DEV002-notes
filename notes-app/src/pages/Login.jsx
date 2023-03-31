import React, { useContext } from 'react'
import { FaGoogle } from "react-icons/fa";
import appLogo from "../images/appLogo.png";
import "../pages/Login.css";
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const navigate = useNavigate()
    const { login } = useContext(AuthContext);

    const handelLogin = async () => {
        await login()
        navigate("/Home")
    }
    return (
        <div>
            <h1>Tome Nota</h1>
            <img src={appLogo} className='appLogo' />
            <button className='signIn' onClick={handelLogin}><FaGoogle /> Iniciar Sesion </button>
        </div>
    );


}
