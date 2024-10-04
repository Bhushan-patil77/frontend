import React, { useEffect, useMemo, useState } from 'react'

function First() {
  const [data, setData]=useState([])
  const [list, setList]=useState([])
  const [item, setItem]=useState('')

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then((response)=>{return response.json()})
  //   .then((data)=>{setData(data)})
  // },[])

  const addItem = () =>{
      setList([...list, item])
      setItem('')
  }

  const removeItem = (i) =>{
    const newList = list.filter((e, index)=>{
      return index!=i;
    })

    setList(newList)
    
  }

  const updateItem  = (e,i) =>{
    setItem(e)
    // const newList = [...list, list[i]=item]

    const newLi = list.map((element, index)=>{
      if(i==index)
      {
        return item
      }
      return element
    })

    setList(newLi)
    
    
  }

  return (
    <>
     <input className='outline-none border ' placeholder='Enter Name Of Item' type="text" value={item} onChange={(e)=>{setItem(e.target.value)}}  />

    <button onClick={()=>{addItem()}}>add</button>

      <ul>
          {
            list.map((e, i)=>{
              return <li>{e}   <button onClick={()=>{removeItem(i)}}>delete</button>  <button onClick={()=>{updateItem(e,i)}}>Update</button></li>
            })
          }
      </ul>
    </>
  )
}

export default First