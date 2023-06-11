import React, { useState } from 'react'
import { Snackbar } from '@mui/base'
import BasicModal from './infoModal'
import { processAnswerRequest } from '../utils/PostStats'
const user=localStorage.getItem('user')


export default function CorrectAnswer(props) {
  const getDateFromTimestamp=()=>{let timestamp= props.answer.answered_at
               const date=new Date(timestamp)
               const month=date.toLocaleString('default', { month: 'long' });
               const day=date.getDate()
               const year=date.getFullYear()
               return`${day} ${month}, ${year}`}

    const [disabled,setDisabled]=useState(props.answer.is_checked)
    const [highlightClassName,setHighlightClassName]=useState(props.answer.is_checked?(props.answer.is_correct?"correct":"incorrect"):"")
  return (
    <>
        <div className="question">
            <h3>{props.answer.answerer}</h3>
            <hr></hr>
            <p className={highlightClassName}>
            {props.answer.answer_given}
            </p>
            <small className='datetime'> Answered at: {
               getDateFromTimestamp()
            }</small>
            <p style={{color:'grey',fontSize:'12px'}} className='answer-status'>
            Correct Answer: {props.answer.question.answer}
            </p> 
            <div className='correct-ans'>
            <BasicModal heading="Are you want to submit this feedback? This can't be changed" 
              buttonText="Correct" func={()=>{processAnswerRequest("correct",props.answer.id)
              setDisabled(true)
              setHighlightClassName("correct")}} notEditable={props.answer.is_checked||disabled} color="success" redirect={`/answers/${props.answer.question.id}`}/>
              <BasicModal heading="Are you want to submit this feedback? This can't be changed" 
              buttonText="Incorrect" func={()=>{processAnswerRequest("incorrect",props.answer.id)
              setDisabled(true)
              setHighlightClassName("incorrect")}} notEditable={props.answer.is_checked||disabled} color="error" redirect={`/answers/${props.answer.question.id}`}/>
              </div>
          </div>
    </>
  )
}
