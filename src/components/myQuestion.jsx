import React, { useState } from 'react'
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'
const user=localStorage.getItem('user')


export default function MyQuestion(props) {
    
    const getDateFromTimestamp=()=>{let timestamp= props.question.created_at
               const date=new Date(timestamp)
               const month=date.toLocaleString('default', { month: 'long' });
               const day=date.getDay()
               const year=date.getFullYear()
               return`${day} ${month}, ${year}`}

  return (
    <>
        <div className="question">
        <div className='question-title'>
            <h3>{props.question.category}</h3> 
            <Button
                component={Link}
                variant="contained"
                to={`/myquestions/${user}/${props.question.id}`}
                className='edit-btn'
              >
                Edit
              </Button>
              </div>
            <hr></hr>
            <p>
            {props.question.question}
            </p>
            <small className='answer-link'>
                <Link to={`/answers/${props.question.id}`}>View Answers</Link>
            </small>
            <small className='datetime'> Added at: {
               getDateFromTimestamp()
            }</small>
        </div>
        </>
  )
        }