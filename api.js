import axios from "axios"

const instance = axios.create({
    baseURL:"https://reqres.in/api",
})

// const fetchData=async()=>{
//     const request = await axios.get(fetchUrl,{
//       params:{
//         ID: 12345,
//         password : 12345,
//       }
//     })
//     alert(JSON.stringify(request.data.data[0].avatar))
//     console.log(request.data)

export default instance;