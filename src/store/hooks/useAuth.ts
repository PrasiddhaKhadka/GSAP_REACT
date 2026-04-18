import { useMutation, useQuery } from "@tanstack/react-query";
import httpClient from "../lib/http";


export const useAuthLogin = ()=>{
    return useMutation({
        mutationFn:async()=>{
            const resp = await httpClient.post('/login')
            return resp
        },
        onSuccess:()=>{
            
        }
    })
}