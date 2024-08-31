import React from 'react'
import './style.css'

const Card = (props) => {
  return (
    <div className='Main-card-container'>
        <div className="card-body">
            <div className="usename">
            <h4>{props.id}- {props.name}</h4>
            </div>
            <div className='Additional'>
                <p>City: {props.city}</p>
                <p>Company: {props.comp}</p>

            </div>
        </div>
    </div>
  )
}

export default Card