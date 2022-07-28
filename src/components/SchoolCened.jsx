import React from 'react'
import image from '../images/backgroundInstitution.jpg'

export default function SchoolCened() {
  return (
    <div className='w-11/12 lg:w-1/2 flex lg:ml-5 ml-0 lg:mr-0 mr-5 flex-col items-center'>
        <img src={image} className=' rounded-xl' alt="" />
    </div>
  )
}
