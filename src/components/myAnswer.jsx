import React, { useState } from 'react'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import { Snackbar } from '@mui/base'
import BasicModal from './infoModal'
import { editAnswerRequest } from '../utils/PutStats'


const user=localStorage.getItem('user')
export default function Answer(props) {
  
    const getDateFromTimestamp=()=>{let timestamp= props.answer.answered_at
               const date=new Date(timestamp)
               const month=date.toLocaleString('default', { month: 'long' });
               const day=date.getDate()
               const year=date.getFullYear()
               return`${day} ${month}, ${year}`}

    const [openSnackbar,setOpenSnackbar]=useState(false)
    const [ansStatus,setAnsStatus]=useState(props.answer.is_checked)
    const handleClose=()=>{
        setOpenSnackbar(false)
    }
    const [answerBool,setAnswerBool]=useState(props.answer.is_correct)
    const [answerDisplay,setAnswerDisplay]=useState(props.answer.question.make_answer_visible)
  
    const answerMessages=["YaY! Your answer is Correct","NOO! Your answer is incorrect",
                            "Please Wait! Your answer hasn't been corrected"]
   
    const [answerMessage,setAnswerMessage]=useState(props.answer.is_checked?(props.answer.is_correct? answerMessages[0]:answerMessages[1])
                                                    : answerMessages[2])
    const [answerGiven,setAnswerGiven]=useState(props.answer.answer_given)
    const handleAnswerChange=(v)=>{
      setAnswerGiven(v)
    }
  return (
    <>
        <div className="question">
            <h3>{props.answer.question.user}</h3>
            <hr></hr>
            <p>
            {props.answer.question.text}
            </p>
            

            
            <small className='datetime'> Answered at: {
               getDateFromTimestamp()
            }</small>
            <p style={{color:'grey',fontSize:'12px'}} className='answer-status'>
            {
                answerMessage
            }
            </p> 
            <form className='answer-edit' onSubmit={async (e)=>{
                const data= new FormData(e.currentTarget)
                if (data.get('answer')===props.answer.answer_given){
                    return 0;
                }
                const statusCode=await (props.func)()
             
                if(statusCode===1){
                    return 1;
                    
                } else{
                    return -1;
                }
            }}>
            {/* <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleClose}>{reqStatus?"Answer Submitted Succesfully":"An error occured"}</Snackbar> */}
              <TextField
                required
                id="outlined-required"
                label="Answer"
                className='textfield'
                placeholder='Answer'
                name='answer'
                defaultValue={props.answer.answer_given}
                onChange={(e)=>{handleAnswerChange(e.target.value)}}
                value={answerGiven}
                disabled={ansStatus||answerDisplay}
              />
              <BasicModal heading="Are you sure you want to change your answer?" 
              buttonText="Edit" func={()=>{editAnswerRequest(answerGiven,props.answer.id)}} notEditable={ansStatus||answerDisplay}/>
             
            </form>
             {answerDisplay?<p>Answer is: {props.answer.question.answer}</p>:null}
          </div>
    </>
  )
}
