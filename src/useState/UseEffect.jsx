// import React, { useEffect } from 'react'
// import Axios from 'axios'
// import { useState } from 'react'

// const FetchData = () => {
//     let [items, setitems] = useState(null)
//    useEffect(()=>{
//     let getData = async() => {
//     let {data} = await Axios.get("https://dummyjson.com/quotes");
//         console.log(data.quotes);
//         setitems(data.quotes)
//     }
//     getData()
//    },[])
//     return <>
//        {
//         items==null?"loading..":items.map((ele)=>{
//             return <div key={ele.id}>
//                 <h1>{ele.id}</h1>
//                 <p>{ele.quote}</p>
//                 <h3>{ele.author}</h3>
//             </div>
//         })
//        }
//     </>
// }
// export default FetchData

//!example
//*25/11/2024

import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const FetchData = () => {
    let [recipes, setRecipes] = useState(null)
    useEffect(() => {
        let FetchData = async () => {
            let { data } = await Axios.get("https://dummyjson.com/recipes")
            console.log(data);
            setRecipes(data.recipes);
        }
        FetchData()
    },[])
    return (
        <table border={2} width="100%">
            <thead>
            <tr>
                <th>Recipe.No</th>
                <th>RecipeName</th>
                <th>Ingredients</th>
                <th>Instructions</th>
                <th>Cuisine</th>
                <th>Image</th>
            </tr>
            </thead>
            <tbody>
            {
                recipes === null ? <tr><td colSpan="6">Loading...</td></tr> : recipes.map((ele) => {
                    
                    return <tr key={ele.id}>
                          <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.ingredients.map((ing,ind)=>{
                                return <ul key={ind}>
                                    <li>{ing}</li>
                                </ul>
                        })}</td>
                        <td>{ele.instructions.map((ins,ind)=>{
                            return <ul key={ind}>
                                <li>{ins}</li>
                            </ul>
                        })}</td>
                        <td>{ele.cuisine}</td>
                        <td><img src={ele.image} height="200" width="200"/></td>
                    </tr>
               
                })
            }
            </tbody>
        </table>
    )
}

export default FetchData