import React from 'react'
import Sidebar from './sidebar'
import { myQuestions } from '../utils/GetStats'
import { useQuery } from '@tanstack/react-query'
import MyQuestion from './myQuestion'
import './questionsPage.css'
import Spinner from './spinner'
import Footer from './footer'
import { useDebounce } from '@uidotdev/usehooks'
import {IconButton,InputAdornment} from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'
import { TextField } from '@mui/material'
import { useState } from 'react'
export default function MyQuestionsPage() {
  const [filter, setFilter] = useState("")
  const handleFilterChange=(val)=>{
    setFilter(val)
  }
  const debouncedFilter = useDebounce(filter, 500);
    const results=useQuery(['myQuestions',debouncedFilter],myQuestions)
  return (
    <>
    <div className='container'>
        <div className="sidebar-cont">
        <Sidebar/>
        </div>
        <div className="feed">
        <div className='search-bar-div'>
        <h1>My Questions</h1>
          <TextField
          className='searchbar'
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
</div>
          <hr></hr>
          <small>View all your Questions</small>
          {results.isLoading?<Spinner/>:results.data.map((d)=>{
            return(
              <MyQuestion key={d.id} question={d}/>
            )
          })}
        </div>
    </div>
    <Footer/>
    </>
  )
}
