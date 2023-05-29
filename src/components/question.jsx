import React, { useState } from 'react'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import { Snackbar } from '@mui/base'

export default function Question(props) {
    const getDateFromTimestamp=()=>{let timestamp= props.question.created_at
               const date=new Date(timestamp)
               const month=date.toLocaleString('default', { month: 'long' });
               const day=date.getDay()
               const year=date.getFullYear()
               return`${day} ${month}, ${year}`}

    const [openSnackbar,setOpenSnackbar]=useState(false)
    const [reqStatus,setReqStatus]=useState(false)
    const handleClose=()=>{
        setOpenSnackbar(false)
        setReqStatus(false)
    }
  return (
    <>
        <div className="question">
            <h3>{props.question.user}</h3>
            <hr></hr>
            <p>
            {props.question.question}
            </p>
            <small className='datetime'> Added at: {
               getDateFromTimestamp()
            }</small>
            <form onSubmit={async (e)=>{const statusCode=await (props.func)(e,props.question.id)
             
                setOpenSnackbar(true)
                if(statusCode===1){
                    setReqStatus(true)
                } else{
                    setReqStatus(false)
                }
            }}>
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleClose}>{reqStatus?"Answer Submitted Succesfully":"An error occured"}</Snackbar>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue=""
                className='textfield'
                placeholder='Answer'
                name='answer'
              />
              <Button
                type="submit"
                variant="contained"
               
              >
                Submit
              </Button>
            </form>
          </div>
    </>
  )
}
