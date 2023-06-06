import React from 'react'
import Sidebar from './sidebar'
import CreateQuestion from './createQuestion'
export default function CreateQuestionsPage() {
  return (
    <div className='container'>
        <div className="sidebar-cont">
        <Sidebar/>
        </div>
        <div className='feed'>
          <CreateQuestion/>
         </div>
        </div>
  )
}
