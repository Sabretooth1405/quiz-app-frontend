const getStats = async ({ queryKey }) => {
    const token = localStorage.getItem('myToken')
    let questionRes = await fetch('http://localhost:8000/api/list/',
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        })
    let answerRes = await fetch('http://localhost:8000/api/myanswers/',
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        })

    return [questionRes.json(),answerRes.json()]
    
}
export const myQuestions=async ()=>{
    const token = localStorage.getItem('myToken')
     let questionRes = await fetch('http://localhost:8000/api/friends/questions/list/',
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        })
    
    questionRes= await questionRes.json()
    return questionRes
}


export default getStats;