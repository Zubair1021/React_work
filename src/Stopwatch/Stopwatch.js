import React,{useState,useEffect} from 'react'
import './Stopwatch.css'

const Stopwatch = () => {
    //This useState hook is used for the count of the stopwatch
    const [count, setcount] = useState(0)
    //This useState hook is used for the start and stop of the stopwatch
    const [checked, setchecked] = useState(false)


    // This is for understanding the working of useEffect
    // Off strict mode for proper understanding

    // useEffect(() => {
    //     // Working when mounted 
    //     alert('You are in the Stopwatch')

    //     // Working when unmounted
    //   return () => {
    //     alert('You off the Stopwatch')
    //   }
    // }, [])
    


    useEffect(() => {

        if(checked===true){
        const Interval=setInterval(() => {
            setcount(count => count + 1)
        }, 1000);
    
      return () => {
          clearInterval(Interval);
      }
    }
    
    }, [count,checked])



    //This arrow function is used to reset the time of the stopwatch
    const ResetTime=()=>{
        setcount(0)
    }



  return (
    <div className='Main-container'>
        <h1 className='Top-heading'>Stopwatch</h1>
        <div className="working-container">
                 <h1 className='Count'>{count}</h1>
                 <div className="btn-boxes">
                        <button className='btn' onClick={()=> {setchecked(true)}} >Start</button>
                        <button className='btn' onClick={()=> {setchecked(false)}}>Stop</button>
                        <button className='btn Reset-btn' onClick={ResetTime} >Reset</button>
                </div>
        </div>
    </div>
  )
}

export default Stopwatch