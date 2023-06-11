import React from 'react'
import Footer from './footer'
import { useQuery } from "@tanstack/react-query";
import getStats from '../utils/GetStats'
import BasicCard from './profileDataDisplayCard';
import Spinner from './spinner';
export default function Home() {
    const user=localStorage.getItem('user')
    const results = useQuery(["stats",user ],getStats );
    
   return  (
        
        <>
            <h1 >Welcome {user}!</h1>
             <hr></hr>
            {results.isLoading?<Spinner/>:
               <div className='home-card-display'>
               <BasicCard heading={"Questions"} value={results.data.question_count} link={`/myquestions`}/>
                <BasicCard heading={"Answers"} value={results.data.answer_count} link={`/myanswers`}/>
                 <BasicCard heading={"Friends"} value={results.data.friends_count} link={`/friends`}/>
               </div>}
            <Footer />
        </>
    )
}
