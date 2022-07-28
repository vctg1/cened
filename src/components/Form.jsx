import React from 'react'
import { useState } from 'react'
import BoxInfoContact from './BoxInfoContact'
import { TextField, MenuItem, FormControl } from '@mui/material'
import InputMask from 'react-input-mask'
import { useEffect } from 'react'

export default function Form() {
	const [valueName, setValueName] = useState('')
	const [valueCpf, setValueCpf] = useState('')
	const [valuePhone, setValuePhone] = useState('')
	const [valueSmartPhone, setValueSmartPhone] = useState('')
	const [valueEmail, setValueEmail] = useState('')
	const [message, setMessage] = useState('')
	const [uf, setUf] = useState('')
	useEffect(()=>{
		console.log(valuePhone)
	}, [valuePhone])

	function clearElements(){
		setValueCpf('')
		setValueName('')
		setValuePhone('')
		setValueSmartPhone('')
		setValueEmail('')
		setMessage('')
		setUf('')
	}

  return (
		<div className='w-11/12 flex flex-col lg:flex-row font-bold lg:w-3/4 mt-10 m-auto p-6 border-4 border-gray-400 rounded-xl'>
			<form autoComplete='off'>
				<div className='w-full max-w-full p-2 flex flex-wrap'>
					<div className='flex w-full justify-between flex-wrap items-center'>
						<TextField value={valueName} onChange={(e)=> setValueName(e.target.value)} className='w-full md:w-4/5 mb-10 lg:w-3/4' label='Nome'/>
						<div className='w-full lg:w-1/5 mt-5 lg:mt-0'>
						<TextField select className='w-full' onChange={(e)=> setUf(e.target.value)} value={uf} label="UF">
								<MenuItem value="AC">Acre</MenuItem>
								<MenuItem value="AL">Alagoas</MenuItem>
								<MenuItem value="AP">Amapá</MenuItem>
								<MenuItem value="AM">Amazonas</MenuItem>
								<MenuItem value="BA">Bahia</MenuItem>
								<MenuItem value="CE">Ceará</MenuItem>
								<MenuItem value="DF">Distrito Federal</MenuItem>
								<MenuItem value="ES">Espírito Santo</MenuItem>
								<MenuItem value="GO">Goiás</MenuItem>
								<MenuItem value="MA">Maranhão</MenuItem>
								<MenuItem value="MT">Mato Grosso</MenuItem>
								<MenuItem value="MS">Mato Grosso do Sul</MenuItem>
								<MenuItem value="MG">Minas Gerais</MenuItem>
								<MenuItem value="PA">Pará</MenuItem>
								<MenuItem value="PB">Paraíba</MenuItem>
								<MenuItem value="PR">Paraná</MenuItem>
								<MenuItem value="PE">Pernambuco</MenuItem>
								<MenuItem value="PI">Piauí</MenuItem>
								<MenuItem value="RJ">Rio de Janeiro</MenuItem>
								<MenuItem value="RN">Rio Grande do Norte</MenuItem>
								<MenuItem value="RS">Rio Grande do Sul</MenuItem>
								<MenuItem value="RO">Rondônia</MenuItem>
								<MenuItem value="RR">Roraima</MenuItem>
								<MenuItem value="SC">Santa Catarina</MenuItem>
								<MenuItem value="SP">São Paulo</MenuItem>
								<MenuItem value="SE">Sergipe</MenuItem>
								<MenuItem value="TO">Tocantins</MenuItem>
							</TextField>
						</div>
					</div>

					<div className='flex w-4/5 justify-between flex-wrap ml-0 m-5'>
						<div className='flex flex-col mt-5'>
							<InputMask maskChar={''} mask="999.999.999-99" type='text' id='cpf-form' onChange={(e)=> setValueCpf(e.target.value)} value={valueCpf}>
								{()=> <TextField label='CPF'/>}
							</InputMask>
						</div>
						
						<div className='flex flex-col mt-5'>
							<InputMask maskChar={''} mask={'(99)99999-9999'} value={valuePhone} onChange={(e)=> setValuePhone(e.target.value)} id='tel-form'>
								{()=> <TextField label='Telefone Fixo'/>}
							</InputMask>
						</div>

						<div className='flex flex-col mt-5'>
							<InputMask maskChar={''} mask={'(99)99999-9999'} value={valueSmartPhone} onChange={(e)=> setValueSmartPhone(e.target.value)}  id='smart-form' >
								{()=> <TextField label='Telefone'/>}
							</InputMask>
						</div>

					</div>
					<div  className='flex flex-col mt-2 w-11/12'>
						<TextField value={valueEmail} onChange={(e)=> setValueEmail(e.target.value)} label='E-mail'/>
					</div>

					<div className='flex w-full flex-col mt-5'>
						<label htmlFor="msg-form">Mensagem</label>
						<textarea value={message} onChange={(e)=> setMessage(e.target.value)} name="msg-form" id="msg-form" cols="30" rows="10" className='border-2 transition-colors focus:border-blue-600 border-gray-400 resize-none rounded-l-xl p-2 text-lg outline-none w-full'></textarea>
					</div>

					<div className='py-4 flex w-full justify-around flex-wrap'>
						<button type='reset' className='bg-red-600 hover:bg-red-700 transition-colors font-bold text-white p-4 rounded-lg text-xl' 
						onClick={()=>clearElements()}>Limpar</button>

						<button type='submit' className='bg-green-600 hover:bg-green-700 transition-colors ml-0 mt-5 lg:mt-0 md:mt-0 md:ml-5 lg:ml-5 font-bold text-white p-4 rounded-lg text-xl'>ENVIAR MENSAGEM</button>
						
					</div>
				</div>
			</form>
			<BoxInfoContact/>		
		</div>
	)
}
