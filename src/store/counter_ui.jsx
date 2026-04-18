import { useCountStore } from "./counter_state"
import { Button } from "@/components/ui/button"

const CounterZus = ()=>{
    const count = useCountStore((state)=>state.count)
    const increment = useCountStore((state)=>state.increment)

    console.log('Re-rendered!!')
    return (
        <div className="m-16">
            <h1 className="text-6xl">{count}</h1>
            <Button className="p-1" onClick={increment}> Add </Button>
        </div>
    )
}

export default CounterZus