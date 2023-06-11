import React, { useState } from 'react';
import Footer from './footer';
import './questionsPage.css';
import Sidebar from './sidebar';
import { useQuery } from '@tanstack/react-query';
import SendFriendRequest from './sendFriendRequest';
import Spinner from './spinner';
import { myFriends,getFriendRequests } from '../utils/GetStats';
import FriendList from './friendList';
import FriendRequest from './friendRequest';
const user=localStorage.getItem('user')

export default function FriendsPage() {
  const [reload,setReload]=useState(false)
  const results=useQuery(['myFriends',reload],myFriends)
  const requests=useQuery(['getFriendRequests',reload],getFriendRequests)
  return (
    <>
      <div className="container container-friends">

        <div className="sidebar-cont">
        <Sidebar/>
        </div>
        <div className="feed"><h1>My Friends</h1>
          <hr></hr>
          <small>View all of your Friends</small>
          {results.isLoading?<Spinner/>:results.data.map((d)=>{
            return(
              <FriendList func={setReload} key={d.id} user={d}/>
            )
          })}
        </div>
        <SendFriendRequest className="friends-search"/>
        <div>
        </div>
        <div className='feed'>
        <h1> Friend Requests</h1>
          <hr></hr>
          <small>View all of your Friend Requests</small>
          {requests.isLoading?<Spinner/>:requests.data.map((d)=>{
            return(
              <FriendRequest func={setReload} key={d.id} req={d}/>
            )
          })}
          </div>
      </div>
     

      <Footer/>
    </>
  );
}

