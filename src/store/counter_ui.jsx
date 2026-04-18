import { useCountStore } from "./counter_state"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { useAuthLogin } from "./hooks/useAuth"

const CounterZus = ()=>{

    const login = useAuthLogin()

    const count = useCountStore((state)=>state.count)
    const increment = useCountStore((state)=>state.increment)


    const { register, handleSubmit,formState:{errors} } = useForm()


    const onSubmit = (data)=>{
        login.mutate(data,{
            onSuccess:(data)=>{
                console.log('COUNTER UI SUCCESSSS!!!')
                console.log(data.accessToken)
            },
            onError:()=>{
                console.log('COUNTER ERROR!!!')
            }
        })
        // console.log(data)
    }

    console.log('Re-rendered!!')
    return (
        <div className="m-16">
            <h1 className="text-6xl">{count}</h1>
            <Button className="p-1" onClick={increment}> Add </Button>

            

            <h1 className="bg-red-500 text-2xl text-center">LOGIN.....</h1>
            {/* LOGIN PAGE */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"  className="bg-white text-black m-1.5" {...register('username')} placeholder="email"/>
                <br></br>
                <input type="text"  className="bg-white text-black m-1.5" {...register('password')} placeholder="password"/>
                <Button className="bg-red-400">Login</Button>
            </form>
        </div>
        
    )
}

export default CounterZus