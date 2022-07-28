import React from 'react'
import {AiFillPhone} from 'react-icons/ai'

export default function MostInfo() {
  return (
    <div className='mt-10 bg-blue-600 p-6 flex flex-col lg:flex-row items-center'>
			<div className='bg-white rounded-full h-24 w-24 flex justify-center items-center'>
				<AiFillPhone size={60} className='text-blue-600'/>
			</div>
			<div className='w-4/5 ml-0 lg:ml-5 text-center lg:text-left text-white'>
				<h2 className='text-2xl mt-5 lg:mt-0 font-bold'>Para maiores informações entre em contato conosco</h2>
				<p className='mt-2 flex'>Telefones: – (61) 3369-6366 / (61) 9951-8961</p>
				<p className='flex mt-2'>Horários de Atendimento: – Segunda a Sexta das 8h às 18h, e aos Sábados das 8h às 12h</p>
			</div>
    </div>
  )
}
