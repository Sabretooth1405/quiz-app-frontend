const BASE_URL="https://quiz-app-backend-production-744d.up.railway.app"
const getStats = async ({ queryKey }) => {
    const token = localStorage.getItem('myToken')
    const [_,user]=queryKey
    let statsRes = await fetch(`${BASE_URL}/api/users/detail/${user}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        })
    if(!statsRes.ok){
        return [-1,-1];
    }
    statsRes=await statsRes.json()
    return statsRes
    
}
export const feedQuestions=async ()=>{
    const token = localStorage.getItem('myToken')
     let questionRes = await fetch('${BASE_URL}/api/friends/questions/list/',
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        })
    
    questionRes= await questionRes.json()
    console.log(questionRes)
    return questionRes
}
export const myQuestions=async ({queryKey})=>{
    const token = localStorage.getItem('myToken')
    const [_,q]=queryKey
     let questionRes = await fetch(`${BASE_URL}/api/list?q=${q}`,
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
     let questionRes = await fetch(`${BASE_URL}/api/detail/${id}`,
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
    
     let answerRes = await fetch(`${BASE_URL}/api/myanswers/`,
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
     let answerRes = await fetch(`${BASE_URL}/api/answers/list/${id}`,
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
    
     let friendRes = await fetch(`${BASE_URL}/api/friends/list/`,
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
     let userRes = await fetch(`${BASE_URL}/api/user-list/${username}?q=${q}`,
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
     let friendRes = await fetch(`${BASE_URL}/api/friends/requests/send/${username}`,
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
export const getFriendRequests=async ()=>{
    const token = localStorage.getItem('myToken')
     let friendRes = await fetch(`${BASE_URL}/api/friends/requests/list/`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        })
    if(!friendRes.ok){
        return friendRes
    }
    friendRes= await friendRes.json()
    return friendRes
}

export default getStats;