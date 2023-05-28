import React from 'react'
import Footer from './footer'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from './spinner'
import { useQuery } from "@tanstack/react-query";
import getStats from '../utils/GetStats'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'
export default function Home() {

    const results = useQuery(["stats",1 ],getStats );
    const user=localStorage.getItem('user')
   return  (

        <>
            <h1 >Welcome {user}!</h1>
            <Footer />
        </>
    )
}
