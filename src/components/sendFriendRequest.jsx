import React from 'react'
import { useDebounce } from '@uidotdev/usehooks'
import {IconButton,InputAdornment} from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'
import { TextField } from '@mui/material'
import { useState } from 'react'
import UserList from './userList'
import { userList } from '../utils/GetStats'
import { useQuery } from '@tanstack/react-query'
const user=localStorage.getItem("user")
export default function SendFriendRequest() {
const [filter, setFilter] = useState("")
  const handleFilterChange=(val)=>{
    setFilter(val)
  }
  const debouncedFilter = useDebounce(filter, 500)
  const results=useQuery(['myQuestions',debouncedFilter,user],userList,{ enabled: Boolean(debouncedFilter!=="") }
  )
  return (
    <div className='search'>
   <TextField
          className='friend-searchbar'
  label="Search"
  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <SearchOutlined />
        </IconButton>
      </InputAdornment>
    )
  }}
  placeholder='search for question text or through category short form'
  value={filter}
  onChange={e=>handleFilterChange(e.target.value)}
/>
{  (filter!=="" && !(results.isLoading))  && <UserList users={results.data} func={setFilter}/>}
</div>
  )
}
