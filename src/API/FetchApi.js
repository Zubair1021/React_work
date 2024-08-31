import React,{useState,useEffect} from 'react'
import Card from './Card'
import './style.css'


function FetchApi() {
    const [Loading, setLoading] = useState(true)
    const [Data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            setData(json)
            setLoading(false)
        })
    
    }, [])


    
return (
    <div className='Main-container'>
        <div className='heading'>
         <h1>User Details</h1> 
        </div>
        {Loading === true ? (
            <div className='loading'>
                <h1>Data is Loading plz wait a few seconds......</h1>
            </div>
        ) : (
            <div>
                {Data.slice(0, 5).map((item,index) => (
                    <Card key={index} id={index+1} name={item.name} city={item.address.city} comp={item.company.name} />
                ))}
            </div>
        )}
    </div>
)
}

export default FetchApi