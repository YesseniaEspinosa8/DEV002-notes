import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

export  function Auth({children}) {
    const {userLogin,userLoading} = useContext(AuthContext)
    if(userLoading) return <h1>loading</h1>
    if(!userLogin) return <Navigate to="/" />
  return <>{children}</>
  
}
