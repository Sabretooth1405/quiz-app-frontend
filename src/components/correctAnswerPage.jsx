import React from 'react'
import Sidebar from './sidebar'
import { myQuestions } from '../utils/GetStats'
import { useQuery } from '@tanstack/react-query'
import './questionsPage.css'
import Spinner from './spinner'
import Footer from './footer'
import CorrectAnswer from './correctAnswer'
import { myQuestionAnswerList } from '../utils/GetStats'
import { useParams } from 'react-router-dom'
export default function CorrectAnswersPage() {
    const {id}=useParams()
    const results=useQuery(['myQuestionAnswerList',id],myQuestionAnswerList)
  return (
    <>
    <div className='container'>
        <div className="sidebar-cont">
        <Sidebar/>
        </div>
        <div className="feed"><h1>Answers</h1>
          <hr></hr>
          <small>View all Answers from your friends to a question</small>
          {results.isLoading?<Spinner/>:results.data.map((d)=>{
            return(
              <CorrectAnswer key={d.id} answer={d}/>
            )
          })}
        </div>
    </div>
    <Footer/>
    </>
  )
}
