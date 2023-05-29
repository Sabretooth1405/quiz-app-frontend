import React from 'react';
import Footer from './footer';
import './questionsPage.css';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import Sidebar from './sidebar';
import { myQuestions } from '../utils/GetStats';
import { useQuery } from '@tanstack/react-query';
import Question from './question';
import Spinner from './spinner';

const submitAnswer = async(e,id)=>{
  e.preventDefault()
let data = new FormData(e.currentTarget);
data={
  'answer_given':data.get('answer')
}
const token=localStorage.getItem('myToken')
  let res = await fetch(`http://localhost:8000/api/answers/create/${id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`
                },
                body: JSON.stringify(data),
            })
            if(!res.ok){
              return -1
            }
    res= await res.json()
    return 1
}

export default function QuestionsPage() {
  const results=useQuery(['myQuestions'],myQuestions)
  return (
    <>
      <div className="container">

        <div className="sidebar-cont">
        <Sidebar/>
        </div>
        <div className="feed"><h1>Feed</h1>
          <hr></hr>
          <small>Find questions from your Friends</small>
          {results.isLoading?<Spinner/>:results.data.map((d)=>{
            return(
              <Question key={d.id} question={d} func={submitAnswer}/>
            )
          })}
        </div>
      </div>


      <Footer/>
    </>
  );
}

