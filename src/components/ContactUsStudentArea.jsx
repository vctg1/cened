import React from 'react'
import {MdMessage} from 'react-icons/md'


export default function ContactUsStudentArea({studentData}) {
  return (
    <div className='lg:w-5/6 w-full h-full'>
        <div className='lg:p-10 p-5 flex flex-col items-center h-full'>
            <h1 className='flex items-center text-center text-2xl font-bold'><MdMessage/>Fale Conosco</h1>
            <h2 className='text-gray-500 text-center'>Entre em contato conosco</h2>
            <form className='w-full bg-gray-200 mt-5 p-4 rounded-xl'>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='flex flex-col w-full lg:w-1/3 mr-0 lg:mr-5'>
                        <label htmlFor="title-message" className='font-bold'>Título da Mensagem</label>
                        <input type="text" id='title-message' className='p-2 rounded-lg outline-none'/>
                    </div>

                    <div className='flex flex-col w-full lg:w-1/3 mr-0 mt-5 lg:mt-0 lg:mr-5'>
                        <label htmlFor="recipient" className='font-bold'>Destinatário</label>
                        <input type="text" id='recipient' value='Escola CENED'  readOnly className='p-2 bg-gray-300 rounded-lg outline-none'/>
                    </div>

                    <div className='flex flex-col w-full lg:w-1/3 mt-5 lg:mt-0'>
                        <label htmlFor="issuer" className='font-bold'>Emitente</label>
                        <input type="text" id='issuer' value={studentData.nome} readOnly className='p-2 bg-gray-300 rounded-lg outline-none'/>
                    </div>
                </div>

                <div className='w-full mt-5 flex flex-col'>
                    <label htmlFor="message" className='font-bold'>Mensagem</label>
                    <textarea name="message" id="message" cols="30" className='resize-none p-2 outline-none rounded-xl' rows="10"></textarea>
                </div>

                <div className='flex justify-center mt-5'>
                    <button className='bg-green-500 hover:bg-green-700 transition-colors text-lg p-2 rounded-lg font-bold text-white'>Enviar Mensagem</button>
                </div>
            </form>
        </div>
    </div>
  )
}
