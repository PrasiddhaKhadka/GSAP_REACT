import { create } from "zustand"


type CountStore = {
    count: number
} 

type CountActions = {
    increment:(qty:number)=> void
    decrement:(qty:number)=> void
}


export const useCountStore = create<CountStore & CountActions>()((set)=>({
    count:0,
    increment: (qty:number)=> set((state)=>({count: state.count+1})),
    decrement:(qty:number)=>set((state)=>({count:state.count-1}))
}))


