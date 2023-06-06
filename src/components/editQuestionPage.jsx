import React from 'react'
import Sidebar from './sidebar'
import './questionsPage.css'
import EditQuestion from './editQuestion'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { myQuestionDetail } from '../utils/GetStats'
import Spinner from './spinner'

export default function EditQuestionPage() {
 const {user,id}=useParams()
 const results= useQuery(['questionDetail',id],myQuestionDetail)
  return (
   <div className='container'>
        <div className="sidebar-cont">
        <Sidebar/>
        </div>
        <div className='feed'>
          {results.isLoading?<Spinner/>:<EditQuestion question={results.data}/>}
         </div>
        </div>
  )
}
