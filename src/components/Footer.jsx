import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col mt-24 bg-gray-600 text-center justify-center text-white h-20 w-screen'>
			<p>ESCOLA CENED © {(new Date()).getFullYear()}. Todos os direitos reservados.</p>
    </div>
  )
}
