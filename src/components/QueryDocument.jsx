import React, { useState } from 'react'
import {MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox} from 'react-icons/md'

export default function QueryDocument() {
    const [typeDoc, setTypeDoc] = useState(1)
  return (
    <div className='w-11/12 mt-10 m-auto text-gray-600 p-4 border-4 rounded-lg border-gray-400 lg:w-1/2'>
        <h2 className='text-2xl text-center font-semibold'>Informe os dados do documento</h2>
        <div className='p-4 mt-5'>
            <h2 className='text-lg font-bold'>Tipo de Documento: </h2>
            <div className='flex flex-col text-sm lg:flex-row lg:justify-between md:flex-col'>
                <div onClick={()=> setTypeDoc(1)} className='flex items-center cursor-pointer'>
                    {typeDoc === 1 ? <MdOutlineCheckBox size={30}/> : <MdOutlineCheckBoxOutlineBlank size={30}/>}
                    Declaração de Curso
                </div>

                <div onClick={()=> setTypeDoc(2)} className='flex mt-2 items-center cursor-pointer'>
                    {typeDoc === 2 ? <MdOutlineCheckBox size={30}/> : <MdOutlineCheckBoxOutlineBlank size={30}/>}
                    Certificado
                </div>

                <div onClick={()=> setTypeDoc(3)} className='flex mt-2 items-center cursor-pointer'>
                    {typeDoc === 3 ? <MdOutlineCheckBox size={30}/> : <MdOutlineCheckBoxOutlineBlank size={30}/>}
                    Certidão Relativa ao Estudo do Interno
                </div>
            </div>
        </div>

        <div className='p-4'>
            <label htmlFor="" className='text-xl font-semibold'>Digite o Registro: </label>
            <div className='flex items-start lg:items-center mt-5 flex-col lg:flex-row lg:justify-between'>
                <input type="text" placeholder='Exemplo: XX-99X99XXX...' className='p-2 outline-none rounded-lg lg:w-3/4 w-11/12'/>
                <button className='text-lg bg-blue-500 hover:bg-blue-800 transition-colors p-2 mt-5 lg:mt-0 rounded-lg text-white'>CONSULTAR</button>
            </div>
        </div>
    </div>
  )
}
