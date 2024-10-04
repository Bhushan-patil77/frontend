import React, { useEffect, useState } from 'react'

function Strip({number, index, count}) {

    useEffect(()=>{
      document.getElementById(`${index}`).scrollTo({ top: number*50 , behavior: 'smooth' });
    },[index, count])

  return (
    <ul className='h-[50px] w-[10px]   overflow-auto no-scrollbar font-bold' id={`${index}`}>
       <li className='list h-full w-full flex justify-center items-center'>0</li>
       <li className='list h-full w-full flex justify-center items-center'>1</li>
       <li className='list h-full w-full flex justify-center items-center'>2</li>
       <li className='list h-full w-full flex justify-center items-center'>3</li>
       <li className='list h-full w-full flex justify-center items-center'>4</li>
       <li className='list h-full w-full flex justify-center items-center'>5</li>
       <li className='list h-full w-full flex justify-center items-center'>6</li>
       <li className='list h-full w-full flex justify-center items-center'>7</li>
       <li className='list h-full w-full flex justify-center items-center'>8</li>
       <li className='list h-full w-full flex justify-center items-center'>9</li>
    </ul>
  )
}  
  
export default Strip