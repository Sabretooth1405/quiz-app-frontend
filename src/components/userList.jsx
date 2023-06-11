import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button ,Chip} from '@mui/material';
import { sendFriendRequest } from '../utils/GetStats';
import { Link } from 'react-router-dom';
const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: '#eeeeee',
  zindex: 55,
  maxHeight: '250px', 
  overflow: 'auto'
};
const buttonStyle={
    width: '45%',
    fontSize:'0.6rem',
}

export default function UserList(props) {
 const [disabled,setDisabled]=React.useState(false)
 
 
  return (
    <List sx={style} component="nav" aria-label="user-list">
      {props.users.map((user,i)=>{
        return (
        <>
        <ListItem component={Link} to={`/users/${user.username}`} key={user.id} className='user-display'>
        <ListItemText  primary={user.username} />
        {(user.is_friend) ? <Chip label="Friend"/> :((user.is_request_sent)? <Chip label="Request Sent"/>:<Button sx={buttonStyle} type='button' variant='contained'
        onClick={async (e)=>{
           const [status,_]= await sendFriendRequest(user.username)
        
           if(status===1){
             props.func("")
           }
          
        }}>Request</Button>)}
      </ListItem>
       <Divider />
       </>
        )
      })}
    </List>
  );
}