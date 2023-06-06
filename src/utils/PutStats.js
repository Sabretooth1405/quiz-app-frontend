 export const   editQuestionRequest= async (e,id,originalData)=>{
    
    e.preventDefault()
   
    let data = new FormData(e.currentTarget);

    const fields=['category','question','answer','used','used_for','visible_to_friends']
     
    const body={}
    let flag=0
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
        if(uf!==originalData[field]){
            console.log(uf,originalData[field])
            body[field] = uf
            flag++
        }
            
    } else if(field==="visible_to_friends"){
        if(vtf!==originalData[field]){
            
            body[field] = vtf
            flag++
        }
    } else{
        if(data.get(field)!==originalData[field]){
            
            body[field] = data.get(field)
            flag++
            
    }
}
}
    if(flag===0){
        return -1;
    }
    const token = localStorage.getItem('myToken')

     let questionRes = await fetch(`http://localhost:8000/api/detail/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(body),
        })
    
    questionRes= await questionRes.json()
    return questionRes
}

export const editAnswerRequest= async (answer,id)=>{
    const body={'answer_given':answer}
    const token = localStorage.getItem('myToken')
     let answerRes = await fetch(`http://localhost:8000/api/answers/detail/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(body),
        })
    
    answerRes= await answerRes.json()
    return answerRes
}

export default editQuestionRequest;