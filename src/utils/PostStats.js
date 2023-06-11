 export const createQuestionRequest= async (e)=>{
    e.preventDefault()
    let data = new FormData(e.currentTarget);
    const fields=['category','question','answer','used','used_for','visible_to_friends']
    const body={}
    let uf=false
    let vtf=false
    if(data.get('used')){
        uf=true
    }
    if(data.get('visible_to_friends')){
        vtf=true
    }
    for (let field in fields){
         field=fields[field]
     if(field==="used"){
        body[field] = uf
    } else if(field==="visible_to_friends"){
            body[field] = vtf
    } else{
        
            body[field] = data.get(field)
}
}
    const token = localStorage.getItem('myToken')
    let questionRes = await fetch(`http://localhost:8000/api/create/`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(body),
        })
    if(!questionRes.ok){
        return [-1,-1];
    }
    questionRes= await questionRes.json()
    return [1,questionRes]
}

 export const processAnswerRequest= async (message,id)=>{
  const body={
    "action":message
   }
    const token = localStorage.getItem('myToken')
    let answerRes = await fetch(`http://localhost:8000/api/answers/process/${id}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(body),
        })
    if(!answerRes.ok){
        return -1;
    }
    answerRes= await answerRes.json()
    return 1
}
export const processFriendRequest= async (message,id)=>{
  const body={
    "action":message
   }
    const token = localStorage.getItem('myToken')
    let friendRes = await fetch(`http://localhost:8000/api/friends/requests/process/${id}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(body),
        })
    if(!friendRes.ok){
        return -1;
    }
    friendRes= await friendRes.json()
    return 1
}

export default createQuestionRequest;