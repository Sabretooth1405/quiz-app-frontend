const BASE_URL="https://quiz-app-backend-production-744d.up.railway.app"
export const myQuestionDelete=async (id)=>{
    const token = localStorage.getItem('myToken')
     let questionRes = await fetch(`${BASE_URL}/api/detail/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        })
    if(!questionRes.ok){
        questionRes= await questionRes.json()
        return [-1,questionRes.status];
    }
    questionRes= await questionRes.json()
    
    return [1,questionRes.status]
}
 export const deleteFriends=async (username)=>{
    const token = localStorage.getItem('myToken')
     let friendRes = await fetch(`${BASE_URL}/api/friends/delete/${username}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        })
    if(!friendRes.ok){
        return -1
    }
    friendRes= await friendRes.json()
    return 1
}