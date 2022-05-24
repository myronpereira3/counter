import React, { useState } from "react"
import Styles from "./style.module.css"

let Counter=()=>
{
let  [count,setCount]=React.useState();
console.log(useState)

    const Increment=()=>{
        setCount(count+1);
     
    }
    const Decrement =()=>{
        if(count>0)
        {
            setCount(count-1);
        }
       
       
        
    }
    const Double=()=>{
          
        setCount(count*2);
        // if(count%2===0)
        // {
          
        // }
    }

    
    return(
       <>

  {/* <h1 className={count%2==0? Styles.colred:Styles.colgreen}>Counter App:{count}</h1> */}
  <h1 >Counter App:</h1>
  <h1 className={count%2==0? Styles.colgreen:Styles.colred}>{count}</h1>
  <button onClick={Increment}>Increment</button>
  &nbsp;&nbsp;
  <button onClick={Decrement}>Decrement</button>
  &nbsp;&nbsp;
  <button onClick={Double}>Double</button>
       </>
       
    )
}

export default Counter