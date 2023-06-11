import React from 'react'
import BasicModal from './infoModal'
import { deleteFriends } from '../utils/DeleteStats'
import { Link } from 'react-router-dom'
export default function FriendList(props) {
  return (
    <div className='question'>
    <div className='friend-name-button'>
    <h3><Link to={`/users/${props.user.to_user}`}>{props.user.to_user}</Link></h3>
    <div>
    <BasicModal style={{marginRight:"0.5rem"}} buttonText="Unfriend" color="error" heading="Are you sure you want to unfriend user?" mb={0.5} func={async ()=>{
      const flag=  await deleteFriends(props.user.to_user)
      console.log('aaaa')
      if (flag===1){
        props.func((prevState)=>{
            return !prevState
        })
      }  }} redirect={`/friends`} />
      </div>
    </div>
    <hr></hr>
    </div>
  )
}
