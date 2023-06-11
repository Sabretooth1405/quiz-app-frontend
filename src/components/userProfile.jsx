import React, { useState } from 'react'
import Footer from './footer'
import { useQuery } from "@tanstack/react-query";
import getStats from '../utils/GetStats'
import BasicCard from './profileDataDisplayCard';
import Spinner from './spinner';
import { useParams } from 'react-router-dom';
import { Button, Chip } from '@mui/material';
import SendFriendRequest from './sendFriendRequest';
import { sendFriendRequest } from '../utils/GetStats';
export default function UserProfile() {
    const {username}=useParams()
    const results = useQuery(["stats",username ],getStats );
    const[disabled,setDisabled]=useState(false)
    if (results.error) return "An error occured"
   return  (
        
        <>
            <h1 style={{display:"flex",justifyContent:"space-between",width:"95%"}}>Welcome {username}! {results.isLoading?<Spinner/>:(results.data.is_friend?<Chip label="Friend" 
            sx={{bgcolor:'primary',fontSize:32,height:"fit-content",width:"fit-content"}}/>:<Button variant='contained' disabled={disabled} onClick={
                ()=>{
                   const[status,_]= sendFriendRequest(username)
                   if(status===1){
                    setDisabled(true)
                   }
                }
            }    >Request</Button>)}</h1>
            <hr></hr>
            {results.isLoading?<Spinner/>:
               <div className='home-card-display'>
               <BasicCard heading={"Questions"} value={results.data.question_count}/>
                <BasicCard heading={"Answers"} value={results.data.answer_count}/>
                 <BasicCard heading={"Friends"} value={results.data.friends_count}/>
                 <BasicCard heading={"Mutuals"} value={results.data.common_friends_count}/>
                  <BasicCard heading={"Your Questions Answered"} value={results.data.current_user_questions_answered_count}/>

               </div>}
            <Footer />
        </>
    )
}
