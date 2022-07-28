import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItem({text, link}) {
  return (
    <Link to={`/${link}`}>
			<li className='w-fit p-2 m-2 font-bold h-auto transition-colors ease-in delay-70 flex lg:justify-center items-center hover:bg-blue-800 hover:text-white cursor-pointer rounded-xl'>
			{text}
      </li>
		</Link>
  )
}
