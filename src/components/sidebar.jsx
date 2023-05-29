import React from 'react'
import { Link } from 'react-router-dom'

const user=localStorage.getItem('user')
const fields={
    'Feed':`/questions`,
    'My Questions': `/questions/${user}`,
    'My Answers': `/answers/${user}`,
    'Friends': `/friends`,
    'Home':`/`,
}
const keys=Object.keys(fields)
export default function Sidebar() {
  return (
 <>
        <ul className='sidebar'>
          {keys.map((key)=>(
            <>
            <li key={key}><Link to={fields[key]}>{key}</Link></li>
            <hr></hr>
            </>
          ))}
          </ul>
        </>
  )
}
