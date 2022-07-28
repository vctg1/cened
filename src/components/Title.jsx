import React from 'react'

export default function Title(props) {
  return (
    <div className='mt-20 text-gray-500 w-full h-28 flex flex-col justify-center items-center p-2 lg:mt-36'>
        <h2 className='text-2xl uppercase lg:text-4xl font-bold text-center'>{props.text}</h2>
			{props.children}
		</div>
  )
}
