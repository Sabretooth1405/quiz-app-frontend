export const myQuestionDelete=async (id)=>{
    const token = localStorage.getItem('myToken')
     let questionRes = await fetch(`http://localhost:8000/api/detail/${id}`,
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