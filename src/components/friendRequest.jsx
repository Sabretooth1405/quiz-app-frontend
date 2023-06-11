import React from 'react'
import BasicModal from './infoModal'
import { processFriendRequest } from '../utils/PostStats'
export default function FriendRequest(props) {
  return (
   <div className='question'>
   <div className='friend-request'>
    <h3>{props.req.from_user}</h3>
    <div className='friend-request-buttons'>
    <BasicModal style={{marginRight:"0.5rem"}} buttonText="Accept" color="success" heading="Are you sure you want to accept this request?" mb={0.5} func={async ()=>{
      const flag=  await processFriendRequest("accept",props.req.id)
      if (flag===1){
        props.func((prevState)=>{
            return !prevState
        })
      }
    }} redirect={`/friends`} />
    <BasicModal style={{marginLeft:"0.5rem"}} buttonText="Reject" color="error" heading="Are you sure you want to reject this request?" mb={0.5} func={async ()=>{
       const flag=  await processFriendRequest("reject",props.req.id)
       if (flag===1){
        props.func((prevState)=>{
            return !prevState
        })
      }
    }} redirect={`/friends`} />
    </div>
    </div>
    <hr></hr>
    
    
    </div>
  )
}
