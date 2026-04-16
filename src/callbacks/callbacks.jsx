import { useCallback, useState } from "react";
import { ChildComponent } from "./callback_child";

export function CallBackApp(){

  const [count, setCount ] = useState(0)

  const handleClick =   useCallback(()=>{
    console.log("Button clicked");
  },[])
  
 



  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)} className="bg-red-300 p-3 rounded-2xl m-5">Add</button>
        {/* <button onClick={handleClick} className="bg-amber-300 p-3 rounded-2xl"> Click Here !!</button> */}

        <ChildComponent onClick={handleClick}/>
    </div>
  )
}