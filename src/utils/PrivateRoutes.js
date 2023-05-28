import { Outlet, Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'
const PrivateRoutes = () => {
    let authTokens=localStorage.getItem('myToken')
    return (
         authTokens ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes