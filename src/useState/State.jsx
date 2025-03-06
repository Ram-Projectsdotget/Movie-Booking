import { useState } from "react";

let State=()=>{
    let [count,setCount]=useState(0);
    let  handleIncrement=()=>{
            setCount(count+1)
        }
        
        let  handleDecrement=()=>{
            setCount(count-1)
        }
        
        let  handleReset=()=>{
            setCount(0)
        }
          return <>
        <h1>{count}</h1>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleReset}>reset</button>
        
        </>
}
export default State;