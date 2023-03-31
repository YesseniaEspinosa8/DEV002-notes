import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import {Auth} from './components/Auth';

export default function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Auth><Home /></Auth>}/>
    </Routes>
    </AuthProvider>
  );
}

