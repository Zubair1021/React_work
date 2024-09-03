// Header is render again when counter is render but their is no need so we use memo to stop their render
import React,{memo} from 'react'
import '../Usememo/Style.css'

const Header = () => {
    console.log("Header Render")
  return (
    <div className='Header'>
        <h1>Counter App</h1>
    </div>
  )
}

export default memo(Header)