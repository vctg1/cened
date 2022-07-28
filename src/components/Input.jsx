import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import {AiOutlineLock} from 'react-icons/ai'
import { useState } from 'react'

export default function Input({placeholder, icon, onlyNumber, type}){
  const [value, setValue] = useState('')
  const onlyNumberF = (vl)=>{
    if(!isNaN(vl)){
      setValue(vl)
    }
  }
  return (
    <div className='flex items-center justify-center mt-7'>
        {icon === 'user' ? <BiUserCircle size={45} color='#fff'/> : <AiOutlineLock size={45} color='#fff'/>}
        <input type={type} onChange={(e)=>{
          if(onlyNumber){
            onlyNumberF(e.target.value)
          }else{
            setValue(e.target.value)
          }
        }} value={value} maxLength={type === 'text' ? 11 : 50} className='w-3/4 lg:w-2/4 md:w-3/5 bg-zinc-900 text-white text-lg placeholder:text-gray-500 h-10 outline-none rounded-lg p-1' placeholder={placeholder}/>
    </div>
  )
}
