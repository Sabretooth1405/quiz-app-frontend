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
export const feedQuestions=async ()=>{
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
export const myQuestions=async ()=>{
    const token = localStorage.getItem('myToken')
     let questionRes = await fetch('http://localhost:8000/api/list/',
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
export const myQuestionDetail=async ({queryKey})=>{
    const token = localStorage.getItem('myToken')
    const [_,id]=queryKey
     let questionRes = await fetch(`http://localhost:8000/api/detail/${id}`,
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
export const myAnswers=async ({queryKey})=>{
    const token = localStorage.getItem('myToken')
    
     let answerRes = await fetch(`http://localhost:8000/api/myanswers/`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        })
    
    answerRes= await answerRes.json()
    return answerRes
}
export const myQuestionAnswerList=async ({queryKey})=>{
    const token = localStorage.getItem('myToken')
    const [_,id]=queryKey
     let answerRes = await fetch(`http://localhost:8000/api/answers/list/${id}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        })
    
    answerRes= await answerRes.json()
    return answerRes
}


export default getStats;