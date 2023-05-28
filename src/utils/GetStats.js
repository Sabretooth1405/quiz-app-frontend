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


export default getStats;