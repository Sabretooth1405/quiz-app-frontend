import React from 'react';
import Footer from './footer';
import './questionsPage.css';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import Sidebar from './sidebar';
import { useQuery } from '@tanstack/react-query';
import SendFriendRequest from './sendFriendRequest';
import Spinner from './spinner';
import { myFriends } from '../utils/GetStats';
import FriendList from './friendList';
const user=localStorage.getItem('user')

export default function FriendsPage() {
  const results=useQuery(['myFriends'],myFriends)
  
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
              <FriendList key={d.id} user={d}/>
            )
          })}
        </div>
        <SendFriendRequest className="friends-search"/>
        
      </div>


      <Footer/>
    </>
  );
}

