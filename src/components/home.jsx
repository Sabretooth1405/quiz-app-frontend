import React from 'react'
import Footer from './footer'
import { useQuery } from "@tanstack/react-query";
import getStats from '../utils/GetStats'
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
