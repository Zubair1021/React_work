// UseReducer is just Behave like a UseState Hook but we use it at big projects.
import { useReducer } from 'react'
import React from 'react'
import '../UseReducer/Style.css'

const Counter = () => {
    const initialvalue=0;
    const reducer = (state,action)=>{
        if(action.type==='INCREAMENT')
            return state+2;
        if(action.type==='DECREAMENT')
            return state-1;            
        return state
    }

    const [state, dispatch] = useReducer(reducer, initialvalue)
  return (
    <div className='Usereducer'>
        <h1>Count is : {state}</h1>
        <div className="btn">
            <button onClick={()=>{dispatch({type:'INCREAMENT'})}}>Increament of 2</button>
            <button onClick={()=>{dispatch({type:'DECREAMENT'})}}>Decreament by 1</button>
        </div>
    </div>
  )
}

export default Counter