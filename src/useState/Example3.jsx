import { useState } from "react";

let Example3=()=>{
    let [details, setDetails]= useState({name:"",qualification:"",role:""})

    let handleDetails=()=>{
       setDetails({name:"RAM",
        qualification: "B.Tech",
        role: "Software Developer"
       })
    }
    return <>
    <h1>My Name is: {details.name}</h1>
    <h1>My Qualification is: {details.qualification}</h1>
    <h1>My Role is: {details.role}</h1>
    <button onClick={handleDetails}>Reveal Details</button>
    </>
}
export default Example3;