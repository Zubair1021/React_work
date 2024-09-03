import React,{useEffect,useState} from 'react'
import '../App.css'

const Useeffect = () => {

    const [count, setcount] = useState(0)
  


    // Mounting Case
    // useEffect(() => {
    //     alert("Loading.....")
    // })


    // One time work when the components is Mounting
    // useEffect(() => {
    //   alert("Hello Word")
    // }, [])


    //Updation Mode 

    // useEffect(() => {
    //   alert(`Count value is ${count}`)
    // }, [count])


    // Unmounted

    useEffect(() => {  
        return () => {
          alert("Component Deleted")
        }
      }, [])
      
    
    
    
    
  return (
    <div  className='cont-div'>
        
        <button onClick={()=>{setcount(count+1)}}>Click me {count}</button>
        
    </div>
    
  )
}

export default Useeffect

// Use this code in APP.js fro Component call
// const [check, setcheck] = useState(true)


// return (
//   <div>
//     <button onClick={()=> {setcheck(!check)}}>Click</button>
//       {check===true?<Practice/>: ""} 
//   </div>
// )