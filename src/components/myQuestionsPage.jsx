import React from 'react'
import Sidebar from './sidebar'
import { myQuestions } from '../utils/GetStats'
import { useQuery } from '@tanstack/react-query'
import MyQuestion from './myQuestion'
import './questionsPage.css'
import Spinner from './spinner'
import Footer from './footer'
export default function MyQuestionsPage() {
    const results=useQuery(['myQuestions'],myQuestions)
  return (
    <>
    <div className='container'>
        <div className="sidebar-cont">
        <Sidebar/>
        </div>
        <div className="feed"><h1>My Questions</h1>
          <hr></hr>
          <small>View all your Questions</small>
          {results.isLoading?<Spinner/>:results.data.map((d)=>{
            return(
              <MyQuestion key={d.id} question={d}/>
            )
          })}
        </div>
    </div>
    <Footer/>
    </>
  )
}
