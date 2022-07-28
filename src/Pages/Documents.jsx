import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header'
import QueryDocument from '../components/QueryDocument';
import Title from '../components/Title';

export default function Documents() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className='bg-[#EBECF0] absolute'>
        <Header/>
        <div className='pt-10 w-screen min-h-screen'>
            <Title text='AUTENTICIDADE DE DOCUMENTO ESCOLAR'>
                <p className='text-center flex text-lg items-center font-bold'>CONSULTE AQUI DOCUMENTOS PERTINENTES AOS NOSSOS ALUNOS, COMO CERTIFICADOS, OFÍCIOS, INFORMATIVOS E OUTROS...</p>
            </Title>
            <QueryDocument/>
        </div>
        <Footer/>
    </div>
  )
}