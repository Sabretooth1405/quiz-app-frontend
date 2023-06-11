import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

const BASE_URL="https://quiz-app-backend-production-744d.up.railway.app"
export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('myToken') ?localStorage.getItem('myToken') : null)
    let [user, setUser] = useState(()=> localStorage.getItem('myUser') ? localStorage.getItem('myUser') : null)
    let [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    let loginUser = async (e) =>{
        e.preventDefault()
        let data = new FormData(e.currentTarget);
        console.log(data.get('checkbox'))
        data = {
            'username': data.get('username'),
            'password': data.get('password')
        }
        let res = await fetch(`${BASE_URL}/api/auth/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
        if (!res.ok) {
            console.log('invalid credentials')
            return 1;
        }
        res = await res.json()
        localStorage.setItem("myToken", res.token);
        const token = localStorage.getItem('myToken')
        let res2 = await fetch(`${BASE_URL}/api/login-test/`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`
                },
            })

        if (res2.ok) {
            res2 = await res2.json()
            setUser(res2.username)
            localStorage.setItem('user',res2.username)
        }
        if (loading){
            setLoading(false)
        }
        
        setAuthTokens(token)
        navigate(`/`)
        return 0;
    }



    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('myToken')
        navigate(`/login`)
    }


    

    let contextData = {
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }


    
    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}
