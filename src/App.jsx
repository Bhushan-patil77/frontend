import React, { useState, useEffect, useContext, createContext } from 'react';
import './App.css';
import Strip from './Strip';
import First from './First';
import useFetch from './useFetch';

function App() {
  const countries = [{name:'india', cities:['delhi', 'mumbai', 'kolkata']}, {name:'pak', cities:['lahor', 'punjab']}, {name:'USA', cities:['xyz', 'pqr']}]

  const[country, setCountry] = useState(0)

 const [cities, setCities] = useState([])

 const { data, loading, error,  getData } = useFetch()

 const url = 'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products';





 
    useEffect(()=>{
      fetch('http://localhost:3000/find').then((response)=>{return response.json()}).then((data)=>{console.log(data)}).catch((error)=>{console.log(error.message)})
      getData(url)
    },[])





     
  
  return (
    <>

     <h6>fetching</h6>


     {
      data && data.map((item, index)=>{return <h6 key={index}>{item.name}</h6> })
     }

     {
      loading && <h6>loading</h6>
     }

     {
      error && <h6>{error.message}</h6>
     }

    
      
    </>
  );
}

export default App;
