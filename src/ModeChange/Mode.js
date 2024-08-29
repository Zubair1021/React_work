import React, {useState} from 'react'
import '../ModeChange/Mode.css'

const Mode = () => {
    // Dark and Light mode 
    const [mode, setMode] = useState('light')
    const changeMode = () => {
        if (mode === 'light') {
            setMode('dark')
        } else {
            setMode('light')
        }
    }

  return (
    
    <div className={mode==="light"?"darkmode":"lightmode"}>
        <button onClick={changeMode}>Change Mode</button>
        <p>Current Mode is {mode}</p>
    </div>
  )
}



export default Mode