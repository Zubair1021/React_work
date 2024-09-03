import React,{useState} from 'react'
import Practice from './Practice/useeffect'




const App = () => {

  const [check, setcheck] = useState(true)


  return (
    <div>
      <button onClick={()=> {setcheck(!check)}}>Click</button>
        {check===true?<Practice/>: ""} 
    </div>
  )
}

export default App



