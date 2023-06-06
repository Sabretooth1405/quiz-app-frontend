import React from 'react'
import Sidebar from './sidebar'
import Answer from './myAnswer'
import { useQuery } from '@tanstack/react-query'
import { myAnswers } from '../utils/GetStats'
import Spinner from './spinner'
import Footer from './footer'

export default function MyAnswersPage() {
    const results=useQuery(['myAnswers'],myAnswers)

  return (
   <>
    <div className='container'>
        <div className="sidebar-cont">
        <Sidebar/>
        </div>
        <div className="feed"><h1>My Answers</h1>
          <hr></hr>
          <small>View all your Answers</small>
          {results.isLoading?<Spinner/>:results.data.map((d)=>{
            return(
              <Answer key={d.id} answer={d}/>
            )
          })}
        </div>
    </div>
    <Footer/>
    </>
  )
  
}
