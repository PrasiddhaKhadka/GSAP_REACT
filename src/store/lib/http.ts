import axios from "axios";
import { error } from "node:console";


const baseURL = 'https://dummyjson.com/user'

const httpClient = axios.create({
    baseURL:baseURL,
    headers:{
        'Content-Type':'application/json'
    },
    timeout:200000
})


// request interceptors
axios.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token')
    if(token){
        console.log(token)
    }
    return config
},(error)=>{
    console.log(error)
    return Promise.reject(error)
})


//response interceptors
axios.interceptors.response.use((res)=>{
    console.log(res)
    return res
},(error)=>{
    console.log(error)
    return Promise.reject(error)
})

export default httpClient