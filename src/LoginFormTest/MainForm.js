import React from 'react'
import './style.css'

const MainForm = () => {
  return (
    <div>
        <div className='main-body'>
        <form action="" className='container'>
          <input type="text" className='input' name='Name' placeholder='Username' />
          <input type="text" className='input' name='password'  placeholder='Password'/>
          <button className="btn">Login</button>
          <div className="read-only-text"><p>Not registered?</p><p className='p2' href="">Create an account</p></div>
        </form>
        </div>
    </div>
  )
}

export default MainForm