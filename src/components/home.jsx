import React from 'react'
import Footer from './footer'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from './spinner'
export default function Home() {
    const navigate=useNavigate()
    const [username, setUsername] = useState(null)
    const [loading, setLoading] = useState(true)
    const usernameHandler = (data) => {
        setUsername(data)
    }
    const loadingHandler = () => {
        setLoading(false)
    }

    async function loadUserInfo() {
        const token = localStorage.getItem('myToken')
        let res = await fetch('http://localhost:8000/api/login-test/',
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`
                },
            })

        if (res.ok) {
            res = await res.json()
            usernameHandler(res.username)
        }
        else{
            navigate(`/login`)
        }
    }
    useEffect(() => {
       loadUserInfo()
       loadingHandler()
    }, [])
   return loading? <Spinner/>: (

        <>
            <h1 >Welcome {username}!</h1>
            <Footer />
        </>
    )
}
