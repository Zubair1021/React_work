import React from 'react'
import { useState } from 'react';
import '../Counter/counter.css'




const Counter = () => {

    let [Count,Setcount] = useState(0);

    function IncCount(){
        return Setcount(Count+1);
    }
    function DecCount(){
        if(Count>0)
        return Setcount(Count-1);
        else
        return Setcount(0);
    }
    function ResetCount(){
        return Setcount(0);
    }
    
  return (
    <div className='Main-counter-div'>
        <h1 className= {Count===0? "h1ZeroStyle":"h1otherStyle"}>{Count}</h1>
        <div className="opt-buttons">
            <button onClick={IncCount}>Increament</button>
            <button onClick={DecCount}>Decreament</button>
            <button onClick={ResetCount} style={{border:'2px solid red'}}>Reset</button>
        </div>
    </div>
  )
}
export default Counter