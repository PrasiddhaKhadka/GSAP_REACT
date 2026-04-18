import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User{
    userId: string
    name:string
}

type AuthStore = {
    token: string | null
    user: User | null
}

type AuthAction ={
    login:(token:string)=>void
    logout:()=>void
    setUser:(user:User)=>void
}


export const useAuthStore = create<AuthStore & AuthAction>()(
    persist(
    (set)=>(
        {
            token:null,
            user:null,
            login:(token)=>set({token}),
            logout:()=>set({token:null}),
            setUser:(user)=> set({user})
        }
    ),
     {
        name:'auth-store',
    }
))