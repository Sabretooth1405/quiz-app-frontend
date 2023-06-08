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
export const myQuestions=async ({queryKey})=>{
    const token = localStorage.getItem('myToken')
    const [_,q]=queryKey
     let questionRes = await fetch(`http://localhost:8000/api/list?q=${q}`,
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
export const myFriends=async ({queryKey})=>{
    const token = localStorage.getItem('myToken')
    
     let friendRes = await fetch(`http://localhost:8000/api/friends/list/`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        })
    
    friendRes= await friendRes.json()
    return friendRes
}
export const userList=async ({queryKey})=>{
    const token = localStorage.getItem('myToken')
    const [_,q,username]=queryKey
     let userRes = await fetch(`http://localhost:8000/api/user-list/${username}?q=${q}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        })
    
    userRes= await userRes.json()
    return userRes
}
export const sendFriendRequest=async (username)=>{
    const token = localStorage.getItem('myToken')
     let friendRes = await fetch(`http://localhost:8000/api/friends/requests/send/${username}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        })
    if(!friendRes.ok){
        return [-1,friendRes]
    }
    friendRes= await friendRes.json()
    return [1,friendRes]
}
export default getStats;