import React, {useEffect} from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import Title from '../components/Title'

export default function Contact() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Header/>
    <div className='absolute pt-10 w-screen'>
			<Title text={'CONTATO ESCOLA CENED'}>
        <p className='text-center flex text-lg items-center font-bold'>PREENCHA O FORMULÁRIO ABAIXO PARA ENVIAR MENSAGEM A ESCOLA, OU LIGUE EM UM DOS TELEFONES INFORMADOS.</p>
			</Title>
      <Form/>
      <Footer/>
    </div>
    </div>
  )
}
