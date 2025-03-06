import { useState } from "react";

let Example2 =()=>{
    let [name, setname] = useState("")
      let [age, setage] = useState()
      let [place, setplace] = useState("")
      let handlename = () => {
        setname("shankar")
      }
      let handleage = () => {
        setage(21)
    
    
      }
      let handleplace = () => {
        setplace("hyd")
    
      }
    
      return <>
        <h1>My name is:{name}</h1>
        <h1>My age is:{age}</h1>
        <h1>I'm from :{place}</h1>
        <button onClick={handlename}>reveal name</button>
        <button onClick={handleplace}>reveal place</button>
        <button onClick={handleage}>reveal age</button>
      </>
    
}
export default Example2;