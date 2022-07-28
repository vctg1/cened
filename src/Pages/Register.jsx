import React from 'react'
import Footer from '../components/Footer'
import RegInstructions from '../components/RegInstructions'
import RegisterForm from '../components/RegisterForm'
import Header from '../components/Header'
import Title from '../components/Title'


export default function Register() {
  return (
    <div>
      <Header/>
    <div className='absolute w-screen min-h-screen flex flex-col pt-10'>
      <header className='text-center'>
        <Title text={'CADASTRO DE ALUNO / INTERNO'}>
        <h2 className='text-xl font-bold'>Matrícula do Reeducando. Contrato de Prestação de Serviços Educacionais</h2>

        </Title>
        </header>
      <RegInstructions/>
      <RegisterForm/>
      <Footer/>
    </div>
    </div>
  )
}
