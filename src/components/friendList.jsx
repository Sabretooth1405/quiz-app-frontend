import React from 'react'

export default function FriendList(props) {
  return (
    <div className='question'>
    <h3>{props.user.to_user}</h3>
    <hr></hr>
    </div>
  )
}
