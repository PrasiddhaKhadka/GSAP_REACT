import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const ShadCdnUi = ()=>{
    return (
        <div className="p-0.5 m-10">
            <Input className="mb-10" onChange={(e)=>console.log(e.target.value)} placeholder = 'Enter here...'/>

            <Button onClick={()=>console.log('clicked')}> Click me</Button>
        </div>
    )
}